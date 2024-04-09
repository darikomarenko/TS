//утилиты  - ReturnType

export{};
//убери какой-то юнион
type TO = Exclude<'a'|'b'|'c', 'a'>;

type Status = 'success'| 'clientError'| 201 | 404
type NumericStatuses = Exclude<Status, string>

//извлеки
type TOO = Extract<'a'|'b'|'c', 'a'>;

interface Person {
    age: number,
    firstName: string,
    lastName: string,
    sex: "male" | 'female',
    country: string,
    education: string,
    skills: string[],
}

type PersonNames = Extract<keyof Person, 'firstName' | 'lastName' | 'fullName'>

type TO1 = NonNullable<string[]|number|undefined>