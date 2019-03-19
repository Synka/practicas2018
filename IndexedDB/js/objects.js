"use strict";

//OBJETO CATEGORIA
function Category(name) {
    //La función se invoca con el operador new
    if (!(this instanceof Category)) {
        throw new InvalidAccessConstructorException();
    }

    name = name.trim();
    if (name === 'undefined' || name === '') throw new EmptyValueException("name");

    var _name = name;
    var _description = "";

    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (value) {
            name = name.trim();
            if (name === 'undefined' || name === '') throw new EmptyValueException("name");
            _name = value;
        }
    });

    Object.defineProperty(this, 'description', {
        get: function () {
            return _description;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("description");
            _description = value;
        }
    });
}
Category.prototype = {};
Category.prototype.constructor = Category;
Category.prototype.getObject = function(){
    return {
        name: this.name,
        description: this.description,
        productions: []
    };
}
Category.prototype.toString = function () {
    return "Category: " + this.name + " (" + this.description + ")";
}
//FIN CATEGORIA

//OBJETO PERSON
function Person(name, lastname, born) {
    //La función se invoca con el operador new
    if (!(this instanceof Person)) {
        throw new InvalidAccessConstructorException();
    }


    name = name.trim();
    lastname = lastname.trim();

    //Comprobamos que no está vacío
    if (name === 'undefined' || name === '') throw new EmptyValueException("name");

    if (lastname === 'undefined' || lastname === '') throw new EmptyValueException("lastname");

    if (born === 'undefined' || born === '') throw new EmptyValueException("born");
    //
    //Expresiones Regulares
    if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(name))) throw new InvalidValueException("name", name);
    if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(lastname))) throw new InvalidValueException("lastname", lastname);
    //if (!(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(born))) throw new InvalidValueException("born", born);
    //

    var _name = name;
    var _lastname = lastname;
    var _lastname2 = "";
    var _born = new Date(born);
    var _picture = "";


    Object.defineProperty(this, 'name', {
        get: function () {
            return _name;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("name");
            if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(name))) throw new InvalidValueException("name", value);
            _name = value;
        }
    });

    Object.defineProperty(this, 'lastname', {
        get: function () {
            return _lastname;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("lastname");
            if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(lastname))) throw new InvalidValueException("lastname", value);
            _lastname = value;
        }
    });

    Object.defineProperty(this, 'lastname2', {
        get: function () {
            return _lastname2;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("lastname2");
            if (!(/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(lastname2))) throw new InvalidValueException("lastname", value);
            _lastname2 = value;
        }
    });

    Object.defineProperty(this, 'born', {
        get: function () {
            return _born;
        },
        set: function (value) {
            if (value === 'undefined' || value == '') throw new EmptyValueException("born");
            //if (!(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(born))) throw new InvalidValueException("born", born);
            _born = value;
        }
    });

    Object.defineProperty(this, 'picture', {
        get: function () {
            return _picture;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("picture");
            _picture = value;
        }
    });
}

Person.prototype = {};
Person.prototype.constructor = Person;

Person.prototype.getObject = function(){
    return {
        name: this.name,
        lastname: this.lastname,
        lastname2: this.lastname2,
        born: this.born,
        picture: this.picture,
        productions: []
    };
}

Person.prototype.toString = function () {
    return this.constructor.name + ": " + this.lastname + " " + this.lastname2 + ", " + this.name + " nacido el " + this.born.toLocaleDateString();
}
//FIN PERSON

//OBJETO RESOURCES

function Resources(duration, link) {
    if (!(this instanceof Resources)) {
        throw new InvalidAccessConstructorException();
    }

    link = link.trim();

    //Comprobamos que no está vacío
    if (duration === 'undefined' || duration === '') throw new EmptyValueException("duration");

    if (link === 'undefined' || link === '') throw new EmptyValueException("link");
    //

    var _duration = duration;
    var _link = link;
    var _audios = [];
    var _subtitles = [];

    Object.defineProperty(this, 'duration', {
        get: function () {
            return _duration;
        },
        set: function (value) {
            if (value === 'undefined' || value == null) throw new EmptyValueException("duration");
            _duration = value;
        }
    });

    Object.defineProperty(this, 'link', {
        get: function () {
            return _link;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("link");
            _link = value;
        }
    });

    Object.defineProperty(this, 'audios', {
        get: function () {
            return _audios;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("audios");
            _audios.push(value);
        }
    });

    Object.defineProperty(this, 'subtitles', {
        get: function () {
            return _subtitles;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("subtitles");
            _subtitles.push(value);
        }
    });
}
Resources.prototype = {};
Resources.prototype.constructor = Resources;
//FIN RESOURCES

