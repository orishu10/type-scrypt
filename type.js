function biger(x, y) {
    return x > y ? x : y;
}
function bigerLog(x, y) {
    var biger = x > y ? x : y;
    console.log(biger);
}
function odd(x) {
    if (x % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}
function strLength(st) {
    return st.length;
}
function arrNum(n) {
    var arr = [];
    for (var index = 0; index < n; index++) {
        var element = index;
        arr.push(element);
    }
    return arr;
}
function printPerson(person) {
    console.log(person.Name);
    console.log(person.Age.toString());
    console.log(person.isStudent.toString());
}
var person1 = {
    Name: "ori",
    Age: 25,
    isStudent: true,
};
printPerson(person1);
function isMinor(person) {
    if (person.Age <= 18) {
        return true;
    }
    else {
        return false;
    }
}
var maxAge;
var oldReader;
function older(arReader) {
    arReader.forEach(function (element) {
        if (element.Age > maxAge) {
            maxAge = element.Age;
            oldReader = element.Name;
        }
    });
    return oldReader;
}
var maxYear;
function oldBook(arReader) {
    arReader.forEach(function (element) {
        if (element.Year > maxYear) {
            maxYear = element.Year;
        }
    });
    return maxYear;
}
