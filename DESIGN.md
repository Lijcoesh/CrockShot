---
name: CrockShot
description: Productpagina voor CrockShot van Vexaro, getekend als technische gebitskaart op zwart.
colors:
  vexaro-black: "#151515"
  vexaro-white: "#F5F5F2"
  vexaro-charcoal: "#414141"
  vexaro-green: "#0FA958"
  green-hover: "#2EC174"
  ink: "#1E1E1E"
  hairline: "#2E2E2E"
  muted-text: "#B4B4AE"
  error: "#FF7A6B"
typography:
  display:
    fontFamily: "Montserrat, Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(3.25rem, 12.5vw, 9.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Montserrat, Inter Variable, system-ui, sans-serif"
    fontSize: "clamp(2rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Montserrat, Inter Variable, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  body-small:
    fontFamily: "Inter Variable, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    lineHeight: 1.55
  label:
    fontFamily: "Montserrat, Inter Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 700
    letterSpacing: "0.04em"
  numeral:
    fontFamily: "Montserrat, Inter Variable, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 1
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  section-mobile: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.vexaro-green}"
    textColor: "{colors.vexaro-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  button-primary-large:
    backgroundColor: "{colors.vexaro-green}"
    textColor: "{colors.vexaro-black}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 28px"
    height: "56px"
  button-primary-hover:
    backgroundColor: "{colors.green-hover}"
    textColor: "{colors.vexaro-black}"
  button-primary-disabled:
    backgroundColor: "{colors.vexaro-charcoal}"
    textColor: "{colors.vexaro-white}"
  button-outlined:
    backgroundColor: "{colors.vexaro-black}"
    textColor: "{colors.vexaro-white}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "12px 24px"
  input-outlined:
    backgroundColor: "{colors.vexaro-black}"
    textColor: "{colors.vexaro-white}"
    rounded: "{rounded.none}"
    padding: "16px"
  dialog:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.vexaro-white}"
    rounded: "{rounded.none}"
---

# Design System: CrockShot

## Overview

**Creative North Star: "De gebitskaart"**

CrockShot is getekend als een technische tekening op mat zwart: een kaakboog van acht genummerde tanden, charcoal maatlijnen met tick-marks en kale tabulaire cijfers. Het mechanisme is het verhaal, dus het systeem toont het mechanisme en verder niets. Alles staat op Vexaro Black; off-white draagt tanden en tekst, charcoal draagt structuur, en groen verschijnt alleen waar iets bijt of waar je iets doet.

De basis is premium rust: rechte hoeken, één kolom van maximaal 1200px, ruime secties gescheiden door een enkele haarlijn. De brutaliteit zit in de details: een display-kop in Montserrat Bold-hoofdletters die de volle breedte vult, een speelbare tand die de bovenkaak laat dichtklappen, een beet die groen kleurt. Beweging is één moment, de beet; de rest staat stil.

Bevestigde afwijzingen (uit het richtingscontract): geen gloed, geen glas, geen afgeronde hoeken, geen split hero met productfoto, geen rij van drie stapkaarten.

**Key Characteristics:**
- Donker vlak (Vexaro Black) met off-white tekst en charcoal haarlijnen.
- Groen als accent op hooguit 5% van het scherm: actieve markering, primaire knop, beet.
- Montserrat Bold voor display, koppen, cijfers en knoppen; Inter voor lopende tekst.
- Rechte hoeken overal (0px).
- Structuur via 1px charcoal lijnen en tick-marks, niet via kaarten of schaduw.
- Kale cijfers 1–8 en 1–4 in Montserrat Bold als indexen, zonder prefix.

## Colors

Een monochroom zwart-wit-charcoal-palet uit de Vexaro Brand Bible, met één groen accent dat schaars blijft (verhouding ± 60/25/10/5).

### Primary
- **Vexaro Green** (vexaro-green): de primaire knop (met zwarte tekst), de actieve/gebeten tand, de leader-lijn en het rulercijfer van de gebeten tand, de beet-stap in de spelregels, de focusring, tekstcursor en tekstselectie, de bevestigingslijn na aanmelden.
- **Green Hover** (green-hover): alleen de hovertoestand van de groene knop; zwarte tekst blijft boven 4.5:1.

