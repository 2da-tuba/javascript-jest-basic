const unique = require('./unique');

test('配列で渡したときに重複した数字がない', () => {
    // expect, toEqual を使って、適切なテストを作ってください。
    // 配列の比較にtoBeは使えないことに注意してください。
    expect(unique([1, 1, 2, 3])).toEqual([1, 2, 3]);
});

test('空の配列を渡したとき', () => {
    // expect, toEqual を使って、適切なテストを作ってください。
    // 配列の比較にtoBeは使えないことに注意してください。
    expect(unique([])).toEqual([]);
});

test('引数で渡したときに重複した数字がない', () => {
    // expect, toEqual を使って、適切なテストを作ってください。
    // 配列の比較にtoBeは使えないことに注意してください。
    expect(unique(1, 1, 2, 3)).toEqual([1, 2, 3]);
});
