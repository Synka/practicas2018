"use strict";

function testVideoSystem() {
    function testCoordinate() {
        console.log("---- Testeo Objeto Coordinate ----");
        console.log("Coordenadas c1: " + c1.latitude + ", " + c1.longitude);
        console.log("Coordenadas c1: " + c1.getSexagesimalLatitude());
        console.log("Coordenadas c1: " + c1.getSexagesimalLongitude());
        try {
            console.log("Coordenadas c2: " + c2.latitude + ", " + c2.longitude);
        } catch (err) {
            //Error: InvalidValueException: Error: The paramenter latitude has an invalid value. (latitude: -190)
            console.log("Error: " + err.toString());
        }

        try {
            console.log("Coordenadas c3: " + c3.latitude + ", " + c3.longitude);
        } catch (err) {
            //Error: InvalidValueException: Error: The paramenter longitude has an invalid value. (longitude: 190)
            console.log("Error: " + err.toString());
        }
        console.log("---- Fin: Testeo Objeto Coordinate ----");
        console.log("");
        console.log("");
    }

    function testProduction() {
        console.log("---- Testeo Objeto Production ----")
        console.log(m1.toString());
        console.log(m2.toString());
        console.log(s1.toString());
        console.log(s2.toString());

        console.log("---- Fin: Testeo Objeto Production ----");
        console.log("");
        console.log("");
    }

    function testCategory() {
        console.log("---- Testeo Category ----");
        console.log(cat1.toString());
        console.log(cat2.toString());
        console.log("---- Fin: Testeo Category ----");
        console.log("");
        console.log("");
    }
    function testUser() {
        console.log("---- Testeo User ----");
        console.log(u1.toString());
        console.log(u2.toString());
        console.log(u3.toString());
        console.log("---- Fin: Testeo User ----");
        console.log("");
        console.log("");
    }
    function testPerson(){
        console.log("---- Testeo Person ----");
        console.log(d1.toString());
        console.log(d2.toString());
        console.log(d3.toString());
        console.log("---- Fin: Testeo Person ----");
        console.log("");
        console.log("");
    }

    function testVideoSystemWithCategory() {
        console.log("---- Testeo VideoSystem: Categorías ----");
        //Probamos las categorías.
        //Añadimos la categoría: Categoría 1
        console.log("Añadimos la categoría: " + cat1.name);
        //Añadimos la categoría: Categoría 2
        console.log("Añadimos la categoría: " + cat2.name);
        try {
            video.addCategory(cat1);
            video.addCategory(cat2);
        } catch (err) {
            console.log(err.toString());
        }
        console.log("Categoría por defecto: " + video.defaultCategory.name);
        try {
            video.removeCategory(video.defaultCategory);
        } catch (err) {
            console.log(err.toString());
        }
        try {
            video.assignCategory(cat1, m1);
            video.assignCategory(cat1, m2);
            video.assignCategory(cat2, s1);
            video.assignCategory(cat1, s2);
            console.log("Desasignamos s2 de cat1");
            video.deassignCategory(cat1, s2);
            video.assignCategory(cat3, s2);
        } catch (err) {
            console.log(err.toString());
        }
        console.log("---- Fin: Testeo VideoSystem: Categorías ----");
        console.log("");
        console.log("");
    }

    function testVideoSystemWithDirector() {
        console.log("---- Testeo VideoSystem: Directores ----");
        //Probamos los directores.
        //Añadimos el director d1.
        console.log("Añadimos el director: " + d1.name + " " + d1.lastname);
        //Añadimos el director d2.
        console.log("Añadimos el director: " + d2.name + " " + d2.lastname);
        //Añadimos el director d3.
        console.log("Añadimos el director: " + d3.name + " " + d3.lastname);
        try {
            video.addDirector(d1);
            video.addDirector(d2);
            video.addDirector(d3);
        } catch (err) {
            console.log(err.toString());
        }
        console.log("---- Fin: Testeo VideoSystem: Directores ----");
        console.log("");
        console.log("");
    }

    function testVideoSystemWithActor() {
        console.log("---- Testeo VideoSystem: Actores ----");
        //Probamos los actores.
        //Añadimos el actor a1.
        console.log("Añadimos el actor: " + a1.name + " " + a1.lastname);
        //Añadimos el actor a2.
        console.log("Añadimos el actor: " + a2.name + " " + a2.lastname);
        //Añadimos el actor a3.
        console.log("Añadimos el actor: " + a3.name + " " + a3.lastname);
        try {
            video.addActor(a1);
            video.addActor(a2);
            video.addActor(a3);
        } catch (err) {
            console.log(err.toString());
        }
        try {
            video.assignActor(a1, m1);
            video.assignActor(a2, m2);
            video.assignActor(a2, s1);
            console.log("Desasignamos s1 de a2");
            video.deassignActor(a2, s1);
            video.assignActor(a1, s1);
            video.assignActor(a2, s2);
        } catch (err) {
            console.log(err.toString());
        }
        console.log("---- Fin: Testeo VideoSystem: Actores ----");
        console.log("");
        console.log("");
    }

    function testVideoSystemWithProduction() {
        console.log("---- Testeo VideoSystem: Productions ----");
        //Probamos las production.
        //Añadimos la production m1.
        console.log("Añadimos la production: " + m1.title);
        //Añadimos la production m2.
        console.log("Añadimos la production: " + m2.title);
        //Añadimos la production s1.
        console.log("Añadimos la production: " + s1.title);
        //Añadimos la production s2.
        console.log("Añadimos la production: " + s2.title);
        try {
            video.addProduction(m1);
            video.addProduction(m2);
            video.addProduction(s1);
            video.addProduction(s2);
        } catch (err) {
            console.log(err.toString());
        }
        console.log("---- Fin: Testeo VideoSystem: Productions ----");
        console.log("");
        console.log("");
    }

    function testVideoSystemWithUser() {
        console.log("---- Testeo VideoSystem: Users ----");
        //Probamos los directores.
        //Añadimos el director d1.
        console.log("Añadimos el usuario: " + u1.username);
        //Añadimos el director d2.
        console.log("Añadimos el usuario: " + u2.username);
        //Añadimos el director d3.
        console.log("Añadimos el usuario: " + u3.username);
        try {
            video.addUser(u1);
            video.addUser(u2);
            video.addUser(u3);
            video.addUser(u11);
        } catch (err) {
            console.log(err.toString());
        }
        console.log("---- Fin: Testeo VideoSystem: Users ----");
        console.log("");
        console.log("");
    }


    function showProductionsByActor (actor){
		console.log ("---- Producciones por actor: " + actor.name +"----");
		showProductions(video.getProductionsActor(actor));	
		console.log ("---- Fin: Producciones por actor. ----");	
    }
    
    function showProductions(productions){
		var production = productions.next();
		while (production.done !== true){
			console.log (production.value.title);		
			production = productions.next();
		}
    }

    function showCategories(){
		console.log ("Recorremos las categorías.");
		var categories = video.categories;
		var category = categories.next();
		while (category.done !== true){
			console.log ("Category: " + category.value.name);		
			category = categories.next();
		}		
    }

    function showActors(){
		console.log ("Recorremos los actores.");
		var actors = video.actors;
		var actor = actors.next();
		while (actor.done !== true){
			console.log ("Actor: " + actor.value.name + " " + actor.value.lastname);		
			actor = actors.next();
		}		
	}

    function showUsers(){
		console.log ("Recorremos los usuarios.");
		var users = video.users;
		var user = users.next();
		while (user.done !== true){
			console.log ("User: " + user.value.username);		
			user = users.next();
		}		
    }

    /*function showCharacters(characters){
		var character = characters.next();
		while (character.done !== true){
			console.log (character.value.character);		
			character = characters.next();
		}
    }

    function showCast (production){
		console.log ("---- Mostramos el cast. ----");
		var actors = video.actors;
		var actor = actors.next();
		while (actor.done !== true){
			console.log ("Actor: " + actor.value.name + " " + actor.value.lastname);	
			showCharacters(video.getCast(production, actor.value));
			actor = actors.next();
		}
		console.log ("---- Fin: Mostramos el cast. ----");	
    }*/
    
	function showAllProductions(){
		console.log ("---- Mostramos las producciones de cada categoría. ----");
		var categories = video.categories;
		var category = categories.next();
		while (category.done !== true){
			console.log ("Category: " + category.value.name);	
			showProductions(video.getProductionsCategory(category.value));
			category = categories.next();
		}
		console.log ("---- Fin: Mostramos las producciones de cada categoría. ----");
    }
    
    //Categorias
    var cat1 = new Category("Aventuras");
    cat1.description = "Descripcion de Aventuras";
    var cat2 = new Category("Comedia");
    cat2.description = "Descripcion de Comedia";
    var cat3 = new Category("Terror");
    cat3.description = "Descripcion de Terror";
    //
    //Coordenadas
    var c1 = new Coordinate(-12, 1);
    var c2 = new Coordinate(-20, 94);
    var c3 = new Coordinate(90, -90);
    //
    //Usuarios
    var u1 = new User("usu1", "Password1", "us1@gmail.com");
    var u2 = new User("usu2", "Password2", "us2@gmail.com");
    var u3 = new User("usu3", "Password3", "us3@gmail.com");
    //
    //Directores y actores
    var d1 = new Person("Don Javier", "Garcia", "2/5/1969");
    var d2 = new Person("Don Pedro", "Fernandez", "5/1/1970");
    var d3 = new Person("Don Vicente", "Martin", "13/5/1969");

    var a1 = new Person("Elsa", "Pataky", "12/9/1977");
    var a2 = new Person("Collin", "Williams", "15/11/1990");
    var a3 = new Person("Mario", "Casas", "7/11/1969");
    //
    //Peliculas y Series
    var m1 = new Movie("Avatar", "20/1/2006");
    m1.nationality = "US";
    m1.synopsis = "Synopsis de Avatar";
    m1.locations = c1;
    var m2 = new Movie("In Time", "10/2/2006");
    m2.nationality = "UK";
    m2.synopsis = "Synopsis de In Time";
    m2.locations = c2;

    var s1 = new Serie("LQSA", "12/11/2009");
    s1.nationality = "ES";
    s1.synopsis = "Synopsis de LQSA";
    s1.locations = c1;
    var s2 = new Serie("Lost", "12/8/1999");
    s2.nationality = "CH";
    s2.synopsis = "Synopsis de Lost";
    s2.locations = c2;
    //

    console.log("---- Testeo VideoSystem. ----");
    var video = VideoSystem.getInstance();
    video.name = "VideoSystem de prueba";
    //Instancia VideoSystem: VideoSystem de prueba
    console.log("Instancia VideoSystem: " + video.name);


    //Test
    testCoordinate();
    testProduction();
    testCategory();
    testUser();
    testPerson();
    testVideoSystemWithCategory();
    testVideoSystemWithDirector();
    testVideoSystemWithActor();
    testVideoSystemWithUser();
    //

    //Show
    showCategories();
    showActors();
    showUsers();
    showProductionsByActor(a2);
    showAllProductions();
    //
}
window.onload = testVideoSystem;
