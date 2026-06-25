export const formatCategory = (str: string | undefined) => {
    if(str)
     return str
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}