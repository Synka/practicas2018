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
        var d1 = new Person("Quentin", "Tarantino", "05/02/1969");
        d1.picture = "images/d1.jpg";
        var d2 = new Person("Steven", "Spielberg", "05/01/1970");
        d2.picture = "images/d2.jpg";
        var d3 = new Person("James", "Cameron", "12/05/1969");
        d3.picture = "images/d3.jpg";
    
        var a1 = new Person("Lily", "Collins", "12/09/1977");
        a1.picture = "images/a1.jpg";
        var a2 = new Person("Salma", "Hayek", "02/11/1990");
        a2.picture = "images/a2.jpg";
        var a3 = new Person("Chris", "Pratt", "07/11/1969");
        a3.picture = "images/a3.jpg";
        //
        //Peliculas y Series
        var m1 = new Movie("Avatar", "09/01/2006");
        m1.nationality = "US";
        m1.synopsis = "Synopsis de Avatar";
        m1.locations = c1;
        m1.image = "images/m1.jpg";
        /*m1.resource = new Resources(100, "m1.html");
        m1.resource.audios.push("ES", "EN");
        m1.resource.subtitles.push("ES", "EN");*/
    
        var m2 = new Movie("In Time", "10/02/2006");
        m2.nationality = "UK";
        m2.synopsis = "Synopsis de In Time";
        m2.locations = c2;
        m2.image = "images/m2.jpg";
        m2.resource = new Resources(200, "m2.html");
        m2.resource.audios.push("PO", "FR");
        m2.resource.subtitles.push("PO", "FR");
    
        var m3 = new Movie("Jurassic World", "11/12/2016");
        m3.nationality = "ES";
        m3.synopsis = "Synopsis de Jurassic World";
        m3.locations = c3;
        m3.image = "images/m3.jpg";
        m3.resource = new Resources(300, "m3.html");
        m3.resource.audios.push("CH", "JP");
        m3.resource.subtitles.push("CH", "JP");
    
        var s1 = new Serie("LQSA", "12/11/2009");
        s1.nationality = "ES";
        s1.synopsis = "Synopsis de LQSA";
        s1.locations = c1;
        s1.image = "images/s1.jpg";
        s1.resource = new Resources(101, "s1.html");
        s1.resource.audios.push("ES", "EN");
        s1.resource.subtitles.push("ES", "EN");
    
        var s2 = new Serie("Lost", "12/08/1999");
        s2.nationality = "CH";
        s2.synopsis = "Synopsis de Lost";
        s2.locations = c2;
        s2.image = "images/s2.jpg";
        s2.resource = new Resources(202, "s2.html");
        s2.resource.audios.push("CH", "JP");
        s2.resource.subtitles.push("CH", "JP");
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
            videosystem.assignCategory(cat1, m3);
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

function categoriesMenuPopulate() {

    var ini = document.getElementsByClassName("navbar-header");
    var ul = document.getElementById("navCategory");
    var categories = videosystem.categories;
    var category = categories.next();

    removeChildsElement(ul);

    ini[0].addEventListener("click", showHomePage());

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

function showHomePage() {
    return function () {
        menuForms();
        categoriesMenuPopulate()

        var actores = document.getElementById("actores");
        actores.addEventListener("click", showActors());
        var directores = document.getElementById("directores");
        directores.addEventListener("click", showDirectors(videosystem.directors));

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
                a2.addEventListener("click", showProduction(production.value));
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

function showActors() {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var actors = videosystem.actors;
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
            a.setAttribute("href", "#");
            a.addEventListener("click", showActor(actor.value));
            divCap.appendChild(a);

            divThumb.appendChild(divCap);
            divCol.appendChild(divThumb);
            divSct1.appendChild(divCol);

            actor = actors.next();
        }
    }
}

function showDirectors() {
    return function () {
        var divSct1 = document.getElementById("sct1");
        removeChildsElement(divSct1);

        var directors = videosystem.directors;
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
            a.setAttribute("href", "#");
            a.addEventListener("click", showDirector(director.value));
            divCap.appendChild(a);

            divThumb.appendChild(divCap);
            divCol.appendChild(divThumb);
            divSct1.appendChild(divCol);

            director = directors.next();
        }
    }
}

function showActor(actor) {
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

        var productions = videosystem.getProductionsActor(actor);
        var production = productions.next();

        while (production.done !== true) {
            showProductions(divInfo, production);

            production = productions.next();
        }

        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }
}

