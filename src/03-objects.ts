interface Car {
    wheels: number,
    brand: string,
    type: string,
    isNew?: boolean,

    [key: string]: unknown;
}

const car: Car = {
    wheels: 4,
    brand: 'BMW',
    type: 'sedan',
}


car.brand = 'ggg';
car['go'] = true;