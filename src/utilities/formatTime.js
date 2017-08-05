export function formatTime(time) {
    let formatter = new Intl.DateTimeFormat(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone: 'UTC'
    });
    let hourPart = formatter.formatToParts(time).filter((part) => part.type === 'hour')[0];
    let minutePart = formatter.formatToParts(time).filter((part) => part.type === 'minute')[0];
    let dayPeriod = formatter.formatToParts(time).filter((part) => part.type === 'dayperiod')[0];

    console.log(hourPart, minutePart, dayPeriod);
    return `${hourPart['value']}:${minutePart['value']} ${dayPeriod['value']}`;
}