/**
 * 与えられた数列から、重複した数字を消した配列を取得する
 * @param  {...number} args 数列
 * @returns number[] 重複した数字が消された数列
 */
function unique(...args) {
    return Array.from(new Set(...args));
}

module.exports = unique;