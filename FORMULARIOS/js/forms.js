"use strict"

function removeChildsElement(element) {

    for (var i = element.children.length - 1; i > -1; i--) {
        element.removeChild(element.children[i]);
    }
}

function actDir() {
    var form = document.getElementById("sel");

    var id = form.options[form.options.selectedIndex].text;

    var directors = videosystem.directors;
    var director = directors.next();
    var found = false;

    while (found !== true) {
        if (director.value.name + " " + director.value.lastname === id) {
            document.forms["dirForm"]["name"].value = director.value.name;
            document.forms["dirForm"]["lastname"].value = director.value.lastname;
            var born = director.value.born;

            document.forms["dirForm"]["born"].value = born.toISOString().slice(0, 10);
            found = true;
        }
        director = directors.next();
    }
}

function actAct() {
    var form = document.getElementById("sel");

    var id = form.options[form.options.selectedIndex].text;

    var actors = videosystem.actors;
    var actor = actors.next();
    var found = false;

    while (found !== true) {
        if (actor.value.name + " " + actor.value.lastname === id) {
            document.forms["actForm"]["name"].value = actor.value.name;
            document.forms["actForm"]["lastname"].value = actor.value.lastname;
            var born = actor.value.born;
            document.forms["actForm"]["born"].value = born.toISOString().slice(0, 10);
            found = true;
        }
        actor = actors.next();
    }
}

function actCat() {
    var form = document.getElementById("sel");

    var id = form.options[form.options.selectedIndex].text;

    var categories = videosystem.categories;
    var category = categories.next();
    var found = false;

    while (found !== true) {
        if (category.value.name === id) {
            document.forms["catForm"]["name"].value = category.value.name;
            document.forms["catForm"]["description"].value = category.value.description;
            found = true;
        }
        category = categories.next();
    }
}

function hasResource(form) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-4");

    var label = document.createElement("label");
    label.setAttribute("class", "control-label col-sm-2");
    label.appendChild(document.createTextNode("Producciones"));
    dv.appendChild(label);

    var select = document.createElement("select");
    select.setAttribute("class", "form-control");
    select.setAttribute("name", "selectPrin");

    var productions = videosystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        if (production.value.resource !== undefined) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(production.value.title));
            option.setAttribute("value", production.value.title);
            select.appendChild(option);
        }

        production = productions.next();
    }

    dv1.appendChild(select)
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function hasNotResource(form) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-4");

    var label = document.createElement("label");
    label.setAttribute("class", "control-label col-sm-2");
    label.appendChild(document.createTextNode("Producciones"));
    dv.appendChild(label);

    var select = document.createElement("select");
    select.setAttribute("class", "form-control");
    select.setAttribute("name", "selectPrin");

    var productions = videosystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        if (production.value.resource === undefined) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(production.value.title));
            option.setAttribute("value", production.value.title);
            select.appendChild(option);
        }

        production = productions.next();
    }

    dv1.appendChild(select)
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function createSmall(form) {
    var div = document.createElement("div");
    div.setAttribute("id", "smallInfo");
    var small = document.createElement("small");
    small.setAttribute("class", "text-muted");

    small.appendChild(document.createTextNode("Los campos marcados con * son obligatorios."));
    div.appendChild(small);
    form.appendChild(div);
}

