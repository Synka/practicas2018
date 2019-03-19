"use strict"

function startDB() {

    var request = indexedDB.open("video", 1);
    var db;

    request.onerror = function (e) {
        alert('Error cargando la base de datos');
    };

    request.onsuccess = function (event) {
        alert("request.onsuccess");
        db = request.result;

        db.onerror = function (event) {
            // Generic error handler for all errors targeted at this database's
            // requests!
            alert("Database error: " + event.target.errorCode);
        };
    };
    request.onupgradeneeded = function (e) {
        db = e.target.result;
        createObjects(videosystem);
        var objectStore = db.createObjectStore("categories");
        objectStore = db.createObjectStore("actors");
        objectStore = db.createObjectStore("directors");
        objectStore = db.createObjectStore("productions");

        objectStore.transaction.oncomplete = function (event) {
            var categories = videosystem.categories;
            var category = categories.next();
            var categoryObjectStore = db.transaction("categories", "readwrite").objectStore("categories");
            while (category.done !== true) {
                categoryObjectStore.add(category.value.getObject(), category.value.name);
                sacarProd(category.value, "category");
                category = categories.next();
            }

            var actors = videosystem.actors;
            var actor = actors.next();
            var actorObjectStore = db.transaction("actors", "readwrite").objectStore("actors");
            while (actor.done !== true) {
                actorObjectStore.add(actor.value.getObject(), actor.value.name + " " + actor.value.lastname);
                sacarProd(actor.value, "actor");
                actor = actors.next();
            }

            var directors = videosystem.directors;
            var director = directors.next();
            var directorObjectStore = db.transaction("directors", "readwrite").objectStore("directors");
            while (director.done !== true) {
                directorObjectStore.add(director.value.getObject(), director.value.name + " " + director.value.lastname);
                sacarProd(director.value, "director");
                director = directors.next();
            }

            var productions = videosystem.productions;
            var production = productions.next();
            var productionObjectStore = db.transaction("productions", "readwrite").objectStore("productions");
            while (production.done !== true) {
                productionObjectStore.add(production.value.getObject(), production.value.title);
                production = productions.next();
            }
        }
        alert("conectar");

    };


};

function addDB(obj, store, key, productions) {
    var db;
    var request = indexedDB.open("video", 1);

    request.onerror = function (event) {
        alert("Fallo en el addDB");
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        db.onerror = function (event) {
            // Generic error handler for all errors targeted at this database's
            // requests!
            alert("Database error: " + event.target.error);
        };


        var transaction = db.transaction([store], "readwrite");
        var objectStore = transaction.objectStore(store);
        var request2 = objectStore.add(obj.getObject(), key);
        request2.onsuccess = function (event) {
            alert(event.target.result);
        };
        var transaction2 = db.transaction([store], "readwrite");
        var objectStore2 = transaction2.objectStore(store);
        var request3 = objectStore2.get(key);
        //console.log(objectStore.getAll());
        request3.onerror = function (event) {
            alert("Error en updDB");
        };
        request3.onsuccess = function (event) {
            // Cogemos el valor antiguo
            var data = request3.result;
            //console.log(data);

            if (store == "actors") {
                for (var i in productions) {
                    var obj = { title: productions[i].title, publication: productions[i].publication, image: productions[i].image };
                    data.productions.push(obj);
                }
                var requestUpdate = objectStore2.put(data, data.name + " " + data.lastname);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            }

            if (store == "directors") {
                for (var i in productions) {
                    var obj = { title: productions[i].title, publication: productions[i].publication, image: productions[i].image };
                    data.productions.push(obj);
                }
                var requestUpdate = objectStore2.put(data, data.name + " " + data.lastname);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            }
        };
    };
}

function delDB(store, key) {
    var db;
    var request = indexedDB.open("video", 1);

    request.onerror = function (event) {
        alert("Fallo en el delDB");
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        db.onerror = function (event) {
            alert("Database error: " + event.target.error);
        };

        var transaction = db.transaction([store], "readwrite");
        var objectStore = transaction.objectStore(store);
        var request2 = objectStore.delete(key);
        request2.onsuccess = function (event) {
            //
        };
    };
}

