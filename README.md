# lucadev baseline

Startpunt voor klantwebsites: React 19, Vite, TypeScript, MUI en tss-react. De baseline legt de techniek vast, niet het ontwerp of de inhoud.

## Nieuwe klant

1. **Repo aanmaken**: op GitHub bij deze repo **Use this template → Create a new repository**. De klant-repo begint dan met één schone commit, zonder de geschiedenis van de baseline. Niet de map kopiëren: dan gaan `node_modules`, `dist` en `.git` mee.
2. **Installeren**: clonen, `npm ci`, en controleren dat `npm config get registry` `https://registry.npmjs.org/` geeft.
3. **Naam**: vervang `lucadev` in `package.json`, `<title>` en de description in `index.html`, en de kop van deze README. Draai daarna `npm install`, zodat `package-lock.json` de nieuwe naam overneemt.
4. **CLAUDE.md**: de kop en de eerste alinea gaan over de klant (wie, branche, doelgroep), niet meer over de baseline.
5. **Impeccable**: in Claude Code `/impeccable init` draaien; dat legt de klant, doelgroep en toon vast in `PRODUCT.md`. De eerste sessie vraagt eenmalig toestemming voor de ontwerpcontrole-hook (die keuze blijft lokaal in `.impeccable/config.local.json`).
6. **Huisstijl**: kleuren in `src/colors.ts` (contrast WCAG AA), `public/favicon.svg`, en eventueel een ander font: `@fontsource(-variable)/<font>` installeren, importeren in `src/main.tsx`, `fontFamily` in `src/Theme/typography.ts` aanpassen en Inter verwijderen.
7. **LICENSES.md**: favicon en font bijwerken.
8. **Placeholder** in `src/App.tsx` vervangen.
9. **GitHub Pages** pas aanzetten als de klant weet dat ik aan een ontwerp werk en daarmee akkoord is, zie [Preview op GitHub Pages](#preview-op-github-pages). Tot die tijd blijft de repo privé.
10. **Deze sectie** uit de README van de klant halen.

Bij oplevering: de [launch-checklist](.claude/conventions/launch-checklist.md) doorlopen. Livegang op de VPS: zie [.claude/vps.md](.claude/vps.md).

## Aan de slag

```
npm ci
npm run dev
```

| Commando | Doel |
|---|---|
| `npm run dev` | dev server |
| `npm run build` | `tsc -b` + vite build |
| `npm run lint` | eslint |
| `npm run format` | prettier --write |
| `npm run format:check` | prettier --check (CI) |

## Preview op GitHub Pages

Elke push naar `main` zet een previewversie op `https://<account>.github.io/<repo>/` ([deploy-pages.yml](.github/workflows/deploy-pages.yml)), zodat ik het eerste ontwerp met de klant kan delen. De preview krijgt `noindex`; de productiebuild niet.

Eenmalig per nieuwe repo: **Settings → Pages → Source: GitHub Actions**. Op een gratis GitHub-account werkt Pages alleen voor publieke repo's, en de preview is dus voor iedereen met de link te zien.

Komt er een router bij, geef dan de base mee: `<BrowserRouter basename={import.meta.env.BASE_URL}>`. Verwijs in code naar bestanden uit `public/` via `import.meta.env.BASE_URL`, niet met een `/` vooraan.

## Documentatie

- [CLAUDE.md](CLAUDE.md): overzicht en kernconventies
- [.claude/conventions/](.claude/conventions/): componenten, styling, imports, structuur en de launch-checklist
- [.claude/business.md](.claude/business.md): voor wie en hoe ik bouw
- [.claude/vps.md](.claude/vps.md): hosting en deploy
- [LICENSES.md](LICENSES.md): herkomst en licenties van fonts en afbeeldingen