### Neutral
- **Vexaro Black** (vexaro-black): paginavlak, invoervelden, ingedrukte tanden (wit keert om naar zwart), tekst op groen.
- **Vexaro White** (vexaro-white): primaire tekst, tanden, kaakrand, display-koppen, staptellers.
- **Vexaro Charcoal** (vexaro-charcoal): de haarlijnen en maatlijnen, sectiegrenzen, kaakbanden in de tandboog, invoerrand in rust, uitgeschakelde knop, divider.
- **Ink** (ink): het enige verhoogde vlak (dialoog/Paper), net boven het zwart.
- **Hairline** (hairline): de fijnste lijnen op zwart: leader-lijnen van tand naar maatlijn, scrollbar-duim.
- **Muted Text** (muted-text): secundaire tekst, intro's, toelichtingen, rondeteller, rulercijfers in rust, invoerlabel (9:1 op zwart).
- **Error** (error): foutmeldingen op zwart (7:1).

### Named Rules
**The Vijf Procent Rule.** Groen staat alleen op wat bijt of wat je bedient: de actieve markering, de primaire knop en de beet. Nooit als vlak, nooit als decoratie, nooit voor kleine tekst op charcoal.

**The Omkeer Rule.** Toestand toont zich door omkeren van wit naar zwart, niet door kleur of gloed; groen is gereserveerd voor de beet zelf.

## Typography

**Display Font:** Montserrat 700 (met Inter Variable, system-ui)
**Body Font:** Inter Variable (met system-ui, -apple-system, Segoe UI)

**Character:** Montserrat Bold in hoofdletters is het brutale merkgeluid, strak getrackt; Inter houdt de lopende tekst rustig en leesbaar. Beide gebundeld via `@fontsource`, nooit via een CDN.

### Hierarchy
- **Display** (h1): uitsluitend de productnaam in hoofdletters over de volle breedte; in de hero geschaald naar de containerbreedte (15.5cqi) zodat CROCKSHOT de kolom precies vult.
- **Headline** (h2): sectiekoppen, `text-wrap: balance`. Grotere varianten (tagline, slotkop in hoofdletters) schalen met clamp maar houden dezelfde familie en tracking.
- **Title** (h3): onderdeelnamen, stapnamen, dialoogkopjes.
- **Body** (body1): lopende tekst, max 48–60ch; secundaire tekst in muted-text.
- **Body small** (body2, 500): toelichtingen, rondeteller, afzenderregel, figuurbijschrift.
- **Label** (button): knoppen in Montserrat Bold-hoofdletters met 0.04em tracking.
- **Numeral**: indexcijfers (stappen 3rem, onderdelen, rulercijfers) in Montserrat Bold, kaal, zonder prefix.

### Named Rules
**The Kale Cijfers Rule.** Nummers zijn het ornament: Montserrat Bold, tabulair, zonder "T" of "Stap" ervoor. Body staat op `tabular-nums`.

**The Hoofdletters Alleen Groot Rule.** Hoofdletters zijn voor display, de slotkop en knoppen; lopende tekst en kleine labels blijven in zinsnaam.

## Layout

Eén gecentreerde kolom van maximaal 1200px (contentMaxWidth) met 32px zijpadding, op telefoon 16px. Secties staan onder elkaar met 96px verticale padding (64px op telefoon) en een kop-marge van 48px (32px op telefoon); de slotsectie krijgt meer lucht (112px, 80px vanaf md omlaag). Spacing volgt MUI's 8px-basis.

Inhoud binnen een sectie gebruikt asymmetrische grids die vanaf `md` omlaag naar één kolom vallen: hero-pitch 5fr/6fr, onderdelen 7fr/5fr, 18+-blok auto/1fr. De spelregels lopen als vier kolommen, twee vanaf `md`, één vanaf `sm`. De hero gebruikt `container-type: inline-size` zodat de display-kop met de kolom meeschaalt. De tandboog gebruikt op telefoons een smallere geometrie zodat elke tand groot genoeg blijft om in te drukken. Responsief alleen via MUI-breakpoints.

## Elevation & Depth

Het systeem is plat. Paper staat standaard op elevation 0 zonder achtergrondverloop; diepte komt uit tonale lagen (ink boven black) en 1px charcoal randen, niet uit schaduw. De dialoog onderscheidt zich door een ink-vlak met charcoal rand.

### Named Rules
**The Geen Gloed Rule.** Geen gloed, geen glas, geen blur. Wat los moet staan krijgt een haarlijn, geen schaduw.

## Shapes

Rechte hoeken overal (0px): knoppen, iconknoppen, invoervelden, dialoog, kaders. De vormtaal is technische tekening: 1px charcoal lijnen bovenaan secties, lijstitems en stappen; korte verticale tick-marks (1px × 11px) op het startpunt van een lijn; een 2px kader rond het 18+-cijfer. De enige organische vorm is de tand zelf, een scherpe hoektand op een parabolische kaakboog. De ronde genummerde markers op de productfoto zijn de enige cirkels: annotaties op een foto, geen containers.

