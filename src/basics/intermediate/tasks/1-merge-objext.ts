type Product = {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}

type Vehicle = {
    wheels: number,
    year: Date,
    brand: string
}

type CarType = {
    type: string,
    model: string
} & Product & Vehicle

interface IProduct {
    price: number,
    isNew?: boolean,
    isSale?: boolean,
    title: string,
}

interface IVehicle {
    wheels: number,
    year: Date,
    brand: string,
}

interface ICarType extends IProduct, IVehicle {
    type: string,
    model: string
}