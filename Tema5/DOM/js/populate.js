"use strict"

function createObjects(videosystem) {

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
    var d1 = new Person("Quentin", "Tarantino", "2/5/1969");
    d1.picture = "images/d1.jpg";
    var d2 = new Person("Steven", "Spielberg", "5/1/1970");
    d2.picture = "images/d2.jpg";
    var d3 = new Person("James", "Camperon", "13/5/1969");
    d3.picture = "images/d3.jpg";

    var a1 = new Person("Lily", "Collins", "12/9/1977");
    a1.picture = "images/a1.jpg";
    var a2 = new Person("Salma", "Hayek", "15/11/1990");
    a2.picture = "images/a2.jpg";
    var a3 = new Person("Chris", "Pratt", "7/11/1969");
    a3.picture = "images/a3.jpg";
    //
    //Peliculas y Series
    var m1 = new Movie("Avatar", "20/1/2006");
    m1.nationality = "US";
    m1.synopsis = "Synopsis de Avatar";
    m1.locations = c1;
    m1.image = "images/m1.jpg";
    var m2 = new Movie("In Time", "10/2/2006");
    m2.nationality = "UK";
    m2.synopsis = "Synopsis de In Time";
    m2.locations = c2;
    m2.image = "images/m2.jpg";
    var m3 = new Movie("Jurassic World", "11/12/2016");
    m3.nationality = "ES";
    m3.synopsis = "Synopsis de Jurassic World";
    m3.locations = c3;
    m3.image = "images/m3.jpg";

    var s1 = new Serie("LQSA", "12/11/2009");
    s1.nationality = "ES";
    s1.synopsis = "Synopsis de LQSA";
    s1.locations = c1;
    s1.image = "images/s1.jpg";
    var s2 = new Serie("Lost", "12/8/1999");
    s2.nationality = "CH";
    s2.synopsis = "Synopsis de Lost";
    s2.locations = c2;
    s2.image = "images/s2.jpg";
    //

    //Categorias y Producciones
    try {
        videosystem.addCategory(cat1);
        videosystem.addCategory(cat2);
    } catch (err) {
        console.log(err.toString());
    }

    try {
        videosystem.assignCategory(cat1, m1);
        videosystem.assignCategory(cat1, m2);
        videosystem.assignCategory(cat3, m3);
        videosystem.assignCategory(cat2, s1);
        videosystem.assignCategory(cat3, s2);
    } catch (err) {
        console.log(err.toString());
    }
    //
    //Actores y directores
    try {
        videosystem.addDirector(d1);
        videosystem.addDirector(d2);
        videosystem.addDirector(d3);
    } catch (err) {
        console.log(err.toString());
    }

    try {
        videosystem.addActor(a1);
        videosystem.addActor(a2);
        videosystem.addActor(a3);
    } catch (err) {
        console.log(err.toString());
    }
    //Asignar actores y directores
    try {
        videosystem.assignActor(a1, m1);
        videosystem.assignActor(a2, m2);
        videosystem.assignActor(a2, s1);
        videosystem.assignActor(a1, s1);
        videosystem.assignActor(a2, s2);
        videosystem.assignActor(a3, m3);

        videosystem.assignDirector(d1, m1);
        videosystem.assignDirector(d2, m2);
        videosystem.assignDirector(d3, m3);
        videosystem.assignDirector(d1, s1);
        videosystem.assignDirector(d2, s2);

    } catch (err) {
        console.log(err.toString());
    }
    //
}

function categoriesMenuPopulate(video) {

    var ini = document.getElementsByClassName("navbar-header");
    var ul = document.getElementById("navCategory");
    var categories = video.categories;
    var category = categories.next();

    ini[0].addEventListener("click", initPopulate(video));

    while (category.done !== true) {
        var li = document.createElement("li");

        var a = document.createElement("a");
        a.setAttribute("href", "#");

        a.addEventListener("click", categoryPopulate(category.value));
        a.appendChild(document.createTextNode(category.value.name));

        li.appendChild(a);
        ul.appendChild(li);

        category = categories.next();
    }
}

