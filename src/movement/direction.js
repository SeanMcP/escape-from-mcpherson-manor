export const DIRECTIONS = {
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

export const abbrDirectionsInOrder = [
    DIRECTIONS.north.abbr,
    DIRECTIONS.east.abbr,
    DIRECTIONS.south.abbr,
    DIRECTIONS.west.abbr
]
const mapAbbrDirectionToFull = {}

for (let key in DIRECTIONS) {
    mapAbbrDirectionToFull[DIRECTIONS[key].abbr] = DIRECTIONS[key].full
}

export { mapAbbrDirectionToFull }

export const mapAbbrDirectionToOpposite = {
    [DIRECTIONS.north.abbr]: DIRECTIONS.south.abbr,
    [DIRECTIONS.east.abbr]: DIRECTIONS.west.abbr,
    [DIRECTIONS.south.abbr]: DIRECTIONS.north.abbr,
    [DIRECTIONS.west.abbr]: DIRECTIONS.east.abbr
}
