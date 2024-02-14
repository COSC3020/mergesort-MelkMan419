function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }

const merge = (arr, leftStart, leftEnd, rightStart, rightEnd) => {
    const temp = arr.slice(leftStart, rightEnd + 1);
    let i = 0;
    let j = rightStart - leftStart;
    let k = leftStart;

    while (i < (rightStart - leftStart) && j <= rightEnd - leftStart) {
        if (temp[i] <= arr[j]) {
            arr[k++] = temp[i++];
        } else {
            arr[k++] = arr[j++];
        }
    }

    while (i < (rightStart - leftStart)) {
        arr[k++] = temp[i++];
    }

    while (j <= rightEnd - leftStart) {
        arr[k++] = arr[j++];
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
