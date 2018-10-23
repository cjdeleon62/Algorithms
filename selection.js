var { printArr, swap } = require('./utilities');
var { testArrays } = require('./test');

var type = 'selection';

/**
 * Selection Sort
 * Iterates through the array and compares each element to every element after it.
 * If it finds an element that is less than the selected element, keep track of the index
 * and make it swap it with the selected element once we are done with the inner for loop.
 * @param {Number[]} arr The array to sort.
 */
function selectionSort(arr) {
	let minIndex;
	// Running time: O(n)
	for (var i = 0; i < arr.length; i++) {

		minIndex  = i;
		// Running time: O(n)
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// Running time: O(1)
		if (arr[minIndex] < arr[i]) {
			swap(arr, minIndex, i);
		}
	}
}

// Total Running Time: O(n^2) Worst Case.

printArr(testArrays.long, false, type);
selectionSort(testArrays.long);
printArr(testArrays.long, true, type);
