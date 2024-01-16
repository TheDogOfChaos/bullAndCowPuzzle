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
	let bull = 0;
	let cow = 0;
	let rand;
	
	if (difficulty > 8) {
		console.log("CODE TOO LONG")
		difficulty = 8;
	}
	for (let i = 0; i < difficulty; i++) {
		do {
			rand = Math.floor(Math.random() * 10);
		}
		while (secret.includes(rand));
		secret.push(parseInt(rand, 10));
	}
	$('.numButton').click(function() {
		if (guess.length != difficulty){
			$('#answer').append(this.id)
			guess.push(parseInt(this.id, 10))
			$(this).prop("disabled", true);
		}
	});
	
	$('#checkAnswer').click(function() {
		bull = 0; cow = 0;
		for (let i=0; i < difficulty; i++) {
			if (guess[i] == secret[i]) {
				bull++
			} else if (secret.includes(guess[i]) && guess[i] != secret[i]) {
				cow++
			}
		}
		$("#bull").text(bull);
		$("#cow").text(cow);
		if (bull == difficulty) {
			console.log("You win!")
		}
	});
	
	$('#reset').click(function() {
		guess = [];
		$('#answer').text('');
		$('.numButton').prop("disabled", false);
	});
	//IDEA: Limited chances to check?
}); 