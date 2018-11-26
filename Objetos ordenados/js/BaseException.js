"use strict"

function BaseException() {
}
BaseException.prototype = new Error();
BaseException.prototype.constructor = BaseException;

BaseException.prototype.toString = function(){
	return this.name + ": " + this.message;
};

function ParameterValidationException() {
	this.name = "ParameterValidationException";
	this.message = "Error: Parameter Validation Exception.";
}
ParameterValidationException.prototype = new BaseException();
ParameterValidationException.prototype.constructor = ParameterValidationException;

function EmptyValueException(param) {
	this.name = "EmptyValueException";
	this.message = "Error: The parameter " + param + " can't be empty.";
}
EmptyValueException.prototype = new ParameterValidationException();
EmptyValueException.prototype.constructor = EmptyValueException;

function InvalidValueException(param, value) {
	this.name = "InvalidValueException";
	this.message = "Error: The paramenter " + param + " has an invalid value. (" + param + ": " + value + ")";
}
InvalidValueException.prototype = new ParameterValidationException();
InvalidValueException.prototype.constructor = InvalidValueException;

function InvalidAccessConstructorException() {
	this.name = "InvalidAccessConstructorException";
	this.message = "Constructor can’t be called as a function.";
}
InvalidAccessConstructorException.prototype = new BaseException(); 
InvalidAccessConstructorException.prototype.constructor = InvalidAccessConstructorException;