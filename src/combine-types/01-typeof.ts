import { average } from '../basics/02-functions'
let str = 'Hello'
 
type x = typeof str;
type fn = typeof average;
const max: fn = (...numbers) => Math.max(...numbers)

type retrrnFn = ReturnType<typeof average>