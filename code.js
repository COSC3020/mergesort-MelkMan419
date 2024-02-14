function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }

const merge = (arr, leftStart, leftEnd, rightStart, rightEnd) => {
    let k = leftStart;
    let i = leftStart;
    let j = rightStart;

    while (i <= leftEnd && j <= rightEnd) {
        if (arr[i] <= arr[j]) {
            i++;
        } else {
            const temp = arr[j];
            for (let p = j - 1; p >= i; p--) {
                arr[p + 1] = arr[p];
            }
            arr[i] = temp;
            j++;
            i++;
            leftEnd++;
        }
    }

    while (j <= rightEnd) {
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