### Named Rules
**The Maatlijn Rule.** Scheiding gebeurt met een 1px charcoal lijn bovenaan, eventueel met een tick-mark, nooit met een kaart, achtergrondvlak of afgeronde rand.

## Components

### Buttons
- **Shape:** rechte hoeken (0px), geen elevation.
- **Primary:** Vexaro Green met Vexaro Black-tekst, Montserrat Bold-hoofdletters; padding 12px 24px, groot 16px 28px op 0.9375rem; in het wachtlijstformulier minimaal 56px hoog, gelijk aan het invoerveld.
- **Hover / Focus / Active:** hover naar green-hover in 120ms ease-out; focus via de globale 2px groene outline met 3px offset; active zakt 1px.
- **Disabled:** charcoal vlak met off-white tekst.
- **Outlined (secundair):** `color="inherit"` outline op zwart, voor de reset van de ronde.

### Inputs / Fields
- **Style:** outlined, zwart vlak, charcoal rand, rechte hoeken, 16px padding; label in muted-text.
- **Hover:** rand naar muted-text.
- **Focus:** 2px Vexaro Green-rand, label naar off-white, groene cursor.
- **Error:** error-kleur in helpertekst, helpertekst zonder inspringing op 0.875rem.

### Navigation
- Een smalle balk bovenaan de hero: afzender ("Vexaro · Play Different.") links in body small, ankerlinks rechts in off-white 500, onderstreping alleen op hover, onderstreping op 0.2em offset. Op telefoon verdwijnt de optionele link.
- Skip-link: groen vlak, zwarte tekst, schuift bij focus in beeld.

### Sectie
- Elke sectie: 1px charcoal bovenlijn, h2-kop, optionele intro in muted-text tot 60ch, dan de inhoud.

### Genummerde lijst
- Items met een 1px charcoal bovenlijn (laatste ook onderlijn), links een kaal Montserrat-cijfer in muted-text, rechts h3 + muted body. Spelregelstappen gebruiken een groot off-white cijfer (3rem) met tick-mark; alleen de beet-stap is groen.

### De tandboog (signature)
- Acht indrukbare off-white hoektanden op een charcoal kaakband met off-white tandvleesrand, leader-lijnen in hairline naar een charcoal maatlijn met tick-marks en cijfers 1–8 in muted-text. Hover tilt de tand 5% op; ingedrukt zakt hij 22% en keert naar zwart; de gebeten tand, zijn leader en zijn cijfer worden groen. Focus is een 4px groene omtrek van de tand. Daaronder een statusregel met rondeteller rechts en, na de beet, de resetknop.
- **Motion:** de bovenkaak klapt in 130ms dicht (cubic-bezier(0.6, 0, 0.9, 0.4)), opent in 450ms (cubic-bezier(0.16, 1, 0.3, 1)), met een korte schok van 220ms. Bij `prefers-reduced-motion` vervallen transitie en schok.

### Bevestiging
- Na aanmelden vervangt een blok met 2px groene bovenlijn het formulier: h3 plus één zin.

## Do's and Don'ts

### Do:
- **Do** zet alles op Vexaro Black en gebruik off-white voor tekst en tanden, muted-text voor secundaire tekst.
- **Do** houd groen bij de primaire knop, de actieve markering en de beet; groene knoppen krijgen zwarte tekst.
- **Do** scheid secties en lijstitems met een 1px charcoal bovenlijn, eventueel met tick-mark.
- **Do** houd alle hoeken recht (0px).
- **Do** zet cijfers kaal in Montserrat Bold, zonder prefix.
- **Do** beperk beweging tot het beet-moment en respecteer `prefers-reduced-motion`.
- **Do** importeer kleuren uit `src/colors.ts` en maten uit `src/Theme/sizes.ts`.

### Don't:
- **Don't** gebruik gloed, glas, blur of zachte schaduwen als diepte.
- **Don't** gebruik groen als vlak, decoratie of voor kleine tekst op charcoal.
- **Don't** zet een eyebrow, overline of kicker boven een kop.
- **Don't** bouw het Vexaro-logo na in een ander lettertype.
- **Don't** gebruik kaarten met achtergrondvlak of afgeronde hoeken om inhoud te groeperen.
- **Don't** zet een "T" of ander prefix voor tandnummers.
