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
