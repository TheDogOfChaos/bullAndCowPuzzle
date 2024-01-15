$(document).ready(function(){
	function getUrlParamVal(value) {
		let urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(value) 
	}
	
	function getMaxIntForBits(bits) {
		return 2 ** bits;
	}

	let difficulty = getUrlParamVal('diff');
	let guess = [];
	let secret = []
	
	for (let i = 0; i < difficulty; i++) {
		do {
			let rand = Math.floor(Math.random() * 10);
		}
		while (secret.includes(rand))
		secret.push(rand)
		console.log(secret)
	}
	$('.numButton').click(function() {
		console.log(this.id)
		$('#answer').append(this.id)
		guess.push(this.id)
	});
	
	$('#checkAnswer').click(function() {
		console.log(guess)
	});
	
	$('#reset').click(function() {
		guess = [];
		$('#answer').text('');
	});
	
	//NOPE: Make randomising array to check against
	//TODO: Assign each checkbox a binary value
	//IDEA: Limited chances to check?
	//IDEA: Resident Evil 2 reserve power puzzle-esque?
	
}); 