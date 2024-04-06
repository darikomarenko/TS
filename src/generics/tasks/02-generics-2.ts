export function createMap<T>(list: T[]) {

    return function<U>(cb: (x: T)=> U): U[] {
  
      const result = [];
  
      for (let el of list) {
  
        result.push(cb(el))
  
      }
  
      return result;
  
    }
  
  }