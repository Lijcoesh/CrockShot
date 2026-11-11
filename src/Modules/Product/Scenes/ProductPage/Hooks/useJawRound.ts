import { useCallback, useState } from 'react';

export const toothCount = 8;

interface RoundState {
    round: number;
    active: number;
    pressed: number[];
    bitten: number | null;
}

function pickActive(): number {
    return Math.floor(Math.random() * toothCount);
}

function freshRound(round: number): RoundState {
    return { round, active: pickActive(), pressed: [], bitten: null };
}

// Eén ronde CrockShot: een willekeurige tand is actief, de rest is veilig.
export function useJawRound() {
    const [state, setState] = useState<RoundState>(() => freshRound(1));

    const press = useCallback((tooth: number) => {
        setState(current => {
            if (current.bitten !== null || current.pressed.includes(tooth)) return current;
            if (tooth === current.active) return { ...current, bitten: tooth };

            return { ...current, pressed: [...current.pressed, tooth] };
        });
    }, []);

    const reset = useCallback(() => {
        setState(current => freshRound(current.round + 1));
    }, []);

    const remaining = toothCount - state.pressed.length - (state.bitten === null ? 0 : 1);
    const lastPressed = state.pressed.at(-1) ?? null;

    return { ...state, remaining, lastPressed, press, reset };
}
