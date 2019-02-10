// ERRORES
function VideoSystemException() {
    this.name = "VideoSystemException";
    this.message = "Error: VideoSystem Generic Exception.";
}
VideoSystemException.prototype = new BaseException();
VideoSystemException.prototype.constructor = VideoSystemException;

function CategoryVideoSystemException() {
    this.name = "CategoryVideoSystemException";
    this.message = "Error: The method needs a Category parameter.";
}
CategoryVideoSystemException.prototype = new VideoSystemException();
CategoryVideoSystemException.prototype.constructor = CategoryVideoSystemException;

function CategoryExistsVideoSystemException() {
    this.name = "CategoryExistsVideoSystemException";
    this.message = "Error: The category exists in the VideoSystem.";
}
CategoryExistsVideoSystemException.prototype = new VideoSystemException();
CategoryExistsVideoSystemException.prototype.constructor = CategoryExistsVideoSystemException;

function CategoryNotExistsVideoSystemException() {
    this.name = "CategoryNotExistsVideoSystemException";
    this.message = "Error: The category doesn't exist in the VideoSystem.";
}
CategoryNotExistsVideoSystemException.prototype = new VideoSystemException();
CategoryNotExistsVideoSystemException.prototype.constructor = CategoryNotExistsVideoSystemException;

function ProductionVideoSystemException() {
    this.name = "ProductionVideoSystemException";
    this.message = "Error: The method needs a Production parameter.";
}
ProductionVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionVideoSystemException.prototype.constructor = ProductionVideoSystemException;

function ProductionExistsVideoSystemException(category) {
    this.name = "ProductionExistsVideoSystemException";
    this.message = "Error: The production exists in the category '" + category.name + "'.";
}
ProductionExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionExistsVideoSystemException.prototype.constructor = ProductionExistsVideoSystemException;

function ProductionNotExistsVideoSystemException(category) {
    var cat = (!category) ? '' : category.title;
    this.name = "ProductionNotExistsVideoSystemException";
    this.message = "Error: The production doesn't exist in the category '" + cat + "'.";
}
ProductionNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionNotExistsVideoSystemException.prototype.constructor = ProductionNotExistsVideoSystemException;

function PersonVideoSystemException() {
    this.name = "PersonVideoSystemException";
    this.message = "Error: The method needs a Person parameter.";
}
PersonVideoSystemException.prototype = new VideoSystemException();
PersonVideoSystemException.prototype.constructor = PersonVideoSystemException;

function PersonExistsVideoSystemException() {
    this.name = "PersonExistsVideoSystemException";
    this.message = "Error: The person exists in the VideoSystem.";
}
PersonExistsVideoSystemException.prototype = new VideoSystemException();
PersonExistsVideoSystemException.prototype.constructor = PersonExistsVideoSystemException;

function PersonNotExistsVideoSystemException() {
    this.name = "PersonNotExistsVideoSystemException";
    this.message = "Error: The person doesn't exist in the VideoSystem.";
}
PersonNotExistsVideoSystemException.prototype = new VideoSystemException();
PersonNotExistsVideoSystemException.prototype.constructor = PersonNotExistsVideoSystemException;

function ActorVideoSystemException() {
    this.name = "ActorVideoSystemException";
    this.message = "Error: The method needs a Person parameter.";
}
ActorVideoSystemException.prototype = new VideoSystemException();
ActorVideoSystemException.prototype.constructor = ActorVideoSystemException;

function ActorExistsVideoSystemException() {
    this.name = "ActorExistsVideoSystemException";
    this.message = "Error: The actor exists in the VideoSystem.";
}
ActorExistsVideoSystemException.prototype = new VideoSystemException();
ActorExistsVideoSystemException.prototype.constructor = ActorExistsVideoSystemException;

function ActorNotExistsVideoSystemException() {
    this.name = "ActorNotExistsVideoSystemException";
    this.message = "Error: The actor doesn't exist in the VideoSystem.";
}
ActorNotExistsVideoSystemException.prototype = new VideoSystemException();
ActorNotExistsVideoSystemException.prototype.constructor = ActorNotExistsVideoSystemException;

function DirectorVideoSystemException() {
    this.name = "DirectorVideoSystemException";
    this.message = "Error: The method needs a Person parameter.";
}
DirectorVideoSystemException.prototype = new VideoSystemException();
DirectorVideoSystemException.prototype.constructor = DirectorVideoSystemException;

function DirectorExistsVideoSystemException() {
    this.name = "DirectorExistsVideoSystemException";
    this.message = "Error: The director exists in the VideoSystem.";
}
DirectorExistsVideoSystemException.prototype = new VideoSystemException();
DirectorExistsVideoSystemException.prototype.constructor = DirectorExistsVideoSystemException;

