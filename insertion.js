var { printArr } = require('./utilities');
var { testArrays } = require('./test');

var type = 'insertion';
// All running times are worst case running times
function insertionSort(arr) {
	// running time: O(n)
	for (var i = 1; i < arr.length; i++) {
		var key = arr[i];
		var j = i - 1;
		// running time: O(n)
		while (j >= 0 && arr[j] > key) {
			// running time: O(1)
			arr[j + 1] = arr[j];
			j-= 1;
		}
		// running time: O(1)
		arr[j + 1] = key;
	}
}

// TOTAL RUNTIME: O(n^2) Worst Case

printArr(testArrays.long, false, type);
insertionSort(testArrays.long);
printArr(testArrays.long, true, type);
