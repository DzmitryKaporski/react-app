import { useState } from 'react';

export function ToggleStateAdd(initialVal = false) {
    const [isAdd, setState] = useState(initialVal);

    const toggle = () => {
        setState(!isAdd);
    };
    return [isAdd, toggle];
};

export function ToggleStateDesc(initialVal = false) {
    const [isDescription, setState] = useState(initialVal);

    const toggle = () => {
        setState(!isDescription);
    };
    return [isDescription, toggle];
};

export function ToggleStateEdit(initialVal = false) {
    const [isEdit, setState] = useState(initialVal);

    const toggle = () => {
        setState(!isEdit);
    };
    return [isEdit, toggle];
};

export function ToggleStateSearch(initialVal = false) {
    const [isSearch, setState] = useState(initialVal);

    const toggle = () => {
        setState(!isSearch);
    };
    return [isSearch, toggle];
};
