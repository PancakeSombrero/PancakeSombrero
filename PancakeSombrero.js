var pancakeSombrero = (function() {
	
	function _splitListByIndex(list, splitIndex) {
		firstHalf = [];
		secondHalf = [];
		returnDict = {}

		if (splitIndex == 0 || splitIndex == list.length - 1) {
			throw 'You cannot split with a target that equals the first or last element in a list'; 
		} else if (splitIndex == -1) {
			throw 'Target doesn not exist in list';
		} else if (splitIndex == undefined) {
			if (list.length % 2 != 0) {
				splitIndex = Math.round((listLength / 2) - 1)
				for (var j = listLength - 1; j > splitIndex; j--) {
					secondHalf.push(list[j]);
				}
				returnDict['split-index'] = splitIndex
			} else {
				splitIndex = list.length / 2
				for (var j = listLength - 1; j >= splitIndex; j--) {
					secondHalf.push(list[j]);
				}
			}
		} else {
			for (var j = listLength - 1; j > splitIndex; j--) {
				secondHalf.push(list[j]);
			}
			returnDict['split-index'] = splitIndex
		}

		for (var i = 0; i < splitIndex; i++) {
			firstHalf.push(list[i]);
		}

		if (Object.keys(returnDict).length > 0) {
			returnDict['first-half'] = firstHalf
			returnDict['second-half'] = secondHalf
		} else {
			returnDict['first-half'] = firstHalf
			returnDict['second-half'] = secondHalf
		}

		return returnDict
	}

	function splitList(list, targetIndex) {
		listLength = list.length;

		if (targetIndex == undefined) {
			if (list.length % 2 != 0) {
				return _splitListByIndex(list)
			} else {
				return _splitListByIndex(list)
			}
		} else {
			splitIndex = list.indexOf(targetIndex);
			return _splitListByIndex(list, splitIndex)
		}
	}

	function getLowestNumber(list) {
		if (arguments.length > 1) {
			list = Array.from(arguments);
		} else {
			if (typeof arguments[0] == 'string') {
				list = arguments[0].split(',')

				for (i in list) {
					list[i] = parseInt(list[i])
				}
			}
		}

		lowestNumberObj = {}
		for (i in list) {
			if (!lowestNumberObj.hasOwnProperty('lowest-number')) {
				lowestNumberObj['lowest-number'] = list[i];
				lowestNumberObj['index'] = parseInt(i);
			}
			for (j in list) {
				if (list[j] < list[i] && list[j] < lowestNumberObj['lowest-number']) {
					lowestNumberObj['lowest-number'] = list[j];
					lowestNumberObj['index'] = parseInt(j);
				}
			}
		}
		return lowestNumberObj;
	}

	function binaryExists(list, target) {
		function _sort(a, b) {
			return a - b;
		}

		firstHalf = []
		secondHalf = []
		centerIndex = Math.round(list.length / 2) - 1
		sortedList = list.sort(_sort)
		splitListObject = splitList(sortedList)

		if (sortedList[centerIndex] == target) {
			found = true
			return found
		} else if (sortedList[centerIndex] > target) {
			return binaryExists(splitListObject['first-half'], target)
		} else if (sortedList[centerIndex] < target) {
			return binaryExists(splitListObject['second-half'], target)
		}  else {
			found = false
			return found
		}
	}

	return {
		splitList: splitList,
		getLowestNumber: getLowestNumber,
		binaryExists: binaryExists
	}

})();
