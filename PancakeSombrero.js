var pancakeSombrero = (function() {
	
	function _splitListByIndex(list, splitIndex) {
		firstHalf = [];
		secondHalf = [];
		returnDict = {}

		if (splitIndex == 0 || splitIndex == list.length - 1) {
			throw "You cannot split with a target that equals the first or last element in a list"; 
		} else if (splitIndex == -1) {
			throw "Target doesn't exist in list";
		} else if (splitIndex == undefined) {
			if (list.length % 2 != 0) {
				splitIndex = Math.round((listLength / 2) - 1)
				for (var j = listLength - 1; j > splitIndex; j--) {
					secondHalf.push(list[j]);
				}
				returnDict["split-index"] = splitIndex
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
			returnDict["split-index"] = splitIndex
		}

		for (var i = 0; i < splitIndex; i++) {
			firstHalf.push(list[i]);
		}

		if (Object.keys(returnDict).length > 0) {
			returnDict["first-half"] = firstHalf
			returnDict["second-half"] = secondHalf
		} else {
			returnDict["first-half"] = firstHalf
			returnDict["second-half"] = secondHalf
		}

		return returnDict
	}

	function splitList(list, target) {
		listLength = list.length;

		if (target == undefined) {
			if (list.length % 2 != 0) {
				return _splitListByIndex(list)
			} else {
				return _splitListByIndex(list)
			}
		} else {
			splitIndex = list.indexOf(target);
			return _splitListByIndex(list, splitIndex)
		}
	}

	function getLowestNumber(list) {
		lowestNumber = 0
		for (i in list) {
			if (lowestNumber == 0) {
				lowestNumber = list[i];
			}
			for (j in list) {
				if (list[j] < list[j] && list[j] < lowestNumber) {
					lowestNumber = list[j];
				}
			}
		}
		return lowestNumber;
	}

	return {
		splitList: splitList,
		getLowestNumber: getLowestNumber
	}

})();
