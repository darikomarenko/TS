let word: string | null =  null;
const number = 10;
if (number > 5) {
    word = 'abc'
}
word = 'abc'
console.log(word!.toUpperCase())

function printName(name?:string) {
    const fullName: string = name!;
}

interface PersonOne {
    name: string,
    age: number,
    sex: 'female' | 'male',
}

function printName2(person?:PersonOne) {
    console.log(person!.name)
}