function showDirector(director) {
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

        var productions = videosystem.getProductionsDirector(director);
        var production = productions.next();

        while (production.done !== true) {
            showProductions(divInfo, production);

            production = productions.next();
        }


        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }
}

function showProductions(element, production) {
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
    a.setAttribute("href", "#");
    a.addEventListener("click", showProduction(production.value));
    divCap.appendChild(a);

    divCar.appendChild(divCap);
    divCol.appendChild(divCar);
    element.appendChild(divCol);
}

function showProduction(production) {
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

        var cast = videosystem.getCast(production);


        var divCol2 = document.createElement("div");
        divCol2.setAttribute("class", "col-sm-5");

        var director = document.createElement("h3");
        director.appendChild(document.createTextNode("Director:"));
        divCol2.appendChild(director);

        var divCar2 = document.createElement("div");
        divCar2.setAttribute("class", "thumbnail");

        var foto2 = document.createElement("img");
        foto2.setAttribute("src", cast.director.director.picture);
        divCar2.appendChild(foto2);

        var divCap2 = document.createElement("div");
        divCap2.setAttribute("class", "caption");

        var h42 = document.createElement("p");
        h42.appendChild(document.createTextNode(cast.director.director.name + " " + cast.director.director.lastname));
        divCap2.appendChild(h42);

        var a2 = document.createElement("a");
        a2.appendChild(document.createTextNode("+ informacion"));
        a2.setAttribute("class", "pull-right");
        a2.setAttribute("href", "#");
        a2.addEventListener("click", showDirector(cast.director.director));
        divCap2.appendChild(a2);

        divCar2.appendChild(divCap2);
        divCol2.appendChild(divCar2);
        divInfo.appendChild(divCol2);

        var divCol = document.createElement("div");
        divCol.setAttribute("class", "col-sm-5");
        divInfo.appendChild(divCol);

        var actores = document.createElement("h3");
        actores.appendChild(document.createTextNode("Actores:"));
        divCol.appendChild(actores);

        var divAct = document.createElement("div");
        divAct.setAttribute("id", "myCarousel");
        divAct.setAttribute("class", "carousel slide");
        divAct.setAttribute("data-ride", "carousel");
        divCol.appendChild(divAct);

        var ol = document.createElement("ol");
        ol.setAttribute("class", "carousel-indicators");
        divAct.appendChild(ol);

        var divCar = document.createElement("div");
        divCar.setAttribute("class", "carousel-inner");
        divAct.appendChild(divCar);

        var acts = cast.actors.length;

        for (var i = 0; i < acts; i++) {

            var li = document.createElement("li");
            li.setAttribute("data-target", "#myCarousel");
            li.setAttribute("data-slide-to", "'" + i + "'");
            ol.appendChild(li);

            var divImg = document.createElement("div");
            if (i == 0) {
                divImg.setAttribute("class", "item active");
            } else {
                divImg.setAttribute("class", "item");
            }
            divCar.appendChild(divImg);

            var foto = document.createElement("img");
            foto.setAttribute("src", cast.actors[i].actor.picture);
            divImg.appendChild(foto);

            var divCaption = document.createElement("div");
            divCaption.setAttribute("class", "carousel-caption");
            divImg.appendChild(divCaption);

            var pc = document.createElement("h3");
            pc.appendChild(document.createTextNode(cast.actors[i].actor.name + " " + cast.actors[i].actor.lastname));
            divCaption.appendChild(pc);

            var h4p = document.createElement("h4");
            var a = document.createElement("a");
            a.appendChild(document.createTextNode("+ informacion"));
            a.setAttribute("href", "#");
            a.addEventListener("click", showActor(cast.actors[i].actor));
            h4p.appendChild(a);
            divCaption.appendChild(h4p);
        }

        var izda = document.createElement("a");
        izda.setAttribute("class", "left carousel-control");
        izda.setAttribute("href", "#myCarousel");
        izda.setAttribute("data-slide", "prev");
        divAct.appendChild(izda);

        var fIzda = document.createElement("span");
        fIzda.setAttribute("class", "glyphicon glyphicon-chevron-left");
        izda.appendChild(fIzda);

        var dcha = document.createElement("a");
        dcha.setAttribute("class", "right carousel-control");
        dcha.setAttribute("href", "#myCarousel");
        dcha.setAttribute("data-slide", "next");
        divAct.appendChild(dcha);

        var fDcha = document.createElement("span");
        fDcha.setAttribute("class", "glyphicon glyphicon-chevron-right");
        dcha.appendChild(fDcha);

        var resources = document.createElement("button");
        resources.setAttribute("type", "button");
        resources.setAttribute("class", "btn btn-primary btn-lg active")
        resources.appendChild(document.createTextNode("Recursos"));
        resources.addEventListener("click", openWindows(production));
        divFoto.appendChild(resources);

        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
        divFoto.appendChild(resources);
    }
}

