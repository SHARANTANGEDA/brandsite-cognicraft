export default function uniqueValuesFromListOfObjects(list, key) {
    return Array.from(new Set(list.flatMap(item => Array.isArray(item[key]) ? item[key] : [item[key]])));
}
