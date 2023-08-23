"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType["Book"] = "book";
    ItemType["DVD"] = "dvd";
})(ItemType || (exports.ItemType = ItemType = {}));
var libraryItems = [
    { type: ItemType.Book, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { type: ItemType.DVD, title: 'Inception', duration: 148 },
    { type: ItemType.Book, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { type: ItemType.DVD, title: 'Avatar', duration: 162 },
    { type: ItemType.Book, title: 'Go Set a Watchman', author: 'Harper Lee' },
];
function filterItems(libraryItems, filterFn) {
    console.log(libraryItems.filter(filterFn));
    return libraryItems.filter(filterFn);
}
function printItemsData(libraryItems) {
    for (var index = 0; index < libraryItems.length; index++) {
        var element = libraryItems[index];
        console.log(element);
    }
}
function filterFn(element) {
    if ("duration" in element) {
        return element.duration > 120;
    }
    return false;
}
function filterHar(element) {
    if ("author" in element) {
        return element.author === 'Harper Lee';
    }
    return false;
}
filterItems(libraryItems, filterFn);
filterItems(libraryItems, filterHar);
var options;
(function (options) {
    options[options["rock"] = 0] = "rock";
    options[options["paper"] = 1] = "paper";
    options[options["scissors"] = 2] = "scissors";
})(options || (options = {}));
var moshe = {
    play: "rock"
};
var elad = {
    play: 'paper'
};
function playGame(player1, player2) {
    var result;
    if (player1.play === undefined || player2.play === undefined) {
        throw new Error('error acourd');
    }
    var play1 = player1.play;
    var play2 = player2.play;
    switch (true) {
        case (play1 === play2):
            result = 'tie';
            break;
        case (play1 === 'paper' && play2 === 'rock'):
            result = 'player1';
            break;
        case (play1 === 'rock' && play2 === 'scissors'):
            result = 'player1';
            break;
        case (play1 === 'scissors' && play2 === 'paper'):
            result = 'player1';
        default:
            result = 'player2';
            break;
    }
    return result;
}
var play = playGame(moshe, elad);
console.log(play);
//3
