class Nodo {
    constructor(nombre, valorDestino, hijo) {
        this.nombre = nombre;
        this.valorDestino = valorDestino;
        this.hijo = hijo;
    }
}

arbolin = new Nodo("A", 7, new Array([new Nodo("B", 6, new Array([new Nodo("D", 3, null)])), new Nodo("C", 4, null)]));


function busqueda(inicio, destino, arbol) {
    //busca el nodo de incio en el array
    //mira los hijos de incio arbol.hijo 
    //si el hijo es igual a null es una hoja
    //si tiene varios hijos y uno es null ese ya lo visito
    //el menor valor a destino y sigue por ahi
    //let recorrido = new Array(); 
    //recorrido.push(i.nombre) <- guadra el recorrido en un array
    let recorrido = new Array();
    let valor = 0;
    arbol.forEach(i => {
        if (i.nombre == inicio) {
           recorrido.push(i.nombre);
           if(arbol.hijos != null){
            valor = arbol.valorDestino;
            recorrido.push(i.nombre); 
           }else{
            if(i.nombre== destino){
                recorrido.push(i.nombre);
            } 
            }   
        }
    });
    return recorrido;
}


/**
 * if (arbol.hijo != null) {
                recorrido.push(i.nombre);
            } else {
                if (arbol.hijo == null || inicio.nombre == destino) {
                    recorrido.push(i.nombre);
                }
            }
 */