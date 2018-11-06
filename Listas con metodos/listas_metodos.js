"use strict"

var MAX_SIZE_LIST = 5;
var list;

function create() {
    list = [];
}

function isEmpty(list) {
    var isEmpty = false;

    if (list.length === 0) {
        isEmpty = true;
    }
    return isEmpty;
}

function isFull(list) {
    var isFull = false;

    if (list.length === MAX_SIZE_LIST) {
        isFull = true;
    }
    return isFull;
}

function size(list) {
    var length = list.length;

    return length;
}

function add(list, elem) {
    if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else if (isFull(list)) {
        throw "Sorry, the list is full";
    } else {
        list.push(elem);
    }


    return size(list);
}

function addAt(list, elem, index) {
    if (index > MAX_SIZE_LIST) {
        throw "Sorry, the index is longer than the max size";
    } else if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else if (isFull(list)) {
        throw "Sorry, the list is full";
    } else {
        list.splice(index, 0, elem);
    }

    return size(list);
}

function get(list, index) {
    var elem;
    if (index > MAX_SIZE_LIST) {
        throw "Sorry, the index is longer than the max size";
    } else {
        elem = list[index];
    }
    return elem;
}

function toString(list) {
    var string = list.toString();

    return string;
}

function indexOf(list, elem) {
    var index = -1;

    if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else {
        index = list.indexOf(elem);
    }
    return index;
}

function lastIndexOf(list, elem) {
    var index = -1;

    if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else {
        index = list.lastIndexOf(elem);
    }
    return index;
}

function capacity(list) {
    return MAX_SIZE_LIST;
}

function clear(list) {
    list.splice(0, size(list));
}

function firstElement(list) {
    if (isEmpty(list)) {
        throw "Sorry, the list is empty";
    } else {
        var elem = list[0];

        return elem;
    }
}

function lastElement(list) {
    if (isEmpty(list)) {
        throw "Sorry, the list is empty";
    } else {
        var elem = list[size(list) - 1];

        return elem;
    }
}

function remove(list, index) {
    if (index > MAX_SIZE_LIST) {
        throw "Sorry, the index is longer than the max size";
    } else {
        var aux = list[index];
        list.splice(index, 1);
    }
    return aux;
}

function removeElement(list, elem) {
    var deleted = false;
    if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else {
        var index = indexOf(list, elem);
        if (index !== -1) {
            list.splice(index, 1);
            deleted = true;
        }
    }
    return deleted;
}

function set(list, elem, index) {
    var aux;
    if (isNaN(elem)) {
        throw "The element isnt a number!";
    } else if (index > MAX_SIZE_LIST) {
        throw "The index is longer than the max size!";
    } else {
        var aux = list[index];

        list.splice(index, 1, elem);
    }
    return aux;
}

function test() {
    console.log("Probamos isEmpty");
    console.log(isEmpty(list));
    console.log("Probamos isFull");
    console.log(isFull(list));
    console.log("Probamos size");
    console.log(size(list));
    console.log("Probamos capacity");
    console.log(capacity(list));
    console.log("Probamos add");
    console.log("Size: "+ add(list, 4));
    console.log(toString(list));
    console.log("Size: "+add(list, 1));
    console.log(toString(list));
    console.log("Size: "+add(list, 9));
    console.log(toString(list));
    console.log("Probamos addAt");
    console.log("Size: "+addAt(list, 9, 1));
    console.log(toString(list));
    console.log("Probamos get");
    console.log(get(list, 1));
    console.log("Probamos toString");
    console.log(toString(list));
    console.log("Probamos indexOf");
    console.log(indexOf(list, 9));
    console.log("Probamos lastIndexOf");
    console.log(lastIndexOf(list, 9));
    console.log("Probamos firstElement");
    console.log(firstElement(list));
    console.log("Probamos lastElement");
    console.log(lastElement(list));
    console.log("Probamos remove");
    console.log(remove(list, 2));
    console.log(toString(list));
    console.log("Probamos removeElement");
    console.log(removeElement(list, 9));
    console.log(toString(list));
    console.log("Probamos set");
    console.log(set(list, 1, 1));
    console.log(toString(list));
}
create();
test();