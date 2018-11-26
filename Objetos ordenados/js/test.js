"use strict";

function test() {
    try {
        var p1 = new Person("Jesus", "Sánchez");
        var p2 = new Person("Azucena", "Vázquez");
        var p3 = new Person("Isabel", "García");
        var p4 = new Person("Beatriz", "García");
        var p5 = new Person("Isabel", "García");
        var p20 = new Person("Prueba", "Hola");

        var list = new List();

        console.log("Añadimos personas");
        list.add(p1);
        list.add(p2);
        list.add(p3);
        list.add(p3);
        list.add(p3);
        list.add(p3);
        list.add(p3);
        list.add(p4);
        list.add(p5);
        console.log(list.toString());
        
        console.log("La lista está vacía: " + list.isEmpty());
        console.log("La lista está llena " + list.isFull());
        console.log("Tamaño: " + list.size());
        console.log("Persona en index 1: " + list.getByIndex(1));

        console.log("La persona " + p2 + " está en la posición " + list.indexOf(p2));
        console.log("La persona p20 está en la posición " + list.indexOf(p20));
        //console.log("La persona hola está en la posición " + list.indexOf("hola"));
        console.log("Capacidad: " + list.capacity());
        /*console.log("Limpiamos");
         console.log(list.clear());
         console.log(list.toString());*/
        console.log("Primer elemento: " + list.firstElement());
        console.log("Último elemento: " + list.lastElement());
        console.log("Borramos el elemento 0");
        console.log("ELemento borrado: " + list.remove(0)); 
        console.log(list.toString());
        console.log("Borramos p3: " + list.removeElement(p3)); //Sigue Saliendo Isabel García, porque se borra p3, aun llamandose igual
        console.log("Borramos p20: " + list.removeElement(p20));
        //console.log("Borramos hola: " + list.removeElement("hola"));
        console.log(list.toString());
    } catch (err) {
        console.log(err.toString());
    }

}
window.onload = test;