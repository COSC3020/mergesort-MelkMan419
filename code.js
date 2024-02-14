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

    const mergeSize = 2;
    const n = array.length;
    
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
            const left = array.slice(leftStart, mid + 1);
            const right = array.slice(mid + 1, rightEnd + 1);
            const merged = merge(left, right);
            for (let i = 0; i < merged.length; i++) {
                array[leftStart + i] = merged[i];
            }
        }
    }

    return array;
}

module.exports = mergesort;