function updDB(type, store, key, productions) {
    var db;
    var request = indexedDB.open("video", 1);

    request.onerror = function (event) {
        alert("Fallo en el updDB");
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        db.onerror = function (event) {
            alert("Database error: " + event.target.error);
        };

        var transaction = db.transaction([store], "readwrite");
        var objectStore = transaction.objectStore(store);
        var request2 = objectStore.get(key);
        //console.log(objectStore.getAll());
        request2.onerror = function (event) {
            alert("Error en updDB");
        };
        request2.onsuccess = function (event) {
            // Cogemos el valor antiguo
            var data = request2.result;
            //console.log(data);

            if (type == "category") {
                // Actualizamos el valor 
                data.name = document.forms["catForm"]["name"].value;
                data.description = document.forms["catForm"]["description"].value;
                for (var i in productions) {
                    var obj = { title: productions[i].title, publication: productions[i].publication, image: productions[i].image };
                    data.productions.push(obj);
                }

                var requestUpdate = objectStore.put(data, data.name);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            }

            if (type == "actor") {
                // Actualizamos el valor 
                data.name = document.forms["actForm"]["name"].value;
                data.lastname = document.forms["actForm"]["lastname"].value;
                data.born = document.forms["actForm"]["born"].value;
                for (var i in productions) {
                    console.log("hola");
                    var obj = { title: productions[i].title, publication: productions[i].publication, image: productions[i].image };
                    data.productions.push(obj);
                }

                var requestUpdate = objectStore.put(data, data.name + " " + data.lastname);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            }

            if (type == "director") {
                // Actualizamos el valor 
                data.name = document.forms["dirForm"]["name"].value;
                data.lastname = document.forms["dirForm"]["lastname"].value;
                data.born = document.forms["dirForm"]["born"].value;
                for (var i in productions) {
                    var obj = { title: productions[i].title, publication: productions[i].publication, image: productions[i].image };
                    data.productions.push(obj);
                }

                var requestUpdate = objectStore.put(data, data.name + " " + data.lastname);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            }
        };
    };
}

function volcarDB() {
    var db;
    var request = indexedDB.open("video", 1);

    request.onerror = function (event) {
        alert("Fallo en el volcarDB");
    };

    request.onsuccess = function (event) {
        db = event.target.result;
        db.onerror = function (event) {
            alert("Database error: " + event.target.error);
        };

        var transaction = db.transaction(["categories"], "readwrite");
        var objectStore = transaction.objectStore("categories");
        var request2 = objectStore.getAll();
        request2.onerror = function (event) {
            alert("Error en volcarDB");
        };
        request2.onsuccess = function (event) {
            var data = request2.result;
            for (var i in data) {
                var cats = videosystem.categories;
                var category = cats.next();
                var found = false;

                while (category.done !== true && found != true) {
                    if (category.value.name === data[i].name) {
                        found = true;
                    }
                    category = cats.next();
                }
                if (found != true) {
                    var cat = new Category(data[i].name, data[i].description);
                    cat.productions = data[i].productions;
                    videosystem.addCategory(cat);
                    var prods = cat.productions;
                    for (var i in prods){
                        var pro = new Movie (prods[i].title, prods[i].publication);
                        pro.image = prods[i].image;
                        videosystem.assignCategory(cat, pro);
                    }
                }
            }
        }

        transaction = db.transaction(["actors"], "readwrite");
        objectStore = transaction.objectStore("actors");
        var request3 = objectStore.getAll();
        request3.onerror = function (event) {
            alert("Error en volcarDB");
        };
        request3.onsuccess = function (event) {
            var data = request3.result;
            for (var i in data) {
                var acts = videosystem.actors;
                var actor = acts.next();
                var found = false;

                while (actor.done !== true && found != true) {
                    if (actor.value.name === data[i].name) {
                        found = true;
                    }
                    actor = acts.next();
                }
                if (found != true) {
                    var act = new Person(data[i].name, data[i].lastname, data[i].born);
                    act.picture = data[i].picture;
                    act.productions = data[i].productions;
                    videosystem.addActor(act);
                    var prods = act.productions;
                    for (var i in prods){
                        var pro = new Movie (prods[i].title, prods[i].publication);
                        pro.image = prods[i].image;
                        videosystem.assignActor(act, pro);
                    }
                }
            }
        }

        transaction = db.transaction(["directors"], "readwrite");
        objectStore = transaction.objectStore("directors");
        var request4 = objectStore.getAll();
        request4.onerror = function (event) {
            alert("Error en volcarDB");
        };
        request4.onsuccess = function (event) {
            var data = request4.result;
            for (var i in data) {
                var dirs = videosystem.directors;
                var director = dirs.next();
                var found = false;

                while (director.done !== true && found != true) {
                    if (director.value.name === data[i].name) {
                        found = true;
                    }
                    director = dirs.next();
                }
                if (found != true) {
                    var dir = new Person(data[i].name, data[i].lastname, data[i].born);
                    dir.picture = data[i].picture;
                    dir.productions = data[i].productions;
                    videosystem.addDirector(dir);
                    var prods = dir.productions;
                    for (var i in prods){
                        var pro = new Movie (prods[i].title, prods[i].publication);
                        pro.image = prods[i].image;
                        videosystem.assignDirector(dir, pro);
                    }
                }
            }
        }

        transaction = db.transaction(["productions"], "readwrite");
        objectStore = transaction.objectStore("productions");
        var request5 = objectStore.getAll();
        request5.onerror = function (event) {
            alert("Error en volcarDB");
        };
        request5.onsuccess = function (event) {
            var data = request5.result;
            for (var i in data) {
                var prods = videosystem.productions;
                var production = prods.next();
                var found = false;

                while (production.done !== true && found != true) {
                    if (production.value.title === data[i].title) {
                        found = true;
                    }
                    production = prods.next();
                }
                if (found != true) {
                    var pro = new Movie(data[i].title, data[i].publication);
                    pro.image = data[i].image;
                    videosystem.addProduction(pro);
                }
            }
        }
    }
}

