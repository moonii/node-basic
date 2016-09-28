/**
 * Created by user on 2016-09-13.
 */

var aNumber = 3;
var aString = 'hello world';

function add(numOne, numTwo) {
    return numOne + numTwo;
}

var sub = function (numOne, numTwo) {
    return numOne - numTwo;
};

var calculator = {

    sub: function (a, b) {
        return a * b;
    };

    div: function (a, b) {
        return a / b;
    };
};