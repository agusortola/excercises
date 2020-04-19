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
function addToCatalog(_name, _stock) {
    // const box = {name: _name, stock: _stock}
    catalog.push({name: _name, stock: _stock})
    console.log (catalog)

}

/* EX1 test */
//addToCatalog('honey', 20) 
//addToCatalog('honeyvere', 25)

//------------------- END EX 1 --------------------------------

//------------------- EX 2 --------------------------------

/* Ahora el cliente empieza a mandar box armadas, siempre de a dos a la vez. Desarrollar la función addTwoContainersToCatalog() */

function addTwoContainersToCatalog(container) {
    catalog.push(container[0], container[1])
}

/* EX2 test */
const containers1 = [{name: 'menta', stock: 4}, {name: 'fruit', stock: 9}]
const containers2 = [ {name: 'pera', stock: 7}, {name: 'chocolate', stock: 2}]

addTwoContainersToCatalog(containers1)
addTwoContainersToCatalog(containers2)

console.log(catalog)
//------------------- EX 2 --------------------------------
