module.exports = function check(str, bracketsConfig) {
    let checkArr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[0] == 1) {
            return true;
        }
        if (
            str[i] == "{" ||
            str[i] == "(" ||
            str[i] == "[" ||
            (str[i] == "|" && checkArr[checkArr.length - 1] != "|")
        ) {
            checkArr.push(str[i]);
        } else if (
            (checkArr[checkArr.length - 1] == "{" && str[i] == "}") ||
            (checkArr[checkArr.length - 1] == "(" && str[i] == ")") ||
            (checkArr[checkArr.length - 1] == "[" && str[i] == "]") ||
            (str[i] == "|" && checkArr[checkArr.length - 1] == "|")
        ) {
            checkArr.pop();
        } else {
            return false;
        }
    }
    return checkArr[0] == undefined ? true : false;
};
