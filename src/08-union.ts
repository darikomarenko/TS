type Status = 'ok' | 'loading' | 'error';

const f: Status = 'loading';

function printId(id: number | string): void {
    if (typeof id === 'string')
    console.log(id.toUpperCase())
else
console.log(id)
}

function welcome(person: [string, string] | string): number | string {
    if(Array.isArray(person)) {
        console.log('Hello', person.join('  '))
        return 1
    }
    else {
        console.log('Hello', person)
        return person;
    }
}

type Level = 'junior' | 'middle' | 'senior';

interface Developer {
    login: string,
    skills: string[],
    level: Level,
}

function gradeDeveloper(user: { level: Level}, newLevel: Level) {
user.level  = newLevel;
}

const dev1: Developer = {
level: 'junior',
login: 'mike',
skills: ['html', 'scss']
}

gradeDeveloper(dev1, 'middle')