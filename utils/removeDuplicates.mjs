export default function (array) {
    let s = new Set(array);
    let it = s.values();
    return Array.from(it);
}