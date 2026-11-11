import { Box, Button, ButtonBase, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
import { keyframes } from 'tss-react';
import { makeStyles } from 'tss-react/mui';

import {
    hairline,
    mutedText,
    vexaroBlack,
    vexaroCharcoal,
    vexaroGreen,
    vexaroWhite,
} from 'src/colors';
import { toothCount, useJawRound } from 'src/Modules/Product/Scenes/ProductPage/Hooks/useJawRound';

// Geometrie in SVG-eenheden. De tanden staan op een parabool (de onderkaak);
// de bovenkaak ligt erboven en klapt bij de actieve tand dicht.
// Op telefoons een smallere viewBox, zodat de boog het scherm vult en elke tand groot genoeg is.
const height = 430;
const gumTop = 250;
const gumDepth = 60;
const jawThickness = 34;
const openGap = 200;
const biteTravel = 85;
const rulerY = 388;

function gumAt(u: number): number {
    return gumTop + gumDepth * (1 - u * u);
}

function scaleAt(u: number): number {
    return 0.82 + 0.18 * (1 - u * u);
}

function buildGeometry(width: number, spread: number) {
    const xAt = (u: number) => width / 2 + u * spread;
    const uMax = width / 2 / spread;
    const steps = 48;
    const edge = (offset: number) =>
        Array.from({ length: steps + 1 }, (_, s) => {
            const u = -uMax + (2 * uMax * s) / steps;
            return [xAt(u), gumAt(u) + offset] as const;
        });
    const toPoints = (points: (readonly [number, number])[]) =>
        points.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(' L');
    const band = (offset: number, shift: number) => {
        const near = edge(offset);
        const far = [...near].reverse().map(([x, y]) => [x, y + shift] as const);
        return `M${toPoints(near)} L${toPoints(far)} Z`;
    };

    const teeth = Array.from({ length: toothCount }, (_, i) => {
        const u = (i - (toothCount - 1) / 2) / ((toothCount - 1) / 2);
        const scale = scaleAt(u);
        const slope = (gumDepth * -2 * u) / spread;

        return {
            index: i,
            x: xAt(u),
            gum: gumAt(u),
            w: 62 * scale,
            h: 118 * scale,
            angle: (Math.atan(slope) * 180) / Math.PI,
        };
    });

    const upperFangs = Array.from({ length: toothCount - 1 }, (_, i) => {
        const u = (i + 0.5 - (toothCount - 1) / 2) / ((toothCount - 1) / 2);
        const scale = scaleAt(u);

        return { x: xAt(u), base: gumAt(u) - openGap, w: 40 * scale, h: 42 * scale };
    });

    return {
        width,
        teeth,
        upperFangs,
        lowerJaw: band(0, jawThickness),
        upperJaw: band(-openGap, -jawThickness),
        gumEdge: `M${toPoints(edge(0))}`,
    };
}

const wide = buildGeometry(1000, 420);
const compact = buildGeometry(600, 250);

const shake = keyframes`
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-0.6%); }
    60% { transform: translateX(0.4%); }
`;

const useStyles = makeStyles()(theme => ({
    root: {
        width: '100%',
    },
    stage: {
        position: 'relative',
        width: '100%',
    },
    stageBitten: {
        animation: `${shake} 220ms 120ms ease-out`,
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
    },
    layer: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'visible',
        pointerEvents: 'none',
    },
    jawBand: {
        fill: vexaroCharcoal,
    },
    jawEdge: {
        fill: 'none',
        stroke: vexaroWhite,
        strokeWidth: 2,
    },
    leader: {
        stroke: hairline,
        strokeWidth: 1.5,
    },
    leaderActive: {
        stroke: vexaroGreen,
    },
    ruler: {
        stroke: vexaroCharcoal,
        strokeWidth: 1.5,
    },
    rulerLabel: {
        fill: mutedText,
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
        fontSize: 22,
        textAnchor: 'middle',
    },
    rulerLabelActive: {
        fill: vexaroGreen,
    },
    upper: {
        transition: 'transform 450ms cubic-bezier(0.16, 1, 0.3, 1)',
        '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
    },
    upperClosed: {
        transform: `translateY(${biteTravel}px)`,
        transition: 'transform 130ms cubic-bezier(0.6, 0, 0.9, 0.4)',
    },
    upperFang: {
        fill: vexaroWhite,
    },
    tooth: {
        position: 'absolute',
        transformOrigin: '50% 100%',
        overflow: 'hidden',
        '& svg': {
            display: 'block',
            width: '100%',
            height: '100%',
            transition: 'transform 140ms ease-out',
        },
        '& path': {
            fill: vexaroWhite,
            stroke: vexaroWhite,
            strokeWidth: 2,
            vectorEffect: 'non-scaling-stroke',
            transition: 'fill 120ms ease-out',
        },
        '&:hover:not([aria-disabled="true"]) svg': { transform: 'translateY(-5%)' },
        '&:focus-visible': {
            outline: 'none',
        },
        '&:focus-visible path': {
            stroke: vexaroGreen,
            strokeWidth: 4,
        },
        '&[aria-disabled="true"]': { cursor: 'default' },
    },
    toothPressed: {
        '& svg': { transform: 'translateY(22%)' },
        '& path': { fill: vexaroBlack },
    },
    toothBitten: {
        '& path': { fill: vexaroGreen, stroke: vexaroGreen },
    },
    status: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
        minHeight: 52,
        marginTop: theme.spacing(1),
        borderTop: `1px solid ${vexaroCharcoal}`,
        paddingTop: theme.spacing(1.5),
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: theme.spacing(1),
        },
    },
    message: {
        fontWeight: 500,
    },
    messageBite: {
        color: vexaroGreen,
        fontFamily: theme.typography.h1.fontFamily,
        fontWeight: 700,
    },
    counter: {
        color: mutedText,
        whiteSpace: 'nowrap',
    },
}));

