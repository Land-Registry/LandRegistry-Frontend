import { RefObject } from 'react';
export declare const useClickAway: <E extends Event = Event>(ref: RefObject<HTMLElement | null>, onClickAway: (event: E) => void, events?: string[]) => void;
