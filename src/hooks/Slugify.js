export const slugify = text => {
    return text
        .toLowerCase()
        .replace(/ą/g, 'a')
        .replace(/ć/g, 'c')
        .replace(/ę/g, 'e')
        .replace(/ł/g, 'l')
        .replace(/ń/g, 'n')
        .replace(/ó/g, 'o')
        .replace(/ś/g, 's')
        .replace(/[ź|ż]/g, 'z')
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}