function initPopulate(vs) {
    return function () {
        var actores = document.getElementById("actores");
        actores.addEventListener("click", showActors(vs));
        var directores = document.getElementById("directores");
        directores.addEventListener("click", showDirectors(vs, vs.directors));

        var categories = videosystem.categories;
        var category = categories.next();
        var divSct1 = document.getElementById("sct1");

        removeChildsElement(divSct1);

        while (!category.done) {
            var divCol = document.createElement("div");
            divCol.setAttribute("class", "col-sm-12");

            var divCap = document.createElement("div");
            divCap.setAttribute("class", "caption");

            var h2 = document.createElement("h2");
            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.appendChild(document.createTextNode(category.value.name));
            a.addEventListener("click", categoryPopulate(category.value));
            h2.appendChild(a);
            divCap.appendChild(h2);

            divCol.appendChild(divCap);
            divSct1.appendChild(divCol);

            var productions = videosystem.getProductionsCategory(category.value);
            var production = productions.next();

            while (!production.done) {
                var col = document.createElement("div");
                col.setAttribute("class", "col-sm-3");

                var divThumb = document.createElement("div");
                divThumb.setAttribute("class", "thumbnail");
                divThumb.setAttribute("id", "divprod");

                var img = document.createElement("img");
                img.setAttribute("src", production.value.image);
                img.setAttribute("class", "img-responsive")
                divThumb.appendChild(img);

                var cap = document.createElement("div");
                cap.setAttribute("class", "caption");

                var h4 = document.createElement("h4");
                var a2 = document.createElement("a");
                a2.setAttribute("href", "#");
                a2.appendChild(document.createTextNode(production.value.title));
                a2.addEventListener("click", showProduction(vs, production.value));
                h4.appendChild(a2);
                cap.appendChild(h4);

                divThumb.appendChild(cap);
                col.appendChild(divThumb);
                divCap.appendChild(col);
                production = productions.next();
            }
            category = categories.next();
        }
    }
}

function removeChildsElement(element) {

    for (var i = element.children.length - 1; i > -1; i--) {
        element.removeChild(element.children[i]);
    }
}

function categoryPopulate(category) {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var productions = videosystem.getProductionsCategory(category);
        var production = productions.next();

        while (production.done !== true) {
            showProductions(divSct1, production, videosystem);

            production = productions.next();
        }
    }
}

function showActors(video) {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var actors = video.actors;
        var actor = actors.next();
        while (actor.done !== true) {
            var divCol = document.createElement("div");
            divCol.setAttribute("class", "col-sm-4");

            var divThumb = document.createElement("div");
            divThumb.setAttribute("class", "thumbnail");

            var img = document.createElement("img");
            img.setAttribute("src", actor.value.picture);
            divThumb.appendChild(img);

            var divCap = document.createElement("div");
            divCap.setAttribute("class", "caption");

            var h4 = document.createElement("h4");
            h4.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname));
            divCap.appendChild(h4);

            var a = document.createElement("a");
            a.appendChild(document.createTextNode("+ informacion"));
            a.setAttribute("class", "pull-right");
            a.addEventListener("click", showActor(video, actor.value));
            divCap.appendChild(a);

            divThumb.appendChild(divCap);
            divCol.appendChild(divThumb);
            divSct1.appendChild(divCol);

            actor = actors.next();
        }
    }
}

function showDirectors(video) {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var directors = video.directors;
        var director = directors.next();
        while (director.done !== true) {
            var divCol = document.createElement("div");
            divCol.setAttribute("class", "col-sm-4");

            var divThumb = document.createElement("div");
            divThumb.setAttribute("class", "thumbnail");

            var img = document.createElement("img");
            img.setAttribute("src", director.value.picture);
            divThumb.appendChild(img);

            var divCap = document.createElement("div");
            divCap.setAttribute("class", "caption");

            var h4 = document.createElement("h4");
            h4.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname));
            divCap.appendChild(h4);

            var a = document.createElement("a");
            a.appendChild(document.createTextNode("+ informacion"));
            a.setAttribute("class", "pull-right");
            a.addEventListener("click", showDirector(video, director.value));
            divCap.appendChild(a);

            divThumb.appendChild(divCap);
            divCol.appendChild(divThumb);
            divSct1.appendChild(divCol);

            director = directors.next();
        }
    }
}

function showActor(video, actor) {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var divFoto = document.createElement("div");
        divFoto.setAttribute("class", "col-sm-4");

        var divThumb = document.createElement("div");
        divThumb.setAttribute("class", "thumbnail");

        var img = document.createElement("img");
        img.setAttribute("src", actor.picture);
        divThumb.appendChild(img);

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "col-sm-8");

        var name = document.createElement("h2");
        name.appendChild(document.createTextNode(actor.name + " " + actor.lastname + "(" + actor.born.toLocaleDateString() + ")"));
        divInfo.appendChild(name);

        var prod = document.createElement("h3");
        prod.appendChild(document.createTextNode("Producciones:"));
        divInfo.appendChild(prod);

        var productions = video.getProductionsActor(actor);
        var production = productions.next();

        while (production.done !== true) {
            showProductions(divInfo, production, video);

            production = productions.next();
        }

        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }
}

