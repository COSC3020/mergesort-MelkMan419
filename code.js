function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }

const merge = (arr, leftStart, leftEnd, rightStart, rightEnd) => {
    const temp = [];
    let i = leftStart;
    let j = rightStart;

    while (i <= leftEnd && j <= rightEnd) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i++]);
        } else {
            temp.push(arr[j++]);
        }
    }

    while (i <= leftEnd) {
        temp.push(arr[i++]);
    }

    while (j <= rightEnd) {
        temp.push(arr[j++]);
    }

    for (let k = leftStart; k <= rightEnd; k++) {
        arr[k] = temp[k - leftStart];
    }
};




    const mergePass = (arr, size) => {
        for (let i = 0; i < arr.length; i += 2 * size) {
            const left = arr.slice(i, i + size);
            const right = arr.slice(i + size, i + 2 * size);
            const merged = merge(left, right);
            arr.splice(i, 2 * size, ...merged);
        }
    };

    for (let size = 1; size < array.length; size *= 2) {
        mergePass(array, size);
    }

    return array;
}

module.exports = mergesort;
