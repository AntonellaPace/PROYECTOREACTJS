const products = [
    { 
        id: '1', 
        name: 'cama dos plazas', 
        price: 10000, 
        category: 'dormitorio', 
        img:' /public/imagenes/camadosplazas.jpg ', 
        stock: 25, 
        description:'Descripcion de cama dos plazas'
    },
    
    { id: '2', name: 'bajo mesada', price: 8000, category: 'cocina', img:' /public/imagenes/bajomesada.png  ', stock: 16, description:'Descripcion de bajo mesada para cocina'},
    { id: '3', name: 'mueble auxiliar de baño', price: 7000, category: 'baño', img:' /public/imagenes/muebleauxiliarbaño.jpg  ', stock: 10, description:'Descripcion de mueble auxiliar de baño'},
    { id: '4', name: 'mueble auxiliar de cocina', price: 6500, category: 'cocina', img:' /public/imagenes/muebleauxiliarcocina.jpg  ', stock: 10, description:'Descripcion de mueble auxiliar de cocina'},
    { id: '5', name: 'mueble bacha de baño', price: 6500, category: 'baño', img:' /public/imagenes/mueblebachabaño.jpg  ', stock: 10, description:'Descripcion de mueble para bacha de baño'},
    { id: '6', name: 'cama de una plaza', price: 6500, category: 'dormitorio', img:' /public/imagenes/camaunaplaza.jpg  ', stock: 10, description:'Descripcion de cama de una plaza'},
    { id: '7', name: 'mesa de comedor', price: 6500, category: 'comedor', img:' /public/imagenes/mesacomedor.jpg  ', stock: 10, description:'Descripcion de mesa de comedor'},
    { id: '4', name: 'barcito de comedor', price: 6500, category: 'comedor', img:' /public/imagenes/barcitocomedor.jpg  ', stock: 10, description:'Descripcion del barcito para comedor'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}