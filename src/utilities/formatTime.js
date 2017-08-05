export function formatTime(time) {
    let options = { hour: 'numeric', minute: 'numeric' };
    let dateTimeFormat = new Intl.DateTimeFormat(undefined, options);
    return dateTimeFormat.format(time);
}