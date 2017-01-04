function ssnMask() {
	var input = $('#ssn');
	var placeholder = '_';
	//input.val('XXX-XX-XXXX');
	var ssnCache = Array(11).fill(placeholder);
	ssnCache[3] = '-';
	ssnCache[6] = '-';
	var once = true;

	input.keydown(function(event) {
		if ((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)) {
			if (!once) {
				return false;
			}
			once = false;
			var index = this.selectionStart;
			if (index >= 11) {
				return false;
			}
			if (index === 3 || index === 6) {
				index++;
			}
			ssnCache[index] = '';
			input.val(ssnCache.join(''));
			this.setSelectionRange(index, index);
		} else if (event.which === 37 || event.which === 39) {
			return true;
		} else if (event.which === 8) {
			event.preventDefault();
			var index = this.selectionStart - 1;
			if (index === 3 || index === 6) {
				index--;
			}
			ssnCache[index] = 'X';
			input.val(ssnCache.join(''));
			this.setSelectionRange(index, index);
		} else {
			return false;
		}
	})

	input.keyup(function(event) {
		if ((event.which >= 48 && event.which <= 57) || (event.which >= 96 && event.which <= 105)) {
			var index = this.selectionStart - 1;
			ssnCache[index] = input.val()[index];
			if (index === 2 || index === 5) {
				this.setSelectionRange(index + 2, index + 2);
			}
			once = true;
		}
	})

	input.on('focus hover', function() {
		input.val(ssnCache.join(''));
		var el = this;
		setTimeout(function() {
			el.setSelectionRange(0, 0);
		}, 1);

	})

	input.blur(function(){
		input.val(ssnCache.filter(function(item){
			return item !== placeholder && item !== '-';
		}).join(''));
	})
}