const fangPath = 'M2 120 C 4 78, 18 30, 30 2 C 42 30, 56 78, 58 120 Z';

export default function JawChart() {
    const theme = useTheme();
    const isPhone = useMediaQuery(theme.breakpoints.down('sm'));
    const { classes, cx } = useStyles();
    const { round, pressed, bitten, remaining, lastPressed, press, reset } = useJawRound();

    const toothRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const resetRef = useRef<HTMLButtonElement | null>(null);
    const focusAfterReset = useRef(false);

    const geometry = isPhone ? compact : wide;
    const { width, teeth, upperFangs, lowerJaw, upperJaw, gumEdge } = geometry;
    const isOver = bitten !== null;

    useEffect(() => {
        if (isOver && toothRefs.current.includes(document.activeElement as HTMLButtonElement)) {
            resetRef.current?.focus();
        }
    }, [isOver]);

    useEffect(() => {
        if (focusAfterReset.current) {
            focusAfterReset.current = false;
            toothRefs.current[0]?.focus();
        }
    }, [round]);

    function handleReset() {
        focusAfterReset.current = true;
        reset();
    }

    let message = 'Druk een tand in. Eén van de acht bijt.';
    if (isOver) message = `Tand ${bitten + 1} bijt. Jij hebt de drinkbeurt.`;
    else if (lastPressed !== null) message = `Tand ${lastPressed + 1}: veilig. Volgende speler.`;

    return (
        <Box className={classes.root}>
            <Box
                className={cx(classes.stage, isOver && classes.stageBitten)}
                style={{ aspectRatio: `${width} / ${height}` }}
            >
                <svg
                    className={classes.layer}
                    viewBox={`0 0 ${width} ${height}`}
                    aria-hidden="true"
                >
                    <path className={classes.jawBand} d={lowerJaw} />
                    <path className={classes.jawEdge} d={gumEdge} />
                    {teeth.map(t => (
                        <line
                            key={`leader-${t.index}`}
                            className={cx(
                                classes.leader,
                                bitten === t.index && classes.leaderActive,
                            )}
                            x1={t.x}
                            x2={t.x}
                            y1={t.gum + jawThickness + 6}
                            y2={rulerY}
                        />
                    ))}
                    <line className={classes.ruler} x1={0} x2={width} y1={rulerY} y2={rulerY} />
                    {teeth.map(t => (
                        <g key={`tick-${t.index}`}>
                            <line
                                className={classes.ruler}
                                x1={t.x}
                                x2={t.x}
                                y1={rulerY}
                                y2={rulerY + 10}
                            />
                            <text
                                className={cx(
                                    classes.rulerLabel,
                                    bitten === t.index && classes.rulerLabelActive,
                                )}
                                x={t.x}
                                y={rulerY + 38}
                            >
                                {t.index + 1}
                            </text>
                        </g>
                    ))}
                </svg>

                {teeth.map(t => {
                    const isPressed = pressed.includes(t.index);
                    const isBitten = bitten === t.index;

                    return (
                        <ButtonBase
                            key={t.index}
                            ref={element => {
                                toothRefs.current[t.index] = element;
                            }}
                            className={cx(
                                classes.tooth,
                                isPressed && classes.toothPressed,
                                isBitten && classes.toothBitten,
                            )}
                            style={{
                                left: `${(t.x / width) * 100}%`,
                                top: `${(t.gum / height) * 100}%`,
                                width: `${(t.w / width) * 100}%`,
                                height: `${(t.h / height) * 100}%`,
                                transform: `translate(-50%, -100%) rotate(${t.angle}deg)`,
                            }}
                            aria-disabled={isPressed || isOver}
                            aria-pressed={isPressed || isBitten}
                            aria-label={`Tand ${t.index + 1}`}
                            onClick={() => press(t.index)}
                            disableRipple
                        >
                            <svg viewBox="0 0 60 120" preserveAspectRatio="none" aria-hidden="true">
                                <path d={fangPath} />
                            </svg>
                        </ButtonBase>
                    );
                })}

                <svg
                    className={classes.layer}
                    viewBox={`0 0 ${width} ${height}`}
                    aria-hidden="true"
                >
                    <g className={cx(classes.upper, isOver && classes.upperClosed)}>
                        {upperFangs.map(f => (
                            <path
                                key={f.x}
                                className={classes.upperFang}
                                d={`M${f.x - f.w / 2},${f.base} L${f.x},${f.base + f.h} L${f.x + f.w / 2},${f.base} Z`}
                            />
                        ))}
                        <path className={classes.jawBand} d={upperJaw} />
                    </g>
                </svg>
            </Box>

            <Box className={classes.status}>
                <Typography
                    className={cx(classes.message, isOver && classes.messageBite)}
                    role="status"
                >
                    {message}
                </Typography>
                {isOver ? (
                    <Button ref={resetRef} variant="outlined" color="inherit" onClick={handleReset}>
                        Zet hem weer op spanning
                    </Button>
                ) : (
                    <Typography variant="body2" className={classes.counter}>
                        Ronde {round} · nog {remaining} {remaining === 1 ? 'tand' : 'tanden'}
                    </Typography>
                )}
            </Box>
        </Box>
    );
}