function sacarProd(ob, type) {
    if (type == "actor") {
        var productions = videosystem.getProductionsActor(ob);
        var production = productions.next();
        var arrProductions = [];

        while (production.done !== true) {
            arrProductions.push(production.value);
            production = productions.next();
        }

        var db;
        var request = indexedDB.open("video", 1);

        request.onerror = function (event) {
            alert("Fallo en el updDB");
        };

        request.onsuccess = function (event) {
            db = event.target.result;
            db.onerror = function (event) {
                alert("Database error: " + event.target.error);
            };

            var transaction = db.transaction(["actors"], "readwrite");
            var objectStore = transaction.objectStore("actors");
            var request2 = objectStore.get(ob.name + " " + ob.lastname);
            request2.onerror = function (event) {
                alert("Error en updDB");
            };
            request2.onsuccess = function (event) {

                var data = request2.result;
                data.name = ob.name;
                data.lastname = ob.lastname;
                data.born = ob.born;
                for (var i in arrProductions) {
                    var objP = { title: arrProductions[i].title, publication: arrProductions[i].publication, image: arrProductions[i].image };
                    data.productions.push(objP);
                }

                var requestUpdate = objectStore.put(data, data.name + " " + data.lastname);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            };
        };
    }

    if (type == "director") {
        var productions = videosystem.getProductionsDirector(ob);
        var production = productions.next();
        var arrProductions = [];

        while (production.done !== true) {
            arrProductions.push(production.value);
            production = productions.next();
        }

        var db;
        var request = indexedDB.open("video", 1);

        request.onerror = function (event) {
            alert("Fallo en el updDB");
        };

        request.onsuccess = function (event) {
            db = event.target.result;
            db.onerror = function (event) {
                alert("Database error: " + event.target.error);
            };

            var transaction = db.transaction(["directors"], "readwrite");
            var objectStore = transaction.objectStore("directors");
            var request2 = objectStore.get(ob.name + " " + ob.lastname);
            request2.onerror = function (event) {
                alert("Error en updDB");
            };
            request2.onsuccess = function (event) {
                var data = request2.result;
                // Actualizamos el valor 
                data.name = ob.name;
                data.lastname = ob.lastname;
                data.born = ob.born;
                for (var i in arrProductions) {
                    var objP = { title: arrProductions[i].title, publication: arrProductions[i].publication, image: arrProductions[i].image };
                    data.productions.push(objP);
                }

                var requestUpdate = objectStore.put(data, data.name + " " + data.lastname);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            };
        };
    }
    if (type == "category") {
        var productions = videosystem.getProductionsCategory(ob);
        var production = productions.next();
        var arrProductions = [];

        while (production.done !== true) {
            arrProductions.push(production.value);
            production = productions.next();
        }

        var db;
        var request = indexedDB.open("video", 1);

        request.onerror = function (event) {
            alert("Fallo en el updDB");
        };

        request.onsuccess = function (event) {
            db = event.target.result;
            db.onerror = function (event) {
                alert("Database error: " + event.target.error);
            };

            var transaction = db.transaction(["categories"], "readwrite");
            var objectStore = transaction.objectStore("categories");
            var request2 = objectStore.get(ob.name);
            request2.onerror = function (event) {
                alert("Error en updDB");
            };
            request2.onsuccess = function (event) {
                var data = request2.result;
                // Actualizamos el valor 
                data.name = ob.name;
                data.description = ob.description;
                for (var i in arrProductions) {
                    var objP = { title: arrProductions[i].title, publication: arrProductions[i].publication, image: arrProductions[i].image };
                    data.productions.push(objP);
                }

                var requestUpdate = objectStore.put(data, data.name);
                requestUpdate.onerror = function (event) {
                    // Do something with the error
                };
                requestUpdate.onsuccess = function (event) {
                    // Success - the data is updated!
                };
            };
        };
    }
}