function showDirector(video, director) {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var divFoto = document.createElement("div");
        divFoto.setAttribute("class", "col-sm-4");

        var divThumb = document.createElement("div");
        divThumb.setAttribute("class", "thumbnail");

        var img = document.createElement("img");
        img.setAttribute("src", director.picture);
        divThumb.appendChild(img);

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "col-sm-8");
        divInfo.setAttribute("id", "info");

        var name = document.createElement("h2");
        name.appendChild(document.createTextNode(director.name + " " + director.lastname + "(" + director.born.toLocaleDateString() + ")"));
        divInfo.appendChild(name);

        var prod = document.createElement("h3");
        prod.appendChild(document.createTextNode("Producciones:"));
        divInfo.appendChild(prod);

        var productions = video.getProductionsDirector(director);
        var production = productions.next();

        while (production.done !== true) {
            showProductions(divInfo, production, video);

            production = productions.next();
        }


        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }
}

function showProductions(element, production, video) {
    var divCol = document.createElement("div");
    divCol.setAttribute("class", "col-sm-3");

    var divCar = document.createElement("div");
    divCar.setAttribute("class", "thumbnail");

    var foto = document.createElement("img");
    foto.setAttribute("src", production.value.image);
    divCar.appendChild(foto);

    var divCap = document.createElement("div");
    divCap.setAttribute("class", "caption");

    var h4 = document.createElement("h4");
    h4.appendChild(document.createTextNode(production.value.title));
    divCap.appendChild(h4);

    var a = document.createElement("a");
    a.appendChild(document.createTextNode("+ informacion"));
    a.setAttribute("class", "pull-right");
    a.addEventListener("click", showProduction(video, production.value));
    divCap.appendChild(a);

    divCar.appendChild(divCap);
    divCol.appendChild(divCar);
    element.appendChild(divCol);
}

function showProduction(video, production) {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var divFoto = document.createElement("div");
        divFoto.setAttribute("class", "col-sm-4");

        var divThumb = document.createElement("div");
        divThumb.setAttribute("class", "thumbnail");

        var img = document.createElement("img");
        img.setAttribute("src", production.image);
        divThumb.appendChild(img);

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "col-sm-8");

        var title = document.createElement("h2");
        title.appendChild(document.createTextNode(production.title + "(" + production.publication.toLocaleDateString() + ")"));
        divInfo.appendChild(title);

        var actores = document.createElement("h3");
        actores.appendChild(document.createTextNode("Actores:"));
        divInfo.appendChild(actores);

        var cast = video.getCast(production);
        var acts = cast.actors.length;

        for (var i = 0; i < acts; i++) {
            var divCol = document.createElement("div");
            divCol.setAttribute("class", "col-sm-3");

            var divCar = document.createElement("div");
            divCar.setAttribute("class", "thumbnail");

            var foto = document.createElement("img");
            foto.setAttribute("src", cast.actors[i].actor.picture);
            divCar.appendChild(foto);

            var divCap = document.createElement("div");
            divCap.setAttribute("class", "caption");

            var h4 = document.createElement("h4");
            h4.appendChild(document.createTextNode(cast.actors[i].actor.name + " " + cast.actors[i].actor.lastname));
            divCap.appendChild(h4);

            var a = document.createElement("a");
            a.appendChild(document.createTextNode("+ informacion"));
            a.setAttribute("class", "pull-right");
            a.addEventListener("click", showActor(video, cast.actors[i].actor));
            divCap.appendChild(a);

            divCar.appendChild(divCap);
            divCol.appendChild(divCar);
            divInfo.appendChild(divCol);
        }

        var director = document.createElement("h3");
            director.appendChild(document.createTextNode("Director:"));
            divInfo.appendChild(director);

            var divCol2 = document.createElement("div");
            divCol2.setAttribute("class", "col-sm-3");

            var divCar2 = document.createElement("div");
            divCar2.setAttribute("class", "thumbnail");

            var foto2 = document.createElement("img");
            foto2.setAttribute("src", cast.director.director.picture);
            divCar2.appendChild(foto2);

            var divCap2 = document.createElement("div");
            divCap2.setAttribute("class", "caption");

            var h42 = document.createElement("h4");
            h42.appendChild(document.createTextNode(cast.director.director.name + " " + cast.director.director.lastname));
            divCap2.appendChild(h42);

            var a2 = document.createElement("a");
            a2.appendChild(document.createTextNode("+ informacion"));
            a2.setAttribute("class", "pull-right");
            a2.addEventListener("click", showDirector(video, cast.director.director));
            divCap2.appendChild(a2);

            divCar2.appendChild(divCap2);
            divCol2.appendChild(divCar2);
            divInfo.appendChild(divCol2);

        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }
}

function init(vs) {
    createObjects(vs);
    categoriesMenuPopulate(vs);
    var initPop = initPopulate(vs);
    initPop();
}

var videosystem = VideoSystem.getInstance();
videosystem.name = "VideoSystem de prueba";


window.onload = init(videosystem);