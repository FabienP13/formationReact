export function activeClassIf(condition, className) {
    if(!condition) {
        return `${className} text-gray-300`;
    }
    if(!className) {
        return 'rounded-md px-3 py-2 text-sm font-medium';
    }

    return `${className} text-white bg-gray-950/50 `
}