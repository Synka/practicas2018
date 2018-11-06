"use strict"

var MAX_SIZE_LIST = 5;

function create() {
    var list = [];
    for (var i = 0; i < MAX_SIZE_LIST; i++) {
        list[i] = Number.NaN;
    }
    return list;
}

function isEmpty(list) {
    var isEmpty = false;

    if (isNaN(list[0])) {
        isEmpty = true;
    }
    return isEmpty;
}

function isFull(list) {
    var isFull = false;

    if (!isNaN(list[MAX_SIZE_LIST - 1])) {
        isFull = true;
    }
    return isFull;
}

function size(list) {
    var length = 0;

    while (length < MAX_SIZE_LIST && !isNaN(list[length])) {
        length++;
    }
    return length;
}

function add(list, elem) {
    if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    }
    if (!isFull(list)) {
        list[size(list)] = elem;
    } else {
        throw "Sorry, the list is full";
    }

    return size(list);
}

function addAt(list, elem, index) {
    var aux, aux2;
    if (index > MAX_SIZE_LIST) {
        throw "Sorry, the index is longer than the max size";
    } else if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else if (!isFull(list)) {
        aux = list[index];
        list[index] = elem;
        while (index < size(list)) {
            aux2 = list[index + 1];
            list[index + 1] = aux;
            aux = aux2;
            index++;
        }

    } else {
        throw "Sorry, the list is full";
    }
    return size(list);
}

function get(list, index) {
    if (!isEmpty(list)) {
        if (index > MAX_SIZE_LIST) {
            throw "Sorry, the index is longer than the max size";
        } else {
            var elem = list[index];
        }
    } else {
        throw "Sorry, the list is empty";
    }
    return elem;
}

function toString(list) {
    var str = "";
    if (!isEmpty(list)) {
        var length = size(list);
        for (var i = 0; i < length - 1; i++) {
            str = str + list[i] + " - ";
        }
        str = str + list[i];
    }
    return str;
}

function indexOf(list, elem) {
    var index = -1;
    if (!isNaN(elem)) {
        if (!isEmpty(list)) {
            var length = size(list);
            var i = 0;
            while (i < length && index === -1) {
                if (list[i] === elem) {
                    index = i;
                }
                i++;
            }
        } else {
            throw "Sorry, the list is empty";
        }
    } else {
        throw "Sorry, the element isn't a number";
    }
    return index;
}

function lastIndexOf(list, elem) {
    var index = -1;
    if (!isNaN(elem)) {
        if (!isEmpty(list)) {
            var length = size(list);
            var i = length;
            while (i >= 0 && index === -1) {
                if (list[i] === elem) {
                    index = i;
                }
                i--;
            }
        }
    } else {
        throw "Sorry, the element isn't a number";
    }
    return index;
}

function capacity(list) {
    return MAX_SIZE_LIST;
}

function clear(list) {
    if (!isEmpty(list)) {
        var length = size(list);
        for (var i = 0; i < length; i++) {
            list[i] = Number.NaN;
        }
    } else {
        throw "Sorry, the list is empty";
    }
}

function firstElement(list) {
    if (isEmpty(list)) {
        throw "Sorry, the list is empty";
    }

    return list[0];
}

function lastElement(list) {
    if (isEmpty(list)) {
        throw "Sorry, the list is empty";
    }

    return list[size(list) - 1];
}

function remove(list, index) {
    var aux;
    if (!isEmpty(list)) {
        if (index > MAX_SIZE_LIST) {
            throw "Sorry, the index is longer than the max size";
        } else {
            var aux = list[index];
            var length = size(list);
            while (index < length) {
                list[index] = list[index + 1];
                list[MAX_SIZE_LIST - 1] = Number.NaN;
                index++;
            }
        }
    } else {
        throw "Sorry, the list is empty";
    }
    return aux;
}

function removeElement(list, elem) {
    var borrado = false;
    if (!isEmpty(list)) {
        if (!isNaN(elem)) {
            if (indexOf(list, elem) !== -1) {
                var index = indexOf(list, elem);
                var length = size(list);
                while (index < length) {
                    list[index] = list[index + 1];
                    list[MAX_SIZE_LIST - 1] = Number.NaN;
                    index++;
                }
                borrado = true;
            }
        } else {
            throw "Sorry, the element isn't a number";
        }
    } else {
        throw "Sorry, the list is empty";
    }
    return borrado;
}

function set(list, elem, index) {
    var aux;
    if (!isNaN(elem)) {
        if (index > MAX_SIZE_LIST) {
            throw "Sorry, the index is longer than the max size";
        } else {
            var aux = list[index];
            list[index] = elem;
        }
    } else {
        throw "Sorry, the element isn't a number";
    }
    return aux;
}

function test() {
    var list = create();

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
test();