function createInput(labelIn, inputName, form, placeholder, required, M) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var label = document.createElement("label");
    label.setAttribute("class", "control-label col-sm-2");
    label.appendChild(document.createTextNode(labelIn));
    dv.appendChild(label);

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-4");

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("name", inputName);
    input.setAttribute("aria-describedby", "mayus");
    input.setAttribute("placeholder", placeholder);

    dv1.appendChild(input);

    if (M == "M") {
        function firstMayus(){
            input.value = input.value.charAt(0).toUpperCase() + input.value.slice(1);
        }
        input.addEventListener("focusout", firstMayus);
    } else if (M == "MULT") {
        var cont = 0;
        function mayus() {
            input.value = input.value.toUpperCase();
            if ((event.keyCode || event.charCode || event.which) != 8) {
                cont++;
            } else {
                cont = 0;
            }
            if (cont % 2 == 0 && cont != 0) {
                input.value += ",";
            }
        }

        var small = document.createElement("small");
        small.setAttribute("id", "dos");
        small.setAttribute("class", "text-muted");
        small.appendChild(document.createTextNode("Solo se permiten dos letras"));
        dv1.appendChild(small);
        input.addEventListener("keyup", mayus);
    } else if (M == "D") {
        function mayus() {
            input.value = input.value.toUpperCase();
        }

        var small = document.createElement("small");
        small.setAttribute("id", "dos");
        small.setAttribute("class", "text-muted");
        small.appendChild(document.createTextNode("Solo se permiten dos letras"));
        dv1.appendChild(small);
        input.setAttribute("maxlength", 2);
        input.addEventListener("keyup", mayus);
    }else if (M == "I"){
        input.type = "file";
    }

    if (required == "required") {
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(" *"));
        label.appendChild(span);
        input.required = true; 

        input.setAttribute("data-error", "Lo sentimos, este campo no puede estar vacío");
        var div = document.createElement("div");
        div.setAttribute("class", "help-block with-errors");
        dv1.appendChild(div);
    }
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function createDate(labelIn, inputName, form, required) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var label = document.createElement("label");
    label.setAttribute("class", "control-label col-sm-2");
    label.appendChild(document.createTextNode(labelIn));
    dv.appendChild(label);

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-4");

    var input = document.createElement("input");
    input.setAttribute("type", "date");
    input.setAttribute("class", "form-control");
    input.setAttribute("name", inputName);
    dv1.appendChild(input);

    if (required == "required") {
        var span = document.createElement("span");
        span.appendChild(document.createTextNode(" *"));
        label.appendChild(span);
        input.required = true; 

        input.setAttribute("data-error", "Lo sentimos, este campo no puede estar vacío");
        var div = document.createElement("div");
        div.setAttribute("class", "help-block with-errors");
        dv1.appendChild(div);
    }

    
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function createTable(labelIn, type, form) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var label = document.createElement("label");
    label.setAttribute("class", "control-label col-sm-2");
    label.appendChild(document.createTextNode(labelIn));
    dv.appendChild(label);

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-4");

    var table = document.createElement("table");
    table.setAttribute("class", "table table-striped");

    var tbody = document.createElement("tbody");

    if (type === "categories") {
        tbody.setAttribute("id", "tbody");
        table.appendChild(tbody);

        var categories = videosystem.categories;
        var category = categories.next();

        while (category.done !== true) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("id", "categorias");
            tr.appendChild(td1);
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("name", "categoria");
            check.setAttribute("value", category.value.name);
            td1.appendChild(check);

            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(category.value.name));
            tr.appendChild(td2);
            tbody.appendChild(tr);


            category = categories.next();
        }


    }

    if (type === "productions") {
        tbody.setAttribute("id", "tbody");
        table.appendChild(tbody);
        var productions = videosystem.productions;
        var production = productions.next();

        while (production.done !== true) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("id", "producciones");
            tr.appendChild(td1);
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("name", "produccion");
            check.setAttribute("value", production.value.title);
            td1.appendChild(check);

            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(production.value.title));
            tr.appendChild(td2);
            tbody.appendChild(tr);


            production = productions.next();
        }
    }

    if (type === "actors") {
        tbody.setAttribute("id", "tbody2");
        table.appendChild(tbody);
        var actors = videosystem.actors;
        var actor = actors.next();

        while (actor.done !== true) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("id", "actores");
            tr.appendChild(td1);
            var check = document.createElement("input");
            check.setAttribute("type", "checkbox");
            check.setAttribute("name", "actor");
            check.setAttribute("value", actor.value.name + " " + actor.value.lastname);
            td1.appendChild(check);

            var td2 = document.createElement("td");
            td2.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname));
            tr.appendChild(td2);
            tbody.appendChild(tr);


            actor = actors.next();
        }
    }

    dv1.appendChild(table);
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function createButton(func, form) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-offset-5");

    var a = document.createElement("input");
    a.setAttribute("value", "Enviar");
    a.setAttribute("class", "btn btn-primary");
    a.setAttribute("type", "submit");
    a.addEventListener("click", func());

    dv1.appendChild(a);
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function createSelect(form, type, name, lab, func) {
    var dv = document.createElement("div");
    dv.setAttribute("class", "form-group");

    var dv1 = document.createElement("div");
    dv1.setAttribute("class", "col-sm-4");

    var label = document.createElement("label");
    label.setAttribute("class", "control-label col-sm-2");
    label.appendChild(document.createTextNode(lab));
    dv.appendChild(label);

    var select = document.createElement("select");
    select.setAttribute("class", "form-control");
    select.setAttribute("name", name);
    select.setAttribute("id", "sel");

    if (type == "Categories") {
        var categories = videosystem.categories;
        var category = categories.next();

        while (category.done !== true) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(category.value.name));
            option.setAttribute("value", category.value.name);
            select.appendChild(option);

            category = categories.next();
        }

        if (func == "upd") {
            select.addEventListener("change", actCat);
        }
    }

    if (type == "Actors") {

        var actors = videosystem.actors;
        var actor = actors.next();

        while (actor.done !== true) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(actor.value.name + " " + actor.value.lastname));
            option.setAttribute("value", actor.value.name + " " + actor.value.lastname);
            select.appendChild(option);

            actor = actors.next();
        }

        if (func == "upd") {
            select.addEventListener("change", actAct);
        }
    }

    if (type == "Directors") {

        var directors = videosystem.directors;
        var director = directors.next();

        while (director.done !== true) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(director.value.name + " " + director.value.lastname));
            option.setAttribute("value", director.value.name + " " + director.value.lastname);
            select.appendChild(option);

            director = directors.next();
        }

        if (func == "upd") {
            select.addEventListener("change", actDir);
        }
    }

    if (type == "Productions") {

        var productions = videosystem.productions;
        var production = productions.next();

        while (production.done !== true) {
            var option = document.createElement("option");
            option.appendChild(document.createTextNode(production.value.title));
            option.setAttribute("value", production.value.title);
            select.appendChild(option);

            production = productions.next();
        }
    }

    dv1.appendChild(select)
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function resultForm(result) {
    var p = document.getElementById("result");

    if (result) {
        p.setAttribute("style", "color:green");
        p.innerHTML = "Consulta realizada correctamente.";
        categoriesMenuPopulate();
    } else {
        p.setAttribute("style", "color:red");
        p.innerHTML = "Ha ocurrido un error.";
    }
}

