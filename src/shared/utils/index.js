/**
 * Convert seconds to ratio
 * @param {Number} duration 
 * @returns {String} e.g ("00:00")
 */
export const durationToRatio = (duration) => {
    const d = parseInt(duration);

    if (d <= 0) return "00:00";
    const minutes = Math.floor(d % 3600 / 60);
    const seconds = Math.floor(d % 3600 % 60);

    const outMinutes = minutes < 9 ? `0${minutes}` : `${minutes}0`;
    const outSeconds = seconds < 9 ? `0${seconds}` : `${seconds}`;

    return `${outMinutes}:${outSeconds}`;
};

/**
 * Get Year
 * @param {String} date 
 * @returns {String}
 */
export const getYear = (date) => {
    if (!date) return null;
    const dateToYear = new Date(date);
    return dateToYear.getFullYear();
};

/**
 * Convert fans number to string
 * @param {Number} fansNum 
 * @returns {String|Number} e.g (1.2K, 2.3M, 100) 
 */
export const fansNumToString = (fansNum) => {
    const _fansNum = parseInt(fansNum);
    if (_fansNum <= 0) return 0;

    if (_fansNum > 999 && _fansNum < 1000000) {
        return `${(_fansNum / 1000).toFixed(1)}K`;
    } else if (_fansNum > 1000000) {
        return `${(_fansNum / 1000000).toFixed(1)}M`;
    } else {
        return _fansNum;
    }
}