/**
 * the RandomStr serves as a way to crypto the url with a random string.
 * @param length the length pf random string.
 * @returns {string} the random string
 *
 *
 */
function RandomStr (length){
    const regularChar = ["A", "a", "b", "B", "c", "C", "D", "d", "E", "e", "f", "F", "G", "g", "H", "h", "L", "l", "J", "j", "K", "k", "I", "i", "M", "m", "n", "N", "O", "o", "P", "p", "Q", "q", "R", "r", "S", "s", "G", "g", "U", "u", "Y", "y", "W", "w", "X", "x", "Z", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let str="";
    let i=0;
    for (i=0;i<length;i++){
        str=str+regularChar.at((Math.random()*60));
    }
    return str;
}
document.getElementById("clicktoJump").action = `httpValidate.html?token=${RandomStr(12)}`;

