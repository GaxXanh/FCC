/**
 * Created by phamanh on 12/28/15.
 */
function titleCase(str) {
    if (str.trim().length === 0) return;
    var myArray = str.split(' ');
    for (var i = 0; i < myArray.length; i++) {
        if (myArray[i].trim().length === 1) {
            myArray[i] = myArray[i].toUpperCase();
        } else {
            var charAtIndexOf0 = myArray[i].charAt(0).toUpperCase();
            var b = myArray[i].split('');
            b.shift();
            b = b.join('');
            myArray[i] = charAtIndexOf0 + b;
        }
    }
    return myArray.join(' ');
}

function largestOfFour(arr) {
    var arrOfMax = [];
    for (var i = 0; i < arr.length; i++) {
        var index = 0;
        for (var j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > arr[i][index]) {
                index = j;
            }
        }
        arrOfMax.push(arr[i][index]);
    }
    return arrOfMax;
}

function end(str, target) {
// "Never give up and good luck will find you."
// -- Falcor
    return str.substr(-target.length).toLowerCase() === target.toLowerCase();
}

function repeat(str, num) {
// repeat after me
    var returnStr = "";
    if (num <= 0) return "";
    while (num-- > 0) {
        returnStr += str;
    }
    return returnStr;
}

function truncate(str, num) {
// Clear out that junk in your trunk
    if (num < 0) return "";
    if (num >= str.trim().length) return str;
    var myArray = "";
    if (num <= 3) {
        myArray = str.trim().split('');
        return myArray.splice(0, num).join('') + "...";
    }
    myArray = str.trim().split(' ');
    var returnStr = "";
    for (var i = 0; i < myArray.length && num > 0; i++) {
        if (myArray[i].length < num) {
            returnStr += myArray[i] + ' ';
            num -= myArray[i].length + 1;
        } else {
            break;
        }
    }
    return returnStr.trim() + "...";
}

function chunk(arr, size) {
// Break it up.
    var myArr = [];
    var childArr;
    for (var i = 0; i < arr.length; i += size) {
        childArr = [];
        childArr = arr.slice().splice(i, size);
        myArr.push(childArr);
    }
    return myArr;
}

function slasher(arr, howMany) {
    if (howMany < 0) return "";
    if (howMany === 0) return arr;
    return arr.splice(howMany);
}

function mutation(arr) {
    var firstString = arr[0].toLowerCase().split('');
    var secondString = arr[1].trim().toLowerCase().split('');
    for (var i = 0; i < secondString.length; i++) {
        if (firstString.indexOf(secondString[i]) == -1) return false;
    }
    return true;
}

function bouncer(arr) {
    function isBigEnough(value) {
        if (typeof value === 'number' && (value > 0 || value < 0)) return true;
        if (typeof value === 'string' && value !== "") return true;
        return false;
    }

    return arr.filter(isBigEnough);
}

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
    var destroyArray = args[0];
    var bulletArray = args.slice(1);
    function checkCondition(value) {
        for (var i = 0; i < bulletArray.length; i++){
            if (value === bulletArray[i]) return false;
        }
        return true;
    }
    return destroyArray.filter(checkCondition);
}

function where(arr, num) {
    // Find my place in this sorted array.
    var sortedArray = arr.sort(function sortNumberAsc(a,b){
        return a-b;
    });
    for(var i = 0; sortedArray.length; i++){
        if (sortedArray[i] === num) return i;
        if (sortedArray[i] > num) return i;
        if (i === sortedArray.length) return sortedArray.length;
    }
}

document.writeln(where([2, 5, 10], 15));
//destroyer([1, 2, 3, 1, 2, 3], 5, 3);
//bouncer([7, "abc", 13, false, "", null, undefined, NaN, 32, 9]);
//mutation(["hello", "hey"]);
//slasher([1, 2, 3], 2);
//chunk([0, 1, 2, 3, 4, 5], 2);
//truncate("A-", 1);
//repeat("abc", 3);
//end("Bastian", "n");
//largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
