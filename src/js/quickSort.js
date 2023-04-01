const quickSort = (array) => {
    if(array.length <= 1) return array;

    const pivot = array[0];
    const leftOfPivot = [];
    const rightOfPivot = [];

    for(let i = 1; i < array.length; i++) {
        let fontSizeOfPivot = Number(pivot.style.fontSize.toString().replace('px', ''));
        let fontSizeOfArray = Number(array[i].style.fontSize.toString().replace('px', ''));
        fontSizeOfPivot < fontSizeOfArray ? leftOfPivot.push(array[i]) : rightOfPivot.push(array[i])
    }

    const sortLeftOfPivot = quickSort(leftOfPivot);
    const sortRightOfPivot = quickSort(rightOfPivot);

    return [...sortLeftOfPivot, pivot, ...sortRightOfPivot];
}

export { quickSort }