// expect, toBe を使って、適切なテストを作ってください。
const count = require('./count');

test('1を1で返す。', () => {

    expect(count("1")).toBe("1(1)");
});

/*test('文字列を配列に変換する。', () => {

    expect(count("1 1 1 1")).toEqual(["1", "1", "1", "1"]);
});*/

test('文字列にある数字をカウントする。', () => {

    expect(count("1 1 1 1")).toBe("1(4)");
});

test('文字列にある数字をカウントするver2。', () => {

    expect(count("1 1 3 3")).toBe("1(2) 3(2)");
});

test('ランダムな文字列を入力したときにも数字をカウントする。', () => {

    expect(count("1 2 3 1 3 3")).toBe("1(2) 2(1) 3(3)");
});