function addCategoryForm() {
    function addCategory() {
        return function () {
            var name = document.forms["catForm"]["name"].value;
            var description = document.forms["catForm"]["description"].value;
            $('form').validator();

            if (name == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var cat = new Category(name);
                if (description != "") {
                    cat.description = description;
                }

                videosystem.addCategory(cat);
                resultForm(true);
            }
            document.forms["catForm"].reset();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir categoría"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");
        createSmall(form);
        createInput("Nombre", "name", form, "Nombre de la categoría", "required");
        createInput("Descripción", "description", form, "Breve descripción");

        createButton(addCategory, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function updCategoryForm() {

    function updCategory() {
        return function () {
            var form = document.forms["catForm"]["selectPrin"];
            var id = form.options[form.options.selectedIndex].text;
            var name = document.forms["catForm"]["name"].value;
            var description = document.forms["catForm"]["description"].value;
            $('form').validator();

            if (name == "" || id == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var cs = videosystem.categories;
                var category = cs.next();
                var aux = -1;

                while (category.done !== true) {
                    if (category.value.name === id) {
                        aux = category.value;
                    }
                    category = cs.next();
                }

                if (aux !== -1) {
                    aux.name = name;
                    if (description != "") {
                        aux.description = description;
                    }
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new CategoryNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].text = name;
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Modificar categoría"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        createSelect(form, "Categories", "selectPrin", "Lista de Categorias", "upd");
        createInput("Nombre", "name", form, "Nombre de la categoría", "required");
        createInput("Descripción", "description", form, "Breve descripción");

        createButton(updCategory, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
        actCat();
    }
}

function delCategoryForm() {

    function delCategory() {
        return function () {
            var form = document.forms["catForm"]["selectPrin"];
            var id = form.value;

            if (id == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var cs = videosystem.categories;
                var category = cs.next();
                var aux = -1;

                while (category.done !== true) {
                    if (category.value.name === id) {
                        aux = category.value;
                    }
                    category = cs.next();
                }

                if (aux !== -1) {

                    videosystem.removeCategory(aux);
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new CategoryNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar categoría"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("method", "post");

        createSelect(form, "Categories", "selectPrin", "Lista de categorias");
        createButton(delCategory, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function addActorForm() {
    function addActor() {
        return function () {
            var name = document.forms["actForm"]["name"].value;
            var lastname = document.forms["actForm"]["lastname"].value;
            var born = document.forms["actForm"]["born"].value;
            var image = document.forms["actForm"]["image"].value;
            var imagePart = image.split("\\");
            var imageLoc = imagePart[imagePart.length-1];
            $('form').validator();

            if (name == "" || lastname == "" || born == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var act = new Person(name, lastname, born);
                if (image != ""){
                    act.picture = "images/" + imageLoc;
                }else {
                    act.picture = "images/default.jpg";
                }
                
                videosystem.addActor(act);
                //Productions Seleccionadas
                var producciones = document.getElementById("tbody").getElementsByTagName('input');
                var long = producciones.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (producciones[x].checked) {
                        var productions = videosystem.productions;
                        var production = productions.next();

                        while (found !== true) {
                            if (production.value.title === producciones[x].value) {
                                videosystem.assignActor(act, production.value);
                                found = true;
                            }
                            production = productions.next();
                        }

                    }
                }
                //
                resultForm(true);
            }
            document.forms["actForm"].reset();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir actor"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "actForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        createInput("Nombre", "name", form, "Nombre", "required", "M");
        createInput("Apellidos", "lastname", form, "Apellidos", "required", "M");
        createDate("F. Nacimiento", "born", form, "required");
        createInput("Imagen", "image", form, "Imagen del actor", "", "I");
        createTable("Producciones", "productions", form);

        createButton(addActor, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function updActorForm() {

    function updActor() {
        return function () {
            var form = document.forms["actForm"]["selectPrin"];
            var id = form.options[form.options.selectedIndex].text;
            var name = document.forms["actForm"]["name"].value;
            var lastname = document.forms["actForm"]["lastname"].value;
            var born = new Date(document.forms["actForm"]["born"].value);
            $('form').validator();

            if (name == "" || lastname == "" || born == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var acts = videosystem.actors;
                var actor = acts.next();
                var aux = -1;

                while (actor.done !== true) {
                    if (actor.value.name + " " + actor.value.lastname === id) {
                        aux = actor.value;
                    }
                    actor = acts.next();
                }

                if (aux !== -1) {
                    aux.name = name;
                    aux.lastname = lastname;
                    aux.born = born;
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new ActorNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].text = name + " " + lastname;
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Modificar actor"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "actForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        createSelect(form, "Actors", "selectPrin", "Lista de Actores", "upd");
        createInput("Nombre", "name", form, "Nombre", "required", "M");
        createInput("Apellidos", "lastname", form, "Apellidos", "required", "M");
        createDate("F. Nacimiento", "born", form, "required");

        createButton(updActor, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
        actAct();
    }
}

function delActorForm() {

    function delActor() {
        return function () {
            var form = document.forms["actForm"]["selectPrin"];
            var id = form.value;

            if (id == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var acts = videosystem.actors;
                var actor = acts.next();
                var aux = -1;

                while (actor.done !== true) {
                    if (actor.value.name + " " + actor.value.lastname === id) {
                        aux = actor.value;
                    }
                    actor = acts.next();
                }

                if (aux !== -1) {

                    videosystem.removeActor(aux);
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new ActorNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar actor"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "actForm");
        form.setAttribute("class", "form-horizontal");

        createSelect(form, "Actors", "selectPrin", "Lista de actores");
        createButton(delActor, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function addDirectorForm() {
    function addDirector() {
        return function () {
            var name = document.forms["dirForm"]["name"].value;
            var lastname = document.forms["dirForm"]["lastname"].value;
            var born = document.forms["dirForm"]["born"].value;
            var image = document.forms["dirForm"]["image"].value;
            var imagePart = image.split("\\");
            var imageLoc = imagePart[imagePart.length-1];
            $('form').validator();

            if (name == "" || lastname == "" || born == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var dir = new Person(name, lastname, born);
                if (image != ""){
                    dir.picture = "images/" + imageLoc;
                }else {
                    dir.picture = "images/default.jpg";
                }
                videosystem.addDirector(dir);
                //Productions Seleccionadas
                var producciones = document.getElementById("tbody").getElementsByTagName('input');
                var long = producciones.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (producciones[x].checked) {
                        var productions = videosystem.productions;
                        var production = productions.next();

                        while (found !== true) {
                            if (production.value.title === producciones[x].value) {
                                videosystem.assignDirector(dir, production.value);
                                found = true;
                            }
                            production = productions.next();
                        }

                    }
                }
                //
                resultForm(true);
            }
            document.forms["dirForm"].reset();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir director"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "dirForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        createInput("Nombre", "name", form, "Nombre", "required", "M");
        createInput("Apellidos", "lastname", form, "Apellidos", "required", "M");
        createDate("F. Nacimiento", "born", form, "required");
        createInput("Imagen", "image", form, "Imagen del director", "", "I");
        createTable("Producciones", "productions", form);

        createButton(addDirector, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function updDirectorForm() {

    function updDirector() {
        return function () {
            var form = document.forms["dirForm"]["selectPrin"];
            var id = form.options[form.options.selectedIndex].text;
            var name = document.forms["dirForm"]["name"].value;
            var lastname = document.forms["dirForm"]["lastname"].value;
            var born = new Date(document.forms["dirForm"]["born"].value);
            $('form').validator();

            if (name == "" || lastname == "" || born == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var dirs = videosystem.directors;
                var director = dirs.next();
                var aux = -1;

                while (director.done !== true) {
                    if (director.value.name + " " + director.value.lastname === id) {
                        aux = director.value;
                    }
                    director = dirs.next();
                }

                if (aux !== -1) {
                    aux.name = name;
                    aux.lastname = lastname;
                    aux.born = born;
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new DirectorNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].text = name + " " + lastname;
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Modificar director"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "dirForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        createSelect(form, "Directors", "selectPrin", "Lista de Directores", "upd");
        createInput("Nombre", "name", form, "Nombre", "required", "M");
        createInput("Apellidos", "lastname", form, "Apellidos", "required", "M");
        createDate("F. Nacimiento", "born", form, "required");

        createButton(updDirector, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
        actDir();
    }
}

function delDirectorForm() {

    function delDirector() {
        return function () {
            var form = document.forms["dirForm"]["selectPrin"];
            var id = form.value;

            if (id == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var dirs = videosystem.directors;
                var director = dirs.next();
                var aux = -1;

                while (director.done !== true) {
                    if (director.value.name + " " + director.value.lastname === id) {
                        aux = director.value;
                    }
                    director = dirs.next();
                }

                if (aux !== -1) {

                    videosystem.removeDirector(aux);
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new DirectorNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar director"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "dirForm");
        form.setAttribute("class", "form-horizontal");

        createSelect(form, "Directors", "selectPrin", "Lista de Directores");
        createButton(delDirector, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function addResourceForm() {

    function addResource() {
        return function () {
            var form = document.forms["resForm"]["selectPrin"];
            var id = form.value;
            var duration = document.forms["resForm"]["duration"].value;
            var link = document.forms["resForm"]["link"].value;
            var audio = document.forms["resForm"]["audio"].value;
            var subtitulo = document.forms["resForm"]["subtitle"].value;
            $('form').validator();

            if (duration == "" || link == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var res = new Resources(duration, link);

                if (audio != ""){
                    var aud = audio.split(",").filter(Boolean);

                    for (var x = 0; x < aud.length; x++) {
                        res.audios.push(aud[x]);
                    }
                }

                if (subtitulo != ""){
                    var subs = subtitulo.split(",").filter(Boolean);

                    for (var x = 0; x < subs.length; x++) {
                        res.subtitles.push(subs[x]);
                    }
                }

                var productions = videosystem.productions;
                var production = productions.next();
                var aux = -1;

                while (production.done !== true) {
                    if (production.value.title === id) {
                        aux = production.value;
                    }
                    production = productions.next();
                }

                if (aux !== -1) {
                    aux.resource = res;
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new ProductionNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            document.forms["resForm"].reset();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir recurso"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "resForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        hasNotResource(form);
        createInput("Duración", "duration", form, "Duración de la producción", "required");
        createInput("Link", "link", form, "Dirección donde se encuentra", "required");
        createInput("Audio", "audio", form, "Ej. 'ES'", "", "MULT");
        createInput("Subtitulo", "subtitle", form, "Ej. 'ES'", "", "MULT");


        createButton(addResource, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function delResourceForm() {

    function delResource() {
        return function () {
            var form = document.forms["resForm"]["selectPrin"];
            var id = form.value;

            if (id == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var productions = videosystem.productions;
                var production = productions.next();
                var aux = -1;

                while (production.done !== true) {
                    if (production.value.title === id) {
                        aux = production.value;
                    }
                    production = productions.next();
                }

                if (aux !== -1) {

                    aux.resource = undefined;
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new ProductionNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar recurso"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "resForm");
        form.setAttribute("class", "form-horizontal");

        hasResource(form);
        createButton(delResource, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function addProductionForm() {
    function addProduction() {
        return function () {
            var title = document.forms["proForm"]["title"].value;
            var publication = document.forms["proForm"]["publication"].value;
            var nationality = document.forms["proForm"]["nationality"].value;
            var synopsis = document.forms["proForm"]["synopsis"].value;
            var image = document.forms["proForm"]["image"].value;
            var imagePart = image.split("\\");
            var imageLoc = imagePart[imagePart.length-1];

            var select = document.forms["proForm"]["selectPrin"];
            var id = select.value;
            $('form').validator();

            if (title == "" || publication == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var pro = new Movie(title, publication);
                if (nationality != "") {
                    pro.nationality = nationality;
                }
                if (synopsis != "") {
                    pro.synopsis = synopsis;
                }

                if (image != ""){
                    pro.image = "images/" + imageLoc;
                }else {
                    pro.image = "images/pDefault.jpg";
                }
                videosystem.addProduction(pro);

                //Director
                var directors = videosystem.directors;
                var director = directors.next();
                var aux = -1;

                while (director.done !== true) {
                    if (director.value.name + " " + director.value.lastname === id) {
                        aux = director.value;
                    }
                    director = directors.next();
                }
                videosystem.assignDirector(aux, pro);
                //
                //Categorias Seleccionadas
                var categorias = document.getElementById("tbody").getElementsByTagName('input');
                var long = categorias.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (categorias[x].checked) {
                        var cs = videosystem.categories;
                        var category = cs.next();

                        while (found !== true) {
                            if (category.value.name === categorias[x].value) {
                                videosystem.assignCategory(category.value, pro);
                                found = true;
                            }
                            category = cs.next();
                        }

                    }
                }
                //
                //Actores Seleccionados
                var actores = document.getElementById("tbody2").getElementsByTagName('input');
                var long = actores.length;

                for (var x = 0; x < long; x++) {
                    var found = false;
                    if (actores[x].checked) {
                        var actors = videosystem.actors;
                        var actor = actors.next();

                        while (found !== true) {
                            if (actor.value.name + " " + actor.value.lastname === actores[x].value) {
                                videosystem.assignActor(actor.value, pro);
                                found = true;
                            }
                            actor = actors.next();
                        }

                    }
                }
                //
                resultForm(true);
            }
            document.forms["proForm"].reset();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Añadir producción"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("id", "form");
        form.setAttribute("name", "proForm");
        form.setAttribute("class", "form-horizontal");
        form.setAttribute("data-toggle", "validator");
        form.setAttribute("novalidate", "true");
        form.setAttribute("method", "post");

        createSmall(form);

        createInput("Título", "title", form, "Titulo de la producción", "required");
        createDate("F. Publicacion", "publication", form, "required");
        createInput("Imagen", "image", form, "Imagen de la producción", "", "I");
        createInput("Nacionalidad", "nationality", form, "Ej. 'ES'", "", "D");
        createInput("Sinopsis", "synopsis", form, "Resumen de la producción");
        createSelect(form, "Directors", "selectPrin", "Director");
        createTable("Categorias", "categories", form);
        createTable("Actores", "actors", form);
        createButton(addProduction, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function delProductionForm() {

    function delProduction() {
        return function () {
            var form = document.forms["proForm"]["selectPrin"];
            var id = form.value;

            if (id == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var productions = videosystem.productions;
                var production = productions.next();
                var aux = -1;

                while (production.done !== true) {
                    if (production.value.title === id) {
                        aux = production.value;
                    }
                    production = productions.next();
                }

                if (aux !== -1) {
                    videosystem.removeProduction(aux);
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new ProductionNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            event.preventDefault();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Eliminar producción"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "proForm");
        form.setAttribute("class", "form-horizontal");

        createSelect(form, "Productions", "selectPrin", "Lista de Producciones");
        createButton(delProduction, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function sesionForm() {
    return function () {

        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");

        createInput("Username", "user", form, "Usuario");

        var dv = document.createElement("div");
        dv.setAttribute("class", "form-group");

        var label = document.createElement("label");
        label.setAttribute("class", "control-label col-sm-2");
        label.appendChild(document.createTextNode("Password"));
        dv.appendChild(label);

        var dv1 = document.createElement("div");
        dv1.setAttribute("class", "col-sm-4");

        var input = document.createElement("input");
        input.setAttribute("type", "password");
        input.setAttribute("class", "form-control");
        input.setAttribute("name", "pass");

        dv1.appendChild(input);
        dv.appendChild(dv1);
        form.appendChild(dv);

        createButton(sesion, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
    }
}

function sesion() {
    return function () {
        var user = document.forms["catForm"]["user"].value;
        var pass = document.forms["catForm"]["pass"].value;
        var p = document.getElementById("result");

        if (user === "prueba" && pass === "prueba") {
            document.cookie = "username=prueba";
            p.setAttribute("style", "color:green");
            p.innerHTML = "Inicio de sesión correcto";
            window.location.href = 'http://localhost/xampp/FORMULARIOS';
        } else {
            p.setAttribute("style", "color:red");
            p.innerHTML = "Usuario o contraseña incorrectos.";
        }
    }
}

function closeSesion() {
    return function () {
        document.cookie = "username=; max-age=0";
        var p = document.getElementById("cerrado");
        p.setAttribute("style", "color:green");
        p.innerHTML = "Cerrado Correctamente";
        window.location.href = 'http://localhost/xampp/FORMULARIOS';
    }
}