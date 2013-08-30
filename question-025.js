/*
The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?
*/

function arrayAdd(array1, array2) {
    var ans = [], arrayBig, arraySmall, temp, remainder = 0;
    if (array1.length >= array2.length) {
        arrayBig = array1.slice();
        arraySmall = array2.slice();
    }
    else {
        arrayBig = array2.slice();
        arraySmall = array1.slice();
    }
    for (var j = 0; j < arraySmall.length; j++) {
        temp = arrayBig[j] + arraySmall[j];
        ans.push((temp % 10) + remainder);
        remainder = Math.floor(temp / 10);
    }
    if (remainder > 0) {
        while (remainder > 0) {
            ans.push(remainder % 10);
            remainder = Math.floor(remainder / 10);
        }
    }
    return ans;
}

function eulerTwentyFive(n) {
    var last = [1], last2 = [1], look = [1];
    for (var i = 3; ; i++) {
        last2 = last.slice();
        last = look.slice();
        look = arrayAdd(last, last2).slice();
        if (look.length >= n) {
            return look;
        }
    }
}

eulerTwentyFive(3);