//PRACTICA 7
function menuForms() {
    function liForm(name, funcion) {
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "list-group-item");
        a.appendChild(document.createTextNode(name));
        a.addEventListener("click", funcion());
        cat.appendChild(a);
        var re = document.createElement("p");
        re.setAttribute("class", "h3");
        re.setAttribute("id", "cerrado");
        cat.appendChild(re);
    }

    function funcForm(panel, name, funcion) {
        var a = document.createElement("a");
        a.setAttribute("href", "#");
        a.setAttribute("class", "list-group-item");
        a.appendChild(document.createTextNode(name));
        a.addEventListener("click", funcion());
        panel.appendChild(a);
    }

    var cat = document.getElementById("listCategories");

    removeChildsElement(cat);

    if (!document.cookie) {
        var p = document.createElement("p");
        p.setAttribute("class", "h3"); p.appendChild(document.createTextNode("Identificacion"));
        cat.appendChild(p);
        liForm("Iniciar Sesión", sesionForm);
    } else {
        var reg = /[^=][a-z]*$/;
        var p = document.createElement("p");
        p.setAttribute("class", "h3"); p.appendChild(document.createTextNode("User: " + reg.exec(document.cookie)));
        cat.appendChild(p);
        liForm("Cerrar Sesión", closeSesion);
    }


    if (document.cookie) {
        var div = document.createElement("div");
        div.setAttribute("class", "panel-group");
        div.setAttribute("id", "accordion");

        var panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-default");
        div.appendChild(panel);

        var pHead = document.createElement("div");
        pHead.setAttribute("class", "panel-heading");
        panel.appendChild(pHead);

        var h4 = document.createElement("h4");
        h4.setAttribute("class", "panel-title");
        pHead.appendChild(h4);

        var a = document.createElement("a");
        a.setAttribute("data-toggle", "collapse");
        a.setAttribute("data-parent", "#accordion");
        a.setAttribute("href", "#collapse1");
        a.appendChild(document.createTextNode("Categorias"));
        h4.appendChild(a);

        var collapse = document.createElement("div");
        collapse.setAttribute("id", "collapse1");
        collapse.setAttribute("class", "panel-collapse collapse");
        panel.appendChild(collapse);

        var pBody = document.createElement("div");
        collapse.appendChild(pBody);

        funcForm(pBody, "Añadir categoría", addCategoryForm);
        funcForm(pBody, "Modificar categoría", updCategoryForm);
        funcForm(pBody, "Eliminar categoría", delCategoryForm);

        panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-default");
        div.appendChild(panel);

        pHead = document.createElement("div");
        pHead.setAttribute("class", "panel-heading");
        panel.appendChild(pHead);

        h4 = document.createElement("h4");
        h4.setAttribute("class", "panel-title");
        pHead.appendChild(h4);

        a = document.createElement("a");
        a.setAttribute("data-toggle", "collapse");
        a.setAttribute("data-parent", "#accordion");
        a.setAttribute("href", "#collapse2");
        a.appendChild(document.createTextNode("Actores"));
        h4.appendChild(a);

        collapse = document.createElement("div");
        collapse.setAttribute("id", "collapse2");
        collapse.setAttribute("class", "panel-collapse collapse");
        panel.appendChild(collapse);

        pBody = document.createElement("div");
        collapse.appendChild(pBody);

        funcForm(pBody, "Añadir actor", addActorForm);
        funcForm(pBody, "Modificar actor", updActorForm);
        funcForm(pBody, "Eliminar actor", delActorForm);

        panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-default");
        div.appendChild(panel);

        pHead = document.createElement("div");
        pHead.setAttribute("class", "panel-heading");
        panel.appendChild(pHead);

        h4 = document.createElement("h4");
        h4.setAttribute("class", "panel-title");
        pHead.appendChild(h4);

        a = document.createElement("a");
        a.setAttribute("data-toggle", "collapse");
        a.setAttribute("data-parent", "#accordion");
        a.setAttribute("href", "#collapse3");
        a.appendChild(document.createTextNode("Directores"));
        h4.appendChild(a);

        collapse = document.createElement("div");
        collapse.setAttribute("id", "collapse3");
        collapse.setAttribute("class", "panel-collapse collapse");
        panel.appendChild(collapse);

        pBody = document.createElement("div");
        collapse.appendChild(pBody);

        funcForm(pBody, "Añadir director", addDirectorForm);
        funcForm(pBody, "Modificar director", updDirectorForm);
        funcForm(pBody, "Eliminar director", delDirectorForm);

        panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-default");
        div.appendChild(panel);

        pHead = document.createElement("div");
        pHead.setAttribute("class", "panel-heading");
        panel.appendChild(pHead);

        h4 = document.createElement("h4");
        h4.setAttribute("class", "panel-title");
        pHead.appendChild(h4);

        a = document.createElement("a");
        a.setAttribute("data-toggle", "collapse");
        a.setAttribute("data-parent", "#accordion");
        a.setAttribute("href", "#collapse4");
        a.appendChild(document.createTextNode("Producciones"));
        h4.appendChild(a);

        collapse = document.createElement("div");
        collapse.setAttribute("id", "collapse4");
        collapse.setAttribute("class", "panel-collapse collapse");
        panel.appendChild(collapse);

        pBody = document.createElement("div");
        collapse.appendChild(pBody);

        funcForm(pBody, "Añadir producción", addProductionForm);
        funcForm(pBody, "Eliminar producción", delProductionForm);

        panel = document.createElement("div");
        panel.setAttribute("class", "panel panel-default");
        div.appendChild(panel);

        pHead = document.createElement("div");
        pHead.setAttribute("class", "panel-heading");
        panel.appendChild(pHead);

        h4 = document.createElement("h4");
        h4.setAttribute("class", "panel-title");
        pHead.appendChild(h4);

        a = document.createElement("a");
        a.setAttribute("data-toggle", "collapse");
        a.setAttribute("data-parent", "#accordion");
        a.setAttribute("href", "#collapse5");
        a.appendChild(document.createTextNode("Recursos"));
        h4.appendChild(a);

        collapse = document.createElement("div");
        collapse.setAttribute("id", "collapse5");
        collapse.setAttribute("class", "panel-collapse collapse");
        panel.appendChild(collapse);

        pBody = document.createElement("div");
        collapse.appendChild(pBody);

        funcForm(pBody, "Añadir recurso", addResourceForm);
        funcForm(pBody, "Eliminar recurso", delResourceForm);


        cat.appendChild(div);

    }
}
// FIN PRACTICA 7

