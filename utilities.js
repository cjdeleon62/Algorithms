// The different types of Algorithms we can use to sort an array.
var sortTypes = {
	insertion: 'Insertion Sort',
	selection: 'Selection Sort',
};

/**
 *Prints out the array before and after it was sorted.
 *
 * @param {Number[]} arr The array to sort
 * @param {Boolean} isSorted True when the array is already sorted
 * @param {String} type The type of algorithm to test
 */
function printArr(arr, isSorted, type) {
	console.log(isSorted ? 'Here is your sorted Arr (' + sortTypes[type] + '):' : 'Here is your unsorted Arr:');
	var printStr = '';
	for (var i = 0; i < arr.length; i++) {
		if (i >= arr.length - 1) {
			printStr += arr[i];
		} else {
			printStr = printStr + arr[i] + ', ';
		}
	}

	console.log(printStr);
}

/**
 * Swaps two elements in the array at given indices.
 *
 * @param {Number[]} arr The array whose elements need swapping
 * @param {Number} index1 The index of one of the elements to swap
 * @param {Number} index2 The index of one of the elements to swap
 */
function swap(arr, index1, index2) {
	var key = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = key;
}

module.exports = {
	printArr,
	swap,
};
