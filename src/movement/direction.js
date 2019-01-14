export const DIRECTIONS = {
    north: {
        abbr: 'n',
        full: 'north'
    },
    north: {
        abbr: 'n',
        full: 'north'
    },
    east: {
        abbr: 'e',
        full: 'east'
    },
    south: {
        abbr: 's',
        full: 'south'
    },
    west: {
        abbr: 'w',
        full: 'west'
    },
    back: {
        abbr: 'b',
        full: 'back'
    }
}

const listAbbrDirections = []
const abbrDirectionToFull = {}

for (let key in DIRECTIONS) {
    // for listAbbrDirections
    if (key !== DIRECTIONS.back.full)
        listAbbrDirections.push(DIRECTIONS[key].abbr)
    
        // for abbrDirectionToFull
    abbrDirectionToFull[DIRECTIONS[key].abbr] = key
}

export { listAbbrDirections, abbrDirectionToFull }

export const oppositeDirection = {
    [DIRECTIONS.north.abbr]: DIRECTIONS.south.abbr,
    [DIRECTIONS.east.abbr]: DIRECTIONS.west.abbr,
    [DIRECTIONS.south.abbr]: DIRECTIONS.north.abbr,
    [DIRECTIONS.west.abbr]: DIRECTIONS.east.abbr
}
