const products = [ 
    {id:"1", nombre: "Castañas de Cajú", precio: 500,  img: "./img/castañas.jpg", idCat:"2"},
    {id:"2", nombre: "Dulce de leche - vegano", precio: 700, img: "./img/dulce-de-leche-felices-lasvacas.png", idCat:"3"},
    {id:"3", nombre: "Nugget de pollo", precio: 620,  img: "./img/nuggets-pollo-feliceslasvacas.jpg", idCat:"3"},
    {id:"4", nombre: "Yogurt Quimya", precio: 250,  img: "./img/quimya.jpg", idCat:"3"}
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products);
        }, 100)
    })
}

 export const getUnProducto = (id) => {
 return new Promise(resolve => {
       setTimeout ( () => {
           const producto = products.find(prod => prod.id === id);
            resolve(producto);
       }, 100)
    })
 }

 export const getProductosPorCategoria =(idCategoria) => {
    return new Promise( resolve => {
        setTimeout (()=> {
         const productosCategoria = products.filter(prod => prod.idCat === idCategoria);   
        resolve(productosCategoria);
        },100)
    })
 }