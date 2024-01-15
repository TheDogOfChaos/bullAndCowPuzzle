$(document).ready(function(){
	function getUrlParamVal(value) {
		let urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(value) 
	}
	
	function getMaxIntForBits(bits) {
		return 2 ** bits;
	}

	let difficulty = getUrlParamVal('diff');
	let switchVals = [];
	let targetVal = Math.floor(Math.random() * (2 ** difficulty)) + 1;
	
	for (let i = 0; i < difficulty; i++) {
		if (((i % 8) == 0) & !(i == 0)) {
			$('.switchbox').append('<br>');
		}
		$('.switchbox').append(function(n){
			let switchCreate = $('<input type="button" class="switch">');
			switchCreate.attr('id', i + 1);
			switchCreate.attr('value', i + 1);
			return switchCreate;
		});
		console.log(((i % 8) == 0).toString(2) + i)

	}
	
	
	
	$('#checkAnswer').click(function() {
		let checkboxes = $('.switchbox').find('.switch');
		$('.switch').each(function(index, element) {
			if ($(element).prop('checked')) {
				let switchID = element.id;
				let value = $(element).val();
				switchVals.push({ id: switchID, value: value });
			}
		});
		console.log('Checked Checkbox Values:', switchVals);
	});
	
	//NOPE: Make randomising array to check against
	//TODO: Assign each checkbox a binary value
	//IDEA: Limited chances to check?
	//IDEA: Resident Evil 2 reserve power puzzle-esque?
	
}); 