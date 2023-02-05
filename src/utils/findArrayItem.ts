export function findArrayItem(array: [], func: any) {
    let item = array.find(func)
    if (item === undefined) {
        return
    }
    return item
}
