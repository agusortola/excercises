//------------------- COMMON DATA --------------------------------
const catalog = [
    {
        name: 'monkey fart',
        stock: 5
    },
    {
        name: 'tribeca',
        stock: 10
    },
    {
        name: 'tanaco',
        stock: 2
    }
]

//------------------- END COMMON DATA -------------------------------- 

//------------------- EX 1 --------------------------------

/* Desarrollar la función addToCatalog(name, stock), que recibe un nombre (texto) y un stock (cantidad), agregue ambos datos como un único objeto al array catalog. Luego tiene que mostrar por consola la colección. 
 */
function addBoxToCatalog(_name, _stock) {
    // const box = {name: _name, stock: _stock}
    catalog.push({name: _name, stock: _stock})
    console.log (catalog)

}

/* EX1 test */
//addBoxToCatalog('honey', 20) 
//addBoxToCatalog('honeyvere', 25)

//------------------- END EX 1 --------------------------------

//------------------- EX 2 --------------------------------

/* Ahora el cliente empieza a mandar box armadas, siempre de a dos a la vez. Desarrollar la función addTwoContainersToCatalog() */

function addTwoBoxesToCatalog(container) {
    catalog.push(container[0], container[1])
}

/* EX2 test 
const container1 = [{name: 'menta', stock: 4}, {name: 'fruit', stock: 9}]
const container2 = [ {name: 'pera', stock: 7}, {name: 'chocolate', stock: 2}]

addTwoBoxesToCatalog(container1)
addTwoBoxesToCatalog(container2)

console.log(catalog)*/
//------------------- END EX 2 --------------------------------

//------------------- EX 3 ------------------------------------

/*Ahora el cliente manda containers de n boxes, pueden tener una, dos, tres, o más. Desarrollar
la funcion addNBoxesToCatalog() */
function addNBoxesToCatalog(container){
    for(let i = 0; i < container.length; i++) {
        catalog.push(container[i])
    }      
}

function addNBoxesToCatalogALT(container) {
    container.forEach(box => catalog.push(box))
}
 
/* EX3 test */
const container1 = [{name: 'menta', stock: 4}, {name: 'fruit', stock: 7}, {name: 'pera', stock: 7}]
const container2 = [{name: 'maní', stock: 2}]
const container3 = []
const container4 = [{name: 'multifru', stock: 13}, {name: 'vereConAcor', stock: 2}, {name: 'nutella', stock: 4}, {name: 'pija', stock: 9}]

addNBoxesToCatalogALT(container1)
addNBoxesToCatalogALT(container2)
addNBoxesToCatalogALT(container3)
addNBoxesToCatalogALT(container4)
console.log(catalog)

//------------------- END EX 3 --------------------------------

//------------------- EX 4 ------------------------------------
/* Se requiere una función que indique si existe un artículo en el catálogo. Se llama checkProductInCatalog(name) y recibe el nombre de un producto. En caso de tenerlo muestra "Producto en catálogo" por consola, si no lo tiene muestra "Producto inexistente". No tiene que tener en cuenta si hay stock o no. Además, si el nombre llega vacío, debe devolver el mensaje "Debe ingresar un nombre de producto"*/

// Declarar la función

/* EX4 test */

checkProductInCatalog('tribeca')
checkProductInCatalog('mani')
checkProductInCatalog('')

//------------------- END EX 4 ------------------------------------