var pancakeSombrero = (function() {
	
	function splitList(list, target) {
		listLength = list.length;
		firstHalf = [];
		secondHalf = [];
		splitIndex = list.indexOf(target);

		if (splitIndex == -1) {
			return false
		}

		for (var i = 0; i < splitIndex; i++) {
			firstHalf.push(list[i]);
		}

		for (var j = listLength - 1; j > splitIndex; j--) {
			secondHalf.push(list[j]);
		}

		return [firstHalf, secondHalf];
	}

	return {
		splitList: splitList
	}

})();
