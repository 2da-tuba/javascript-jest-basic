const unique = require('./unique');

test('重複した数字がない', () => {
    // expect, toEqual を使って、適切なテストを作ってください。
    // 配列の比較にtoBeは使えないことに注意してください。
    expect(unique([1, 1, 2, 3])).toEqual([1, 2, 3]);
});