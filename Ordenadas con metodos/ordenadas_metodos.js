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

function add(list, elem){
    if (isNaN(elem)) {
        throw "Sorry, the element isn't a number";
    } else if (isFull(list)) {
        throw "Sorry, the list is full";
    } else {
        if (isEmpty(list)){
            list.push(elem);
        }else {
            var index = 0;
            while (elem >= list[index]){
                index++;
            }
            list.splice(index, 0, elem);
        }
    }
    return size(list);
}

function get(list, index){
    if (index > MAX_SIZE_LIST){
        throw "Sorry, the index is longer than the max size";
    }else {
        return list[index];
    }
}
    
function toString(list){
    var string = list.toString();
    return string;
}
    
function indexOf(list, elem){
    var index;
    if (isNaN(elem)){
        throw "Sorry, the element isn't a number";
    }else {
        index = list.indexOf(elem);
        return index;
    }
}
    
function lastIndexOf(list, elem){
    var index;
    if (isNaN(elem)){
        throw "Sorry, the element isn't a number";
    }else {
        index = list.lastIndexOf(elem);
        return index;
    }
}

function capacity(list) {
    return MAX_SIZE_LIST;
}

function clear(list) {
    list.splice(0, size(list));
}

function firstElement(list){
    if (isEmpty(list)){
        throw "Sorry, the list is empty";
    }else {
        return list[0];
    }
}
    
function lastElement(list){
    if (isEmpty(list)){
        throw "Sorry, the list is empty";
    }else {
        return list[list.length-1];
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

function removeElement(list, elem){
    var borrado = false;
    var index;
    var lastIndex;
    if (isNaN(elem)){
        throw "Sorry, the element isn't a number";
    }else {
        index = indexOf(list, elem);
        lastIndex = lastIndexOf(list, elem);
        if (index !== -1){
            for (var i=index; i<= lastIndex;i++){
                list.splice(index, 1);
            }
            borrado = true;
        }
    }
    return borrado;
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
    console.log("Size: "+add(list, 4));
    console.log(toString(list));
    console.log("Size: "+add(list, 1));
    console.log(toString(list));
    console.log("Size: "+add(list, 9));
    console.log(toString(list));
    console.log("Size: "+add(list, 7));
    console.log(toString(list));
    console.log("Size: "+add(list, 4));
    console.log(toString(list));
    console.log("Probamos get('1')");
    console.log(get(list, 1));
    console.log("Probamos toString");
    console.log(toString(list));
    console.log("Probamos indexOf('4')");
    console.log(indexOf(list, 4));
    console.log("Probamos lastIndexOf('4')");
    console.log(lastIndexOf(list, 4));
    console.log("Probamos firstElement");
    console.log(firstElement(list));
    console.log("Probamos lastElement");
    console.log(lastElement(list));
    console.log("Probamos remove('0')");
    console.log(remove(list, 0));
    console.log(toString(list));
    console.log("Probamos removeElement('4')");
    console.log(removeElement(list, 4));
    console.log(list);
}
create();
test();