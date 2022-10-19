export interface IProductBase {
    id: number;
    nombre: string;
}

export interface IProduct extends IProductBase {
    foto: string;
}

export interface IProductCatalog {
    producto_id: number;
    proveedor_id: number;
    precio: number;
    cantidad: number;
    presentacion: string;
    categoria_id: number;
}