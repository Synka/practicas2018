"use strict"

function removeChildsElement(element) {

    for (var i = element.children.length - 1; i > -1; i--) {
        element.removeChild(element.children[i]);
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

function createInput(labelIn, inputName, form) {
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

    dv1.appendChild(input);
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

    var a = document.createElement("a");
    a.appendChild(document.createTextNode("Enviar"));
    a.setAttribute("class", "btn btn-default");
    a.addEventListener("click", func());

    dv1.appendChild(a);
    dv.appendChild(dv1);
    form.appendChild(dv);
}

function createSelect(form, type, name, lab) {
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

            if (name == "" || description == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var cat = new Category(name);
                cat.description = description;
                videosystem.addCategory(cat);
                resultForm(true);
            }
            document.forms["catForm"].reset();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Create category"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");

        createInput("Name", "name", form);
        createInput("Description", "description", form);
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
            var id = form.value;
            var name = document.forms["catForm"]["name"].value;
            var description = document.forms["catForm"]["description"].value;

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
                    aux.description = description;
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new CategoryNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].text = name;
            document.forms["catForm"].reset();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Update category"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");

        createSelect(form, "Categories", "selectPrin", "Lista de Categorias");
        createInput("Name", "name", form);
        createInput("Description", "description", form);
        createButton(updCategory, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Delete category"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "catForm");
        form.setAttribute("class", "form-horizontal");

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

            if (name == "" || lastname == "" || born == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var act = new Person(name, lastname, born);
                act.picture = "images/default.jpg";
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Create actor"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "actForm");
        form.setAttribute("class", "form-horizontal");

        createInput("Name", "name", form);
        createInput("Lastname", "lastname", form);
        createInput("Born", "born", form);
        createTable("Productions", "productions", form);
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
            var id = form.value;
            var name = document.forms["actForm"]["name"].value;
            var lastname = document.forms["actForm"]["lastname"].value;
            var born = document.forms["actForm"]["born"].value;

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
            document.forms["actForm"].reset();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Update actor"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "actForm");
        form.setAttribute("class", "form-horizontal");

        createSelect(form, "Actors", "selectPrin", "Lista de Actores");
        createInput("Name", "name", form);
        createInput("Lastname", "lastname", form);
        createInput("Born", "born", form);
        createButton(updActor, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Delete actor"));
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

            if (name == "" || lastname == "" || born == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var dir = new Person(name, lastname, born);
                dir.picture = "images/default.jpg";
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Create director"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "dirForm");
        form.setAttribute("class", "form-horizontal");

        createInput("Name", "name", form);
        createInput("Lastname", "lastname", form);
        createInput("Born", "born", form);
        createTable("Productions", "productions", form);
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
            var id = form.value;
            var name = document.forms["dirForm"]["name"].value;
            var lastname = document.forms["dirForm"]["lastname"].value;
            var born = document.forms["dirForm"]["born"].value;

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
            document.forms["dirForm"].reset();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Update director"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "dirForm");
        form.setAttribute("class", "form-horizontal");

        createSelect(form, "Directors", "selectPrin", "Lista de Directores");
        createInput("Name", "name", form);
        createInput("Lastname", "lastname", form);
        createInput("Born", "born", form);
        createButton(updDirector, form);

        var p = document.createElement("p");
        p.setAttribute("id", "result");
        p.setAttribute("class", "h2");
        form.appendChild(p);

        divForm.appendChild(form);
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Delete director"));
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

            var res = new Resources(duration, link);

            if (duration == "" || link == "") {
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
                    aux.resource = res;
                    resultForm(true);
                } else {
                    resultForm(false);
                    throw new ProductionNotExistsVideoSystemException();
                }
            }
            form.options[form.options.selectedIndex].remove();
            document.forms["resForm"].reset();
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Add resource"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("name", "resForm");
        form.setAttribute("class", "form-horizontal");

        hasNotResource(form);
        createInput("Duration", "duration", form);
        createInput("Link", "link", form);
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Delete resource"));
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

            var select = document.forms["proForm"]["selectPrin"];
            var id = select.value;

            if (title == "" || publication == "") {
                resultForm(false);
                throw new EmptyValueException();
            } else {
                var pro = new Movie(title, publication);
                pro.image = "images/pDefault.jpg";
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Create production"));
        divForm.appendChild(h2);

        var form = document.createElement("form");
        form.setAttribute("id", "form");
        form.setAttribute("name", "proForm");
        form.setAttribute("class", "form-horizontal");

        createInput("Title", "title", form);
        createInput("Publication", "publication", form);
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
        }
    }

    return function () {
        var divForm = document.getElementById("sct1");

        removeChildsElement(divForm);

        var h2 = document.createElement("h2");
        h2.appendChild(document.createTextNode("Delete production"));
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

        createInput("Username", "user", form);

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