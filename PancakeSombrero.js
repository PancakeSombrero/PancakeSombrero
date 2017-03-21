var pancakeSombrero = (function() {
	
	function _splitListByIndex(list, splitIndex) {
		firstHalf = [];
		secondHalf = [];

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
		}

		for (var i = 0; i < splitIndex; i++) {
			firstHalf.push(list[i]);
		}

		return [firstHalf, secondHalf];
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

	return {
		splitList: splitList
	}

})();
