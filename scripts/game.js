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
	let rand;
	
	for (let i = 0; i < difficulty; i++) {
		do {
			rand = Math.floor(Math.random() * 10);
		}
		while (secret.includes(rand));
		secret.push(rand);
	}
	$('.numButton').click(function() {
		if (guess.length != difficulty){
			$('#answer').append(this.id)
			guess.push(this.id)
		}
	});
	
	$('#checkAnswer').click(function() {
		console.log(secret)
		for (let i=0; i < difficulty; i++) {
			if (guess[i] == secret[i]) {
				console.log("bull")
			} else if (secret.includes(guess[i])) {
				console.log("cow")
			} else {
				console.log("no u")
			}
		}
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