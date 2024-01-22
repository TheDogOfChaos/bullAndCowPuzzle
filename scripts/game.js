/* 
	MIT License

	Copyright (c) 2024 TheDogOfChaos

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/


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
	console.log(difficulty)
	
	if (difficulty > 8) {
		console.log("CODE TOO LONG")
		difficulty = 8;
	} else if (!difficulty) {
		console.log("no difficulty selected")
		$('#answer').html("No difficulty selected! Click <a href=\"?diff=4\">here</a> to set the difficulty to 4 (4 digits)")
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
		bull = 0; cow = 0;
		$('#answer').text('');
		$('.numButton').prop("disabled", false);
	});
	//IDEA: Limited chances to check?
}); 