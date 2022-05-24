/**
 * 各数字の出現数を表す文字列を返す
 * @param  {string} inputString 数列の文字列。例えば"1 3 1 1 3 3"
 * @returns {string} 各数字の出現数を表す文字列。例えば"1(3) 3(3)"
 */
function count(inputString) {
    let arr = inputString.split(' ');
    let obj = {};
    let sumstr = '';
    

    for(let i = 0; i < arr.length; i++){
        if(obj.hasOwnProperty(arr[i])){
            obj[arr[i]] += 1;
        }else{
            obj[arr[i]] = 1;//ここでオブジェクトに新しくキーとバリューを追加。
        }
    }

    let strtoarr = Array.from(new Set(arr));
    
    let n = [];
    for(let i = 0; i < strtoarr.length; i++){
        n.push(strtoarr[i] + "(" + Object.values(obj)[i] + ")");
    }

    return n.join(' ');
}
module.exports = count;