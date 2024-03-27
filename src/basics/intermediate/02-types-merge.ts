type Union1 = 'a' | 'b' | 'c' | 'd';
type Union2 = 'a' | 'e' | 'c' | 'i';
type Union3 = Union1 | Union2; // all variables

type Union6 = Union1 & Union2; // a / c

type User = {
    readonly email: string,
    readonly login: string,
    password: string,
    }
    
type Person  = {
        readonly firstName: string,
        lastName: string,
        phone?: string,
        yearOfBirth?: number,
    }
    
type Employee = {
        contrsctStart: Date,
    } & User & Person;
    

type Developer = {
        skills: string[],
        level?: 'junior'| 'middle'| 'senior',
        phone: string,
        say(): void,
        code?: (arg: string) => void,
    
    }
    
    