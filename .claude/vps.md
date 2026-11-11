# VPS

Alle klantsites draaien op één eigen VPS bij TransIP (Amsterdam). Ik beheer hem zelf, de klant merkt er niets van.

```
ssh -t lijcoesh@85.10.151.178
```

- Inloggen kan alleen met een SSH-key (wachtwoordlogin staat uit). `-t` is nodig omdat `sudo` interactief om het wachtwoord vraagt.
- `lijcoesh` is mijn eigen account. `deploy` is voor GitHub Actions: die mag bestanden in `/var/www/<site>/` zetten en alleen de eigen service herstarten.
- Lees eerst, wijzig pas na overleg: het is een productieserver met sites van meerdere klanten.

## Wat er op staat (stand oktober 2026)

Ubuntu 26.04 LTS, 2 GB RAM, geen swap, 96 GB schijf (3% gebruikt).

| Onderdeel | Wat |
|---|---|
| Caddy | webserver en reverse proxy; regelt HTTPS zelf zodra een domein naar de VPS wijst |
| .NET 10 (ASP.NET Core runtime) | voor API's van klantsites |
| fail2ban | blokkeert een IP een uur na 5 mislukte SSH-logins binnen 10 minuten |
| unattended-upgrades | dagelijkse updates; herstart zo nodig om 07:00 (tijdzone Europe/Amsterdam) |
| ufw | firewall: OpenSSH, 80, 443 |

Geen Node op de server: frontends worden in GitHub Actions gebouwd en alleen `dist/` gaat erheen.

### Sites

| Site | Adres nu | Bestanden | Deploy |
|---|---|---|---|
| WaterZacht | `http://85.10.151.178` | `/var/www/waterzacht/site` + `api` | GitHub Actions bij push naar `main` (rsync + service-herstart) |
| Kamerbreed Interieur | `http://85.10.151.178:8080` | `/var/www/kamerbreed` | handmatig; voorbeeld voor de PO, met `noindex` |

- WaterZacht heeft een API (`waterzacht-api.service`, draait als gebruiker `waterzacht` op `127.0.0.1:5080`). Caddy stuurt `/api/*` door; de rest is de statische site. Secrets (Brevo) staan in `/etc/waterzacht/api.env`, alleen leesbaar voor root.
- Geen van beide heeft al een domein. Bij livegang wordt de eerste regel van het `.caddy`-bestand vervangen door het domein (`waterzacht.nl, www.waterzacht.nl {`) en haalt Caddy zelf een certificaat.

## Indeling

```
/etc/caddy/Caddyfile            # alleen: import /etc/caddy/sites/*.caddy
/etc/caddy/sites/<site>.caddy   # één bestand per site
/etc/<site>/api.env             # secrets van een API (chmod 600)
/etc/systemd/system/<site>-api.service
/var/www/<site>/                # eigendom van deploy; site/ en evt. api/
```

Elke site met een API krijgt een eigen systeemgebruiker (zonder login) en een eigen poort op `127.0.0.1` (WaterZacht heeft 5080; de volgende krijgt een andere).

Per `.caddy`-bestand vast: `encode zstd gzip`, `Cache-Control: immutable` op `/assets/*` (Vite hasht de bestandsnamen), `try_files {path} /index.html` voor client-side routing.

## Nieuwe site toevoegen

Het volledige stappenplan, met de configbestanden en de GitHub-workflow als voorbeeld, staat in het WaterZacht-project: `deploy/README.md` en `.github/workflows/deploy-vps.yml`. In het kort: map onder `/var/www` voor `deploy`, `.caddy`-bestand in `/etc/caddy/sites/`, bij een API een systemd-service en een sudoers-regel zodat `deploy` alleen die service mag herstarten, en de GitHub-secrets `VPS_HOST`, `VPS_SSH_KEY` en `VPS_KNOWN_HOSTS`.

## Controleren

- `systemctl status caddy` / `caddy validate --config /etc/caddy/Caddyfile`, na wijzigen `sudo systemctl reload caddy`
- `systemctl status <site>-api`, logs: `journalctl -u <site>-api -n 50`
- Jezelf buitengesloten door fail2ban: inloggen via de console in het TransIP-paneel, dan `sudo fail2ban-client set sshd unbanip <IP>`
- Vóór een livegang een snapshot maken in het TransIP-paneel (het pakket heeft er één).
