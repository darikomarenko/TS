function len<T extends {length: number}>(arg: T) {
    return arg.length;
}
len('abc')
len(['abc'])
//len(123)
//len(true)
const obj3 = {a: 1, length:1}
len(obj3)

//object