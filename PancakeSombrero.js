var pancakeSombrero = (function() {
	
	function splitList(list, target) {
		listLength = list.length;
		firstHalf = [];
		secondHalf = [];
		splitIndex = list.indexOf(target);

		if (splitIndex == 0 || splitIndex == list.length - 1) {
			throw "You cannot split with a target that equals the first or last element in a list"; 
		}

		if (splitIndex == -1) {
			throw "Target doesn't exist in list";
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
