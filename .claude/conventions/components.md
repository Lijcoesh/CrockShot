# Component conventies

## Props via `IProps`, uitpakken in de functie

Elke component met props declareert een lokale `interface IProps` en destructureert die op de eerste regel — niet in de parameterlijst.

```tsx
interface IProps {
    title: string;
    tags?: string[];
    onOpen: (slug: string) => void;
}

export default function ProjectCard(props: IProps) {
    const { title, tags = [], onOpen } = props;

    ...
}
```

- `IProps` staat boven de component, wordt niet geëxporteerd en niet hernoemd (elke file heeft zijn eigen `IProps`).
- Moet een parent de props typen? Exporteer dan een apart benoemd type; laat `IProps` lokaal.
- Geen props → geen `IProps`: `export default function Footer() {`.

## Direct exporteren

Altijd `export default function X()` op de declaratie zelf. Geen losse `export default X;` onderaan, geen `const X = () => ...`, geen `React.FC`.

```tsx
// Goed
export default function ProjectCard(props: IProps) { ... }

// Niet doen
const ProjectCard = (props: IProps) => { ... };
export default ProjectCard;
```

Helpers/hooks in dezelfde file gebruiken named exports (`export function useX()`) of blijven lokaal.

## MUI-componenten in plaats van kale HTML

Bouw markup met MUI-componenten, niet met losse HTML-elementen. Ze nemen het theme over (typografie, kleuren, spacing) en blijven zo consistent.

| Niet | Wel |
|---|---|
| `<p>`, `<span>`, `<h1>`–`<h6>` | `<Typography variant="...">` |
| `<div>` voor layout | `<Box>`, `<Stack>`, `<Container>`, `<Grid>` |
| `<a>` | `<Link>` (met router: `<Link component={RouterLink} to="...">`) |
| `<button>` | `<Button>` / `<IconButton>` |
| `<ul>` / `<li>` | `<List>` / `<ListItem>` |
| `<hr>` | `<Divider>` |
| `<input>`, `<form>`-velden | `<TextField>`, `<Checkbox>`, enz. |

Semantiek houd je via de `component`-prop, niet door terug te vallen op kale HTML:

```tsx
<Box component="section">
<Box component="main" id="main">
<Typography variant="h2" component="h1">  // h1 voor de structuur, h2 voor de stijl
```

Kale HTML alleen als MUI er echt niets voor heeft, en dan liefst via `<Box component="...">`, zoals `<Box component="img" src={...} alt="...">`.

## Hook-volgorde in de component

1. router-/context-hooks
2. `const { classes, cx } = useStyles();`
3. data-/query-hooks
4. `useState` / `useMemo` / `useEffect`
