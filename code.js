function mergesort(array) {
    const merge = (start, mid, end) => {
        let start2 = mid + 1;
    
        if (array[mid] <= array[start2]) {
            return;
        }
    
        while (start <= mid && start2 <= end) {
            if (array[start] <= array[start2]) {
                start++;
            } else {
                let value = array[start2];
                let index = start2;
    
                while (index !== start) {
                    array[index] = array[index - 1];
                    index--;
                }
    
                array[start] = value;
    
                start++;
                mid++;
                start2++;
            }
        }
    };

    const n = array.length;
    for (let currSize = 1; currSize <= n - 1; currSize = 2 * currSize) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
            let mid = Math.min(leftStart + currSize - 1, n - 1);
            let rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
    
            merge(leftStart, mid, rightEnd);
        }
    }
    
    return array;
}

module.exports = mergesort;