//OBJETO PRODUCTION
function Production(title, publication) {
    //La función se invoca con el operador new
    if (!(this instanceof Production)) {
        throw new InvalidAccessConstructorException();
    }

    //Comprobación para que Production sea clase abstracta.
    if ((this.constructor === Production)) {
        throw new AbstractClassException("Production");
    }
    //

    title = title.trim();

    //Comprobamos que no está vacío
    if (title === 'undefined' || title === '') throw new EmptyValueException("title");

    if (publication === 'undefined' || publication === null) throw new EmptyValueException("publication");
    //
    //Expresiones Regulares
    //if (!(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(publication))) throw new InvalidValueException("publication", publication);
    //
    var _title = title;
    var _nationality = "";
    var _publication = new Date(publication);
    var _synopsis = "";
    var _image = "";

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("title");
            _title = value;
        }
    });

    Object.defineProperty(this, 'nationality', {
        get: function () {
            return _nationality;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("nationality");
            if (!/^[A-Z][A-Z]$/.test(value)) throw new InvalidValueException("nationality", value);
            _nationality = value;
        }
    });

    Object.defineProperty(this, 'publication', {
        get: function () {
            return _publication;
        },
        set: function (value) {
            if (value === 'undefined' || value == null) throw new EmptyValueException("publication");
            //if (!(/^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/.test(publication))) throw new InvalidValueException("publication", value);
            _publication = value;
        }
    });

    Object.defineProperty(this, 'synopsis', {
        get: function () {
            return _synopsis;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("synopsis");
            _synopsis = value;
        }
    });

    Object.defineProperty(this, 'image', {
        get: function () {
            return _image;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("image");
            _image = value;
        }
    });
}

Production.prototype = {};
Production.prototype.constructor = Production;

Production.prototype.getObject = function(){
    return {
        title: this.title,
        publication: this.publication,
        synopsis: this.synopsis,
        image: this.image
    };
}

Production.prototype.toString = function () {
    return this.constructor.name + ": " + this.title + "(" + this.nationality + ")" + "Date: " + this.publication.toLocaleDateString() + ". Synopsis: " + this.synopsis;
}
//FIN PRODUCTION

//HEREDADOS
function Movie(title, publication) {
    //Invocamos el constructor de la clase padre, en él se comprueba que utilizamos el operador new.
    Production.call(this, title, publication);

    var _resource;
    var _locations = [];

    Object.defineProperty(this, 'resource', {
        get: function () {
            return _resource;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("resource");
            _resource = value;
        }
    });

    Object.defineProperty(this, 'locations', {
        get: function () {
            return _locations;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("locations");
            _locations.push(value);
        }
    });
}
Movie.prototype = Object.create(Production.prototype);
Movie.prototype.constructor = Movie;

function Serie(title, publication) {
    //Invocamos el constructor de la clase padre, en él se comprueba que utilizamos el operador new.
    Production.call(this, title, publication);

    var _seasons = [];

    Object.defineProperty(this, 'seasons', {
        get: function () {
            return _seasons;
        },
        set: function (value) {
            if (value === 'undefined') throw new EmptyValueException("seasons");
            _seasons.push(value);
        }
    });
}
Serie.prototype = Object.create(Production.prototype);
Serie.prototype.constructor = Serie;
//FIN HEREDADOS

//OBJETO SEASON
function Season(title) {
    if (!(this instanceof Season)) {
        throw new InvalidAccessConstructorException();
    }

    title = title.trim();
    episodes = [];

    //Comprobamos que no está vacío
    if (title === 'undefined' || title === '') throw new EmptyValueException("title");
    //

    var _title = title;

    Object.defineProperty(this, 'title', {
        get: function () {
            return _title;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("title");
            _title = value;
        }
    });

    Object.defineProperty(this, 'episodes', {
        get:function(){
            var nextIndex = 0;
            return {
                next: function(){
                    return nextIndex < _episodes.length ?
                        {value: _episodes[nextIndex++].episode, done: false} : //Cuidado
                        {done: true};
                }
            }
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("episodes");
            _episodes.push(value);
        }
    });

}
Season.prototype = {};
Season.prototype.constructor = Season;
//FIN SEASON

