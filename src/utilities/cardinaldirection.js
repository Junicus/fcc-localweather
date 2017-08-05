export function calculateCardinalDirection(angle) {
    console.log(angle);
    const roseCompass = [
        { start: 10, end: 34, cardinal: 'NNE' },
        { start: 34, end: 56, cardinal: 'NE' },
        { start: 56, end: 78, cardinal: 'ENE' },
        { start: 78, end: 101, cardinal: 'E' },
        { start: 101, end: 124, cardinal: 'ESE' },
        { start: 124, end: 146, cardinal: 'SE' },
        { start: 146, end: 168, cardinal: 'SSE' },
        { start: 168, end: 191, cardinal: 'S' },
        { start: 191, end: 214, cardinal: 'SSW' },
        { start: 214, end: 236, cardinal: 'SW' },
        { start: 236, end: 258, cardinal: 'WSW' },
        { start: 258, end: 281, cardinal: 'W' },
        { start: 281, end: 304, cardinal: 'WNW' },
        { start: 304, end: 326, cardinal: 'NW' },
        { start: 326, end: 348, cardinal: 'NNW' },
    ];

    let cardinality = roseCompass.filter((compass) => {
        return (angle >= compass.start && angle < compass.end);
    });

    console.log(cardinality);
    return (cardinality) ? cardinality[0].cardinal : 'N';
}
