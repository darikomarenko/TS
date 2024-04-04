function head(value: string) : string;
function head(value: readonly[]): undefined;
function head<T>(value: readonly T[]) : T;
function head(value: any) : any {
    return value[0];
}

interface ModelData<T> {
    title: string,
    value: T,
}

const obj1: ModelData<number> = {
    title: 'dsd',
    value: 12,
}

const headOne = <T>(value: T[]): T => value[0]