//OBJETO USER
function User(username, password, email) {
    if (!(this instanceof User)) {
        throw new InvalidAccessConstructorException();
    }

    username = username.trim();
    password = password.trim();
    email = email.trim();

    //Comprobamos que no está vacío
    if (username === 'undefined' || username === '') throw new EmptyValueException("username");
    if (password === 'undefined' || password === '') throw new EmptyValueException("password");
    if (email === 'undefined' || email === '') throw new EmptyValueException("email");
    //
    //Expresiones Regulares
    if (!/^[a-zA-Z0-9]*$/.test(username)) throw new InvalidValueException("username", username);
    if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password)) throw new InvalidValueException("password", password);
    if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email)) throw new InvalidValueException("email", email);
    //

    var _username = username;
    var _password = password;
    var _email = email;

    Object.defineProperty(this, 'username', {
        get: function () {
            return _username;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("username");
            if (!/^[a-zA-Z0-9]*$/.test(value)) throw new InvalidValueException("username", username);
            _username = value;
        }
    });

    Object.defineProperty(this, 'password', {
        get: function () {
            return _password;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("password");
            if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value)) throw new InvalidValueException("password", password);
            _password = value;
        }
    });

    Object.defineProperty(this, 'email', {
        get: function () {
            return _email;
        },
        set: function (value) {
            if (value === 'undefined' || value === '') throw new EmptyValueException("email");
            if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(value)) throw new InvalidValueException("email", value);
            _email = value;
        }
    });
}
User.prototype = {};
User.prototype.constructor = User;

User.prototype.toString = function () {
    return this.constructor.name + ": Username:" + this.username + "(" + this.email + ")" + " Password: " + this.password;
}
//FIN USER

//OBJETO COORDINATE
function Coordinate(latitude = 0, longitude = 0) {
    //La función se invoca con el operador new
    if (!(this instanceof Coordinate))
        throw new InvalidAccessConstructorException();

    latitude = typeof latitude !== 'undefined' ? Number(latitude).valueOf() : 0;
    if (Number.isNaN(latitude) || latitude < -90 || latitude > 90)
        throw new InvalidValueException("latitude", latitude);
    longitude = typeof longitude !== 'undefined' ? Number(longitude).valueOf() : 0;
    if (Number.isNaN(longitude) || longitude < -180 || longitude > 180)
        throw new InvalidValueException("longitude", longitude);

    var _latitude = latitude;
    var _longitude = longitude;

    Object.defineProperty(this, 'latitude', {
        get: function () {
            return _latitude;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
            if (Number.isNaN(value) || value < -90 || value > 90)
                throw new InvalidValueException("latitude", value);
            _latitude = value;
        }
    });

    Object.defineProperty(this, 'longitude', {
        get: function () {
            return _longitude;
        },
        set: function (value) {
            value = typeof value !== 'undefined' ? Number(value).valueOf() : 0;
            if (Number.isNaN(value) || value < -180 || value > 180)
                throw new InvalidValueException("latitude", value);
            _longitude = value;
        }
    });
    Coordinate.prototype.getSexagesimalLatitude = function () {
        var direction = this.latitude >= 0 ? "N" : "S";
        var latitude = Math.abs(this.latitude);
        var grades = Math.floor(latitude);
        var tmpMinutes = (latitude - grades) * 60;
        var minutes = Math.floor(tmpMinutes);
        var tmpSeconds = (tmpMinutes - minutes) * 60;
        var seconds = Math.round(tmpSeconds);

        return grades + "°" + minutes + "'" + seconds + "''" + direction;
    }

    Coordinate.prototype.getSexagesimalLongitude = function () {
        var direction = this.longitude >= 0 ? "E" : "W";
        var longitude = Math.abs(this.longitude);
        var grades = Math.floor(longitude);
        var tmpMinutes = (longitude - grades) * 60;
        var minutes = Math.floor(tmpMinutes);
        var tmpSeconds = (tmpMinutes - minutes) * 60;
        var seconds = Math.round(tmpSeconds);

        return grades + "°" + minutes + "'" + seconds + "''" + direction;
    }
}
Coordinate.prototype = {};
Coordinate.prototype.constructor = Coordinate;
//FIN COORDINATE