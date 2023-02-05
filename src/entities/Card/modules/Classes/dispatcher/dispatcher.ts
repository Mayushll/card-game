export function CreateClass(hero_class: string): TMultiplier {
    return Classes[hero_class]
}

interface TMultiplier {
    dmg_multiplier: {
        [key: string]: number
    }
}

interface TClasses {
    [key: string]: TMultiplier
}

const Classes: TClasses = {
    lancer: Lancer(),
    saber: Saber(),
    ruler: Ruler(),
    archer: Archer(),
}

function Archer(): TMultiplier {
    let dmg_multiplier = {
        saber: 1,
        lancer: 1.5,
        ruler: 0.5,
        archer: 1,
    }
    return {
        dmg_multiplier,
    }
}
function Lancer(): TMultiplier {
    let dmg_multiplier = {
        saber: 0.75,
        lancer: 1,
        ruler: 1.25,
        archer: 1.5,
    }
    return {
        dmg_multiplier,
    }
}
function Saber(): TMultiplier {
    let dmg_multiplier = {
        saber: 1,
        lancer: 1,
        ruler: 0.75,
        archer: 1.25,
    }
    return {
        dmg_multiplier,
    }
}
function Ruler(): TMultiplier {
    let dmg_multiplier = {
        saber: 1.25,
        lancer: 0.75,
        ruler: 1,
        archer: 1.25,
    }
    return {
        dmg_multiplier,
    }
}
