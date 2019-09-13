// Add your functions here
function map(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i]));
    };
    return newArr;
};

function reduce(arr, fn, startVal) {
    let reduction = (!!startVal) ? (startVal) : (arr[0]);
    let i = (!!startVal) ? 0 : 1;
    for (i; i < arr.length; i++) {
        reduction = fn(arr[i], reduction);
    };
    return reduction;
};
