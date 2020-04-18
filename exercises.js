

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

/* Desarrollar la función addToCatalog(name, stock), que recibe un nombre (texto) y un stock (cantidad), agregue ambos datos como un único objeto al array catalog. Luego tiene que mostrar por consola la colección. 
 */
function addToCatalog(_name, _stock) {
    // const container = {name: _name, stock: _stock}
    catalog.push({name: _name, stock: _stock})
    console.log (catalog)

}

/* TEST sample call */
addToCatalog('honey', 20) 
addToCatalog('honeyvere', 20)


