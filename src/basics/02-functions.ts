function sum(a: number , b: number): number {
    return a + b;
}
sum(2,3)

const sum2 = (a: number, b: number): number => a + b;
const sum3 = function (a: number, b: number): number {
    return a + b;
}

//функция завершится, но вернет ничего
function log(name: string, userId?: string): void {
console.log('Hello', name, 'with ID', userId || 'anonym');
}
log('Mike')
log('John', '345')

//функция не завершится
function crash(): never {
    throw new Error('crash')
}
function average(...nums: number[]) {
    const sum = nums.reduce((current, tottal) => current + tottal, 0 )
    return sum / nums.length;
    }

    function slice(str: string, start: number, end?: number): string {
        let newStr = '';
        let lastIndex: number;
        if(end) {
            lastIndex = end > str.length ? str.length : end;
        } else {
            lastIndex = str.length;
        }
        for(let i = start; i < lastIndex; i++) {
            newStr += str[i];
        }
        return newStr;
    }