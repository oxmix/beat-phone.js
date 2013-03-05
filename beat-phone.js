/**
	beat-phone author oxmix.net
	git clone https://github.com/oxmix/beat-phone.git
	this code ver. 1.0
*/
var $phone = function (o) {
	return new function (o) {
		var self = this;
		this.init = function () {
			this.mask = o.mask?o.mask:'(___) ___-__-__';
			this.charAllow = {
				48:0, 49:1, 50:2, 51:3, 52:4, 53:5, 54:6, 55:7, 56:8, 57:9,
				96:0, 97:1, 98:2, 99:3, 100:4, 101:5, 102:6, 103:7, 104:8, 105:9
			};

			this.elm = document.getElementById(o.element);

			if(!o.phone)
				o.phone = this.elm.value.replace(/\(|\)|_|-| |\+/g, '');
			this.phone = o.phone?o.phone.split(''):[];

			this.focusInit = o.focusInit || false;
			if(!this.focusInit)
				this.draw('off-focus');

			this.elm.onclick = function () {
				if(self.focusInit)
					self.draw();
				self.focus();
			};

			this.elm.onkeydown = function (e) {
				e = e || window.event;
				var key = e.charCode || e.keyCode || e.which;
				
				if((e.metaKey || e.ctlKey || key==9) && !e.altKey && key!=86) return true; // 9 = tab, 86 = V

				if(key==8)
					self.phone.pop();

				if(self.charAllow[key]!=null && self.elm.value.match(/_/))
					self.phone.push(self.charAllow[key]);

				self.draw();
				return false;
			};

			this.elm.onkeyup = function () {
				self.draw();
			};

			return this;
		};

		this.destroy = function () {
			this.elm.value = '';
			this.elm.onclick = null;
			this.elm.onkeydown = null;
			this.elm.onkeyup = null;
		};

		this.draw = function(s) {
			this.elm.value = this.mask;
			if(this.phone) {
				for(p in this.phone)
					this.elm.value = this.elm.value.replace('_', this.phone[p]);

				if(s!='off-focus')
					self.focus();
			}
		};

		this.focus = function () {
			var begin, end = 0;
			var val = this.elm.value;
			for(p in val) {
				if(val[p]=='_') break;
				begin = ++end;
			}

			if (this.elm.setSelectionRange) {
				this.elm.setSelectionRange(begin, end);
				this.elm.focus();
			} else if (this.createTextRange) {
				var range = this.elm.createTextRange();
				range.collapse(true);
				range.moveEnd('character', end);
				range.moveStart('character', begin);
				range.select();
			}
		};

		return this.init();
	}(o);
};