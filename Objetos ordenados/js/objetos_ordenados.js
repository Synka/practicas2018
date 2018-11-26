"use strict"

function PersonException() {
	this.name = "PersonException";
	this.message = "Error: The method needs a Person parameter.";
}
PersonException.prototype = new BaseException(); //Heredamos de StackException
PersonException.prototype.constructor = PersonException;

function EmptyException() {
	this.name = "EmptyException";
	this.message = "Error: The list is empty.";
}
EmptyException.prototype = new BaseException();
EmptyException.prototype.constructor = EmptyException;

function FullException() {
	this.name = "FullException";
	this.message = "Error: The list is full.";
}
FullException.prototype = new BaseException();
FullException.prototype.constructor = FullException;

function PositionOutException() {
	this.name = "PositionOutException";
	this.message = "Error: The index is longer than the max size";
}
PositionOutException.prototype = new BaseException();
PositionOutException.prototype.constructor = PositionOutException;

function PersonNotExistException(person) {
	this.name = "PersonNotExistException";
	this.message = "Error: The person doesn't exist in the list. " + person.name + " " + person.surname;
}
PersonNotExistException.prototype = new BaseException();
PersonNotExistException.prototype.constructor = PersonNotExistException;

function List(long){
	if (!(this instanceof List)){
        throw new InvalidAccessConstructorException();
    }
        
	long = typeof long !== 'undefined' ? long : 10;
	var _persons = [];

	Object.defineProperty(this, 'persons', {
		get:function(){
		    var nextIndex = 0;		    
		    return {
		       next: function(){
		           return nextIndex < _persons.length ?
		               {value: _persons[nextIndex++], done: false} :
		               {done: true};
		       }
		    }
		}	
    });

    this.isEmpty = function (){
        var isEmpty = false;

        if (_persons.length === 0) {
            isEmpty = true;
        }
        return isEmpty;
	}

	this.isFull = function (){
		var isFull = false;

		if (_persons.length === long) {
			isFull = true;
		}
		return isFull;
	}
	this.size = function (){
		var length = _persons.length;

		return length;
	}
    this.add = function(person){     			
		if (_persons.length < long){
			_persons.push(person);

			_persons.sort(function (a, b) {
				return ((a.surname < b.surname) ? -1 : ((a.surname > b.surname) ? 1 : (a.name < b.name) ? -1 : ((a.name > b.name) ? 1 : 0)));
			})
		} else{
			throw new FullException();
		}
	}

	this.getByIndex = function(index){
		var p;
		if (index >= long){
			throw new PositionOutException();
		}
		p = _persons[index];

		return p;
	}

    this.toString = function(){
		var str = "";
		for(let i = 0; i<_persons.length; i++){
			str = str + _persons[i].toString() + "\n";
		}
		return str;
	}

	this.indexOf = function (person){
		var index = -1;
		if (!(person instanceof Person)) { 
			throw new PersonException();
		}
		index = _persons.indexOf(person);
		
		return index;
	}

	this.capacity = function (){
		return long;
	}

	this.clear = function (){
		_persons.length = 0;
	}

	this.firstElement = function (){
		if (_persons.length === 0){
			throw new EmptyException;
		}
		return _persons[0];
	}

	this.lastElement = function (){
		if (_persons.length === 0){
			throw new EmptyException;
		}
		return _persons[_persons.length - 1];
	}

	this.remove = function (index){
		if (index >= long){
			throw new PositionOutException();
		}
		var aux = _persons[index];
		
		_persons.splice(index, 1);

		return aux;
	}

	this.removeElement = function (person){
		if (!(person instanceof Person)) { 
			throw new PersonException();
		}
		var deleted = false;

		var index = _persons.indexOf(person);
        var lastIndex = _persons.lastIndexOf(person);
        if (index !== -1){
            for (var i=index; i<= lastIndex;i++){
                _persons.splice(index, 1);
            }
            deleted = true;
        }
		return deleted;
	}
}

List.prototype.constructor = List;

function Person(name="", surname=""){
    if (!(this instanceof Person)){
        throw new InvalidAccessConstructorException();
    }
    name = typeof name !== 'undefined' ? name : "";
	if (name === "") throw new EmptyValueException("name");
	surname = typeof surname !== 'undefined' ? surname : "";
	if (surname === "") throw new EmptyValueException("surname");

    var _name = name;
    var _surname = surname;

    Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") throw new EmptyValueException("name");
			_name = value;
		}		
	});

	Object.defineProperty(this, 'surname', {
		get:function(){
			return _surname;
		},
		set:function(value){
			value = typeof value !== 'undefined' ? value : "";
			if (value === "") throw new EmptyValueException("surname");
			_surname = value;
		}		
    });
} 
Person.prototype.constructor = Person;

Person.prototype.toString = function(){
	return "Surname: " + this.surname + ", Name: " + this.name;
}