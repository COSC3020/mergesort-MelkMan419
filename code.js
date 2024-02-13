function mergesort(array) {
    if (array.length <= 1) {
        return array;
    }

    const merge = (left, right) => {
        const result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
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