function openWindows(production) {

    var ventana;

    function closeWindows() {
        return function () {

            for (var i = 0; i < listWindows.length; i++) {
                listWindows[i].close();
            }

            var cat = document.getElementById("closeWindows");
            removeChildsElement(cat);
        }
    }

    function globalProductPopulate() {
        var long = listWindows.length - 1;

        var divSct1 = listWindows[long].document.getElementById("sct");

        var divFoto = document.createElement("div");
        divFoto.setAttribute("class", "col-sm-4");

        var divThumb = document.createElement("div");
        divThumb.setAttribute("class", "thumbnail");

        var img = document.createElement("img");
        img.setAttribute("src", production.image);
        divThumb.appendChild(img);

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "col-sm-8");
        divInfo.setAttribute("id", "info");

        var title = document.createElement("h2");
        title.appendChild(document.createTextNode(production.title + "(" + production.publication.toLocaleDateString() + ")"));
        divInfo.appendChild(title);

        if (production.resource) {
            var table = document.createElement("table");
            table.setAttribute("class", "table table-striped");

            var tbody = document.createElement("tbody");
            table.appendChild(tbody);

            var tr1 = document.createElement("tr");
            tbody.appendChild(tr1);
            var dur = document.createElement("th");
            dur.appendChild(document.createTextNode("Duración"));
            tr1.appendChild(dur);
            var td1 = document.createElement("td");
            td1.appendChild(document.createTextNode(production.resource.duration + " minutos."));
            tr1.appendChild(td1);

            var tr2 = document.createElement("tr");
            tbody.appendChild(tr2);
            var link = document.createElement("th");
            link.appendChild(document.createTextNode("Link"));
            tr2.appendChild(link);
            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(production.resource.link));
            tr2.appendChild(td2);

            var tr3 = document.createElement("tr");
            tbody.appendChild(tr3);
            var aud = document.createElement("th");
            aud.appendChild(document.createTextNode("Audios"));
            tr3.appendChild(aud);
            var td3 = document.createElement("td");

            var audios = "";
            var alength = production.resource.audios.length;
            for (var i = 0; i < alength; i++) {
                if (i == alength - 1) {
                    audios += production.resource.audios[i];
                } else {
                    audios += production.resource.audios[i] + ", ";
                }

            }
            td3.appendChild(document.createTextNode(audios));
            tr3.appendChild(td3);

            var tr4 = document.createElement("tr");
            tbody.appendChild(tr4);
            var subs = document.createElement("th");
            subs.appendChild(document.createTextNode("Subtitulos"));
            tr4.appendChild(subs);
            var td4 = document.createElement("td");

            var subtitulos = "";
            var slength = production.resource.subtitles.length;
            for (var i = 0; i < slength; i++) {
                if (i == slength - 1) {
                    subtitulos += production.resource.subtitles[i];
                } else {
                    subtitulos += production.resource.subtitles[i] + ", ";
                }

            }
            td4.appendChild(document.createTextNode(subtitulos));
            tr4.appendChild(td4);

            divInfo.appendChild(table);

        } else {
            var h3 = document.createElement("h3");
            h3.appendChild(document.createTextNode("Lo sentimos, esta produccion no tiene recursos"));
            divInfo.appendChild(h3);
        }

        divFoto.appendChild(divThumb);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);

        var cat = document.getElementById("closeWindows");
        var a = listWindows[long].document.createElement("a");

        removeChildsElement(cat);
        a.setAttribute("href", "#");
        a.setAttribute("class", "list-group-item");
        a.appendChild(document.createTextNode("Cerrar Ventana"));
        a.addEventListener("click", closeWindows());
        cat.appendChild(a);
    }


    return function () {
        ventana = window.open("newWindows.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=200,width=775,height=440");
        listWindows.push(ventana);

        ventana.onload = globalProductPopulate;
    }
}

