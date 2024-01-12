$(document).ready(function(){
	function getUrlParamVal(value) {
		let urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(value) 
	}

	let difficulty = getUrlParamVal('diff');
	let switchVals= [];
	
	for (let i = 0; i < difficulty; i++) {
		$('.switchbox').append(function(n){
			let switchID = 'switch' + (i + 1);
			let switchCreate = $('<input type="checkbox" class="switch">');
			switchCreate.attr('id', switchID);
			return switchCreate;
		});
	}
	
	$('#checkAnswer').click(function() {
		let  checkboxes = $('.switchbox').find('.switch');
		$('.switch').each(function(index, element) {
			if ($(element).prop('checked')) {
				let switchID = element.id;
				let value = $(element).val();
				switchVals.push({ id: switchID, value: value });
			}
		});
		console.log('Checked Checkbox Values:', switchVals);
	});
}); 