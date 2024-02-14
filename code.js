const merge = (arr, leftStart, leftEnd, rightStart, rightEnd) => {
    const temp = [];
    let i = leftStart;
    let j = rightStart;

    while (i <= leftEnd && j <= rightEnd) {
        if (arr[i] <= arr[j]) {
            temp.push(arr[i]);
            i++;
        } else {
            temp.push(arr[j]);
            j++;
        }
    }

    while (i <= leftEnd) {
        temp.push(arr[i]);
        i++;
    }

    while (j <= rightEnd) {
        temp.push(arr[j]);
        j++;
    }

    for (let k = 0; k < temp.length; k++) {
        arr[leftStart + k] = temp[k];
    }
};

const mergesort = (arr) => {
    const mergePass = (arr, size) => {
        for (let i = 0; i < arr.length; i += 2 * size) {
            const leftStart = i;
            const leftEnd = Math.min(i + size - 1, arr.length - 1);
            const rightStart = i + size;
            const rightEnd = Math.min(i + 2 * size - 1, arr.length - 1);
            merge(arr, leftStart, leftEnd, rightStart, rightEnd);
        }
    };

    for (let size = 1; size < arr.length; size *= 2) {
        mergePass(arr, size);
    }

    return arr;
};

module.exports = mergesort;