function showResource(production) {
    return function () {
        var divSct1 = document.getElementById("sct1");

        var divFoto = document.createElement("div");
        divFoto.setAttribute("class", "col-sm-4");

        var divThumb = document.createElement("div");
        divThumb.setAttribute("class", "thumbnail");

        var img = document.createElement("img");
        img.setAttribute("src", production.image);
        divThumb.appendChild(img);

        var divInfo = document.createElement("div");
        divInfo.setAttribute("class", "col-sm-8");
        divInfo.setAttribute("id", "info");

        var title = document.createElement("h2");
        title.appendChild(document.createTextNode(production.title + "(" + production.publication.toLocaleDateString() + ")"));
        divInfo.appendChild(title);

        var table = document.createElement("table");

        var tr1 = document.createElement("tr");
        table.appendChild(tr1);
        var dur = document.createElement("td");
        dur.appendChild(document.createTextNode("Duración"));
        tr1.appendChild(dur);
        var td1 = document.createElement("td");
        td1.appendChild(document.createTextNode(production.resource.duration + " minutos."));
        tr1.appendChild(td1);

        var tr2 = document.createElement("tr");
        table.appendChild(tr2);
        var link = document.createElement("td");
        link.appendChild(document.createTextNode("Link"));
        tr2.appendChild(link);
        var td2 = document.createElement("td");
        td2.appendChild(document.createTextNode(production.resource.link));
        tr2.appendChild(td2);

        var tr3 = document.createElement("tr");
        table.appendChild(tr3);
        var aud = document.createElement("td");
        aud.appendChild(document.createTextNode("Audios"));
        tr3.appendChild(aud);
        var td3 = document.createElement("td");

        var audios = "";
        for (var i = 0; i < production.resource.audios.length; i++) {
            audios += production.resource.audios[i];
        }
        td3.appendChild(document.createTextNode(audios));
        tr3.appendChild(td3);

        var tr4 = document.createElement("tr");
        table.appendChild(tr4);
        var subs = document.createElement("td");
        subs.appendChild(document.createTextNode("Subtitulos"));
        tr4.appendChild(subs);
        var td4 = document.createElement("td");

        var subtitulos = "";
        for (var i = 0; i < production.resource.subtitles.length; i++) {
            subtitulos += production.resource.subtitles[i];
        }
        td4.appendChild(document.createTextNode(subtitulos));
        tr4.appendChild(td4);

        divInfo.appendChild(table);
        divSct1.appendChild(divFoto);
        divSct1.appendChild(divInfo);
    }

}

function initPopulate() {
    //createObjects();
    startDB(); 
    volcarDB();
    setTimeout(function() {
		categoriesMenuPopulate();
    var initPop = showHomePage();
    initPop();
    menuForms();
	}, 1000);
}

var listWindows = [];
var videosystem = VideoSystem.getInstance();
videosystem.name = "VideoSystem de prueba";


window.onload = initPopulate;