function DirectorNotExistsVideoSystemException() {
    this.name = "DirectorNotExistsVideoSystemException";
    this.message = "Error: The director doesn't exist in the VideoSystem.";
}
DirectorNotExistsVideoSystemException.prototype = new VideoSystemException();
DirectorNotExistsVideoSystemException.prototype.constructor = DirectorNotExistsVideoSystemException;

function UserVideoSystemException() {
    this.name = "UserVideoSystemException";
    this.message = "Error: The method needs a User parameter.";
}
UserVideoSystemException.prototype = new VideoSystemException();
UserVideoSystemException.prototype.constructor = UserVideoSystemException;

function UserExistsVideoSystemException() {
    this.name = "UserExistsVideoSystemException";
    this.message = "Error: The user exists in the VideoSystem.";
}
UserExistsVideoSystemException.prototype = new VideoSystemException();
UserExistsVideoSystemException.prototype.constructor = UserExistsVideoSystemException;

function UserNotExistsVideoSystemException() {
    this.name = "UserNotExistsVideoSystemException";
    this.message = "Error: The user doesn't exist in the VideoSystem.";
}
UserNotExistsVideoSystemException.prototype = new VideoSystemException();
UserNotExistsVideoSystemException.prototype.constructor = UserNotExistsVideoSystemException;

function ProductionDirectorExistsVideoSystemException(director) {
    this.name = "ProductionDirectorExistsVideoSystemException";
    this.message = "Error: The production exists in the director '" + director.name + "'.";
}
ProductionDirectorExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionDirectorExistsVideoSystemException.prototype.constructor = ProductionDirectorExistsVideoSystemException;

function ProductionDirectorNotExistsVideoSystemException(director) {
    var dir = (!director) ? '' : director.name;
    this.name = "ProductionDirectorNotExistsVideoSystemException";
    this.message = "Error: The production doesn't exist in the director '" + dir + "'.";
}
ProductionDirectorNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionDirectorNotExistsVideoSystemException.prototype.constructor = ProductionDirectorNotExistsVideoSystemException;

function ProductionActorExistsVideoSystemException(actor) {
    this.name = "ProductionActorExistsVideoSystemException";
    this.message = "Error: The production exists in the actor '" + actor.name + "'.";
}
ProductionActorExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionActorExistsVideoSystemException.prototype.constructor = ProductionActorExistsVideoSystemException;

function ProductionActorNotExistsVideoSystemException(actor) {
    var act = (!actor) ? '' : actor.name;
    this.name = "ProductionActorNotExistsVideoSystemException";
    this.message = "Error: The production doesn't exist in the actor '" + act + "'.";
}
ProductionActorNotExistsVideoSystemException.prototype = new VideoSystemException(); //Heredamos de VideoSystemException
ProductionActorNotExistsVideoSystemException.prototype.constructor = ProductionActorNotExistsVideoSystemException;
//FIN ERRORES

//OBJETO VIDEOSYSTEM
var VideoSystem = (function () {
    var instantiated; //Objeto con la instancia única VideoSystem

    function init() { //Inicialización del Singleton

        //CONSTRUCTOR
        function VideoSystem() {
            if (!(this instanceof VideoSystem)) {
                throw new InvalidAccessConstructorException();
            }

            var _name = "a";
            Object.defineProperty(this, 'name', {
                get: function () {
                    return _name;
                },
                set: function (name = "a") {
                    name = name.trim();
                    if (name === 'undefined' || name === 'Anon') throw new EmptyValueException("name");
                    _name = name;
                }
            });

            var _users = []; //array de usuarios
            var _productions = []; //array de productions
            var _categories = []; //array de categorías
            var _actors = []; //array de actores
            var _directors = []; //array de directores


            //Devuelve un iterator de la información almacenada
            Object.defineProperty(this, 'users', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _users.length ?
                                { value: _users[nextIndex++].user, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            Object.defineProperty(this, 'productions', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _productions.length ?
                                { value: _productions[nextIndex++].production, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            Object.defineProperty(this, 'categories', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _categories.length ?
                                { value: _categories[nextIndex++].category, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            Object.defineProperty(this, 'actors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _actors.length ?
                                { value: _actors[nextIndex++].actor, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            Object.defineProperty(this, 'directors', {
                get: function () {
                    var nextIndex = 0;
                    return {
                        next: function () {
                            return nextIndex < _directors.length ?
                                { value: _directors[nextIndex++].director, done: false } :
                                { done: true };
                        }
                    }
                }
            });

            //CATEGORIAS
            this.addCategory = function (category) {
                if (!(category instanceof Category)) {
                    throw new CategoryVideoSystemException();
                }
                var position = getCategoryPosition(category);
                if (position === -1) {
                    _categories.push(
                        {
                            category: category,
                            productions: []
                        }
                    );
                } else {
                    throw new CategoryExistsVideoSystemException();
                }
                return _categories.length;
            }

            this.removeCategory = function (category) {
                if (!(category instanceof Category)) {
                    throw new CategoryVideoSystemException();
                }
                var position = getCategoryPosition(category);
                if (position !== -1) {
                    throw new CategoryNotExistsVideoSystemException();
                }
                return _categories.length;
            }

            function getCategoryPosition(category) {
                if (!(category instanceof Category)) {
                    throw new CategoryVideoSystemException();
                }

                function compareElements(element) {
                    return (element.category.name === category.name)
                }

                return _categories.findIndex(compareElements);
            }
            //FIN CATEGORIAS

            //USERS
            this.addUser = function (user) {
                if (!(user instanceof User)) {
                    throw new UserVideoSystemException();
                }
                var position = getUserPosition(user);
                if (position === -1) {
                    _users.push(
                        {
                            user: user
                        }
                    );
                } else {
                    throw new UserExistsVideoSystemException();
                }
                return _users.length;
            }

            this.removeUser = function (user) {
                if (!(user instanceof User)) {
                    throw new UserVideoSystemException();
                }
                var position = getUserPosition(user);
                if (position !== -1) {
                    _users.splice(position, 1);
                } else {
                    throw new UserNotExistsVideoSystemException();
                }
                return _users.length;
            }

            function getUserPosition(user) {
                if (!(user instanceof User)) {
                    throw new UserVideoSystemException();
                }

                function compareElements(element) {
                    return (element.user.username === user.username || element.user.email === user.email)
                }

                return _users.findIndex(compareElements);
            }
            //FIN USERS
            //PRODUCTIONS
            this.addProduction = function (production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }
                var position = getProductionPosition(production);
                if (position === -1) {
                    _productions.push(
                        {
                            production: production,
                        }
                    );
                } else {
                    throw new ProductionExistsVideoSystemException();
                }
                return _productions.length;
            }

            this.removeProduction = function (production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }
                var position = getProductionPosition(production);
                if (position !== -1) {
                    _productions.splice(position, 1);
                } else {
                    throw new ProductionNotExistsVideoSystemException();
                }
                return _productions.length;
            }

            function getProductionPosition(production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }

                function compareElements(element) {
                    return (element.production.title === production.title)
                }

                return _productions.findIndex(compareElements);
            }
            //FIN PRODUCTIONS
            //ACTORS
            this.addActor = function (actor) {
                if (!(actor instanceof Person)) {
                    throw new ActorVideoSystemException();
                }
                var position = getActorPosition(actor);
                if (position === -1) {
                    _actors.push(
                        {
                            actor: actor,
                            productions: []
                        }
                    );
                } else {
                    throw new ActorExistsVideoSystemException();
                }
                return _actors.length;
            }

            this.removeActor = function (actor) {
                if (!(actor instanceof Person)) {
                    throw new ActorVideoSystemException();
                }
                var position = getActorPosition(actor);
                if (position !== -1) {
                    _actors.splice(position, 1);
                } else {
                    throw new ActorNotExistsVideoSystemException();
                }
                return _actors.length;
            }

            function getActorPosition(actor) {
                if (!(actor instanceof Person)) {
                    throw new ActorVideoSystemException();
                }

                function compareElements(element) {
                    return (element.actor.name === actor.name)
                }

                return _actors.findIndex(compareElements);
            }
            //FIN ACTORS
            //DIRECTORS
            this.addDirector = function (director) {
                if (!(director instanceof Person)) {
                    throw new DirectorVideoSystemException();
                }
                var position = getDirectorPosition(director);
                if (position === -1) {
                    _directors.push(
                        {
                            director: director,
                            productions: []
                        }
                    );
                } else {
                    throw new DirectorExistsVideoSystemException();
                }
                return _directors.length;
            }

            this.removeDirector = function (director) {
                if (!(director instanceof Person)) {
                    throw new DirectorVideoSystemException();
                }
                var position = getDirectorPosition(director);
                if (position !== -1) {
                    _directors.splice(position, 1);
                } else {
                    throw new DirectorNotExistsVideoSystemException();
                }
                return _directors.length;
            }

            function getDirectorPosition(director) {
                if (!(director instanceof Person)) {
                    throw new DirectorVideoSystemException();
                }

                function compareElements(element) {
                    return (element.director.name === director.name)
                }

                return _directors.findIndex(compareElements);
            }
            //FIN DIRECTORS
            //ASIGNAR/DESASIGNAR CATEGORIA
            this.assignCategory = function (category, production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }
                if (!(category instanceof Category)) {
                    throw new CategoryVideoSystemException();
                }
                //Obtenemos posición de la categoria. Si no existe se añade.
                var categoryPosition = getCategoryPosition(category);
                if (categoryPosition === -1) {
                    categoryPosition = this.addCategory(category) - 1;
                }
                //Obtenemos posición de la production. Si no existe se añade.
                var productionPosition = getProductionPosition(production);
                if (productionPosition === -1) {
                    productionPosition = this.addProduction(production) - 1;
                }
                //Obtenemos posición de la production en la categoria. Si no existe se añade. Si existe se lanza excepción.
                var posProduction = getProPosition(production, _categories[categoryPosition].productions);
                if (posProduction === -1) {
                    _categories[categoryPosition].productions.push(
                        {
                            production: production
                        }
                    );
                } else {
                    throw new ProductionExistsVideoSystemException(category);
                }
                return _categories[categoryPosition].productions.length;
            }

            this.deassignCategory = function (category, production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }
                if (!(category instanceof Category)) {
                    throw new CategoryVideoSystemException();
                }
                //Obtenemos posición de la categoria. Si no existe se lanza excepcion.
                var categoryPosition = getCategoryPosition(category);
                if (categoryPosition === -1) {
                    throw new CategoryNotExistsVideoSystemException();
                }
                
                //Obtenemos posición de la production en la categoria. Si no existe se lanza excepcion.
                var posProduction = getProPosition(production, _categories[categoryPosition].productions);
                if (posProduction !== -1) {
                    _categories[categoryPosition].productions.splice(posProduction, 1);
                } else {
                    throw new ProductionNotExistsVideoSystemException(category);
                }
                return _categories[categoryPosition].productions.length;
            }
            //FIN AS/DES CATEGORIA
            //ASIGNAR/DESASIGNAR DIRECTOR
            this.assignDirector = function (director, production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }

                if (!(director instanceof Person)) {
                    throw new DirectorVideoSystemException();
                }
                //Obtenemos posición del director. Si no existe se añade.
                var directorPosition = getDirectorPosition(director);
                if (directorPosition === -1) {
                    directorPosition = this.addDirector(director) - 1;
                }
                //Obtenemos posición de la production. Si no existe se añade.
                var productionPosition = getProductionPosition(production);
                if (productionPosition === -1) {
                    productionPosition = this.addProduction(production) - 1;
                }
                //Obtenemos posición de la production en el director. Si no existe se añade. Si existe se lanza excepción.
                var posProduction = getProPosition(production, _directors[directorPosition].productions);
                if (posProduction === -1) {
                    _directors[directorPosition].productions.push(
                        {
                            production: production
                        }
                    );
                } else {
                    throw new ProductionDirectorExistsVideoSystemException(director);
                }
                return _directors[directorPosition].productions.length;
            }

            this.deassignDirector = function (director, production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }
                if (!(director instanceof Person)) {
                    throw new DirectorVideoSystemException();
                }
                //Obtenemos posición del director. Si no existe se lanza excepcion.
                var directorPosition = getDirectorPosition(director);
                if (directorPosition === -1) {
                    throw new DirectorNotExistsVideoSystemException();
                }
                
                //Obtenemos posición de la production en el director. Si no existe se lanza excepcion.
                var posProduction = getProPosition(production, _directors[directorPosition].productions);
                if (posProduction !== -1) {
                    _directors[directorPosition].productions.splice(posProduction, 1);
                } else {
                    throw new ProductionDirectorNotExistsVideoSystemException(director);
                }
                return _directors[directorPosition].productions.length;
            }
            //FIN AS/DES DIRECTOR
            //ASIGNAR/DESASIGNAR ACTORES
            this.assignActor = function (actor, production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }

                if (!(actor instanceof Person)) {
                    throw new ActorVideoSystemException();
                }
                //Obtenemos posición del actor. Si no existe se añade.
                var actorPosition = getActorPosition(actor);
                if (actorPosition === -1) {
                    actorPosition = this.addActor(actor) - 1;
                }
                //Obtenemos posición de la production. Si no existe se añade.
                var productionPosition = getProductionPosition(production);
                if (productionPosition === -1) {
                    productionPosition = this.addProduction(production) - 1;
                }
                //Obtenemos posición de la production en el actor. Si no existe se añade. Si existe se lanza excepción.
                var posProduction = getProPosition(production, _actors[actorPosition].productions);
                if (posProduction === -1) {
                    _actors[actorPosition].productions.push(
                        {
                            production: production,
                            character: "a",
                            main: false
                        }
                    );
                } else {
                    throw new ProductionActorExistsVideoSystemException(actor);
                }
                return _actors[actorPosition].productions.length;
            }

            this.deassignActor = function (actor, production) {
                if (!(production instanceof Production)) {
                    throw new ProductionVideoSystemException();
                }
                if (!(actor instanceof Person)) {
                    throw new ActorVideoSystemException();
                }
                //Obtenemos posición del actor. Si no existe se lanza excepcion.
                var actorPosition = getActorPosition(actor);
                if (actorPosition === -1) {
                    throw new ActorNotExistsVideoSystemException();
                }
                
                //Obtenemos posición de la production en el actor. Si no existe se lanza excepcion.
                var posProduction = getProPosition(production, _actors[actorPosition].productions);
                if (posProduction !== -1) {
                    _actors[actorPosition].productions.splice(posProduction, 1);
                } else {
                    throw new ProductionActorNotExistsVideoSystemException(actor);
                }
                return _actors[actorPosition].productions.length;
            }
            //FIN AS/DES ACTORES
            function getProPosition(production, categoryProduction){
				if (!(production instanceof Production)) { 
					throw new ProductionVideoSystemException();
				}		

				function compareElements(element) {
				  return (element.production.title === production.title)
				}
				
				return categoryProduction.findIndex(compareElements);		
			}
            //GETTERS
            this.getProductionsCategory = function(category){
                if (!(category instanceof Category)) {
                    throw new CategoryVideoSystemException();
                }

                var categoryPosition = getCategoryPosition(category);
                if (categoryPosition === -1) throw new CategoryNotExistsVideoSystemException();
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < _categories[categoryPosition].productions.length ?
                            {value: _categories[categoryPosition].productions[nextIndex++].production, done: false} :
                            {done: true};
                    }
                }
            }

            this.getProductionsDirector = function(director){
                if (!(director instanceof Person)) {
                    throw new DirectorVideoSystemException();
                }

                var directorPosition = getDirectorPosition(director);
                if (directorPosition === -1) throw new DirectorNotExistsVideoSystemException();
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < _directors[directorPosition].productions.length ?
                            {value: _directors[directorPosition].productions[nextIndex++].production, done: false} :
                            {done: true};
                    }
                }
            }

            this.getProductionsActor = function(actor){
                if (!(actor instanceof Person)) {
                    throw new ActorVideoSystemException();
                }

                var actorPosition = getActorPosition(actor);
                if (actorPosition === -1) throw new ActorNotExistsVideoSystemException();
                var nextIndex = 0;
                return {
                    next: function(){
                        return nextIndex < _actors[actorPosition].productions.length ?
                            {value: _actors[actorPosition].productions[nextIndex++].production, done: false} :
                            {done: true};
                    }
                }
            }

            this.getCast = function(production){
                if (!(production instanceof Production)) {
                    throw new InvalidAccessMethodException();
                }

                var productionPosition = getProductionPosition(production);
				if (productionPosition === -1) throw new NotExistsException();
				//creo un array aux con los actores que si tienen la producción que nos han pasado
				var iterador= {
                    actors: [],
                    director: {}
                };
				var proPosition;
				for(var i=0; i<_actors.length; i++){
					proPosition = getProPosition(production, _actors[i].productions);
					if( proPosition!= -1){
						iterador.actors.push(
                            _actors[i]
						);
					}
                }

                var director = false;
                var x = 0;
                while(director!=true){
                    proPosition = getProPosition(production, _directors[x].productions);
					if( proPosition!= -1){
                        iterador.director = _directors[x];
                        director = true;
                    }
                    x++;
                }
		
				return iterador;
			}
            //FIN GETTERS
        }
        //FIN CONSTRUCTOR

        VideoSystem.prototype = {};
        VideoSystem.prototype.constructor = VideoSystem;

        var instance = new VideoSystem();//Devolvemos el objeto VideoSystem para que sea una instancia única.
        Object.freeze(instance);
        return instance;
    } //Fin inicialización del Singleton
    return {
        // Devuelve un objeto con el método getInstance
        getInstance: function () {
            if (!instantiated) { //Si la variable instantiated es undefined, primera ejecución, ejecuta init.
                instantiated = init(); //instantiated contiene el objeto único
            }
            return instantiated; //Si ya está asignado devuelve la asignación.
        }
    };

})();
//FIN OBJETO VIDEOSYSTEM