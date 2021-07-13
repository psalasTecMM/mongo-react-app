export const toHeaderTitle = (str) => {
    return str
        .replace(/^_/g,'')
        .replace(/_/g,'-')
        .replace(/\b\w/g, l => l.toUpperCase())
}