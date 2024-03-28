type NestedNumbers = number | NestedNumbers[];
const nums: NestedNumbers = [1,2,3,4]
nums.push(1)

// JSON

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue};
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(arg: JSONValue) {

}

isJSON('hi')
isJSON(1)
isJSON([])
isJSON({a: [123], v: {x:1}})

