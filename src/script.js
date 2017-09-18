"use strict";

var handlers = {
	toggleBtn: function () {
		var scale = document.querySelector("#scale-demo").classList.toggle("scale-out");
	},

	scrollUpBtn: function () {
		var height = window.innerHeight;
		if (height > 700) {
			document.querySelector(".fixed-action-btn").classList.add('hide');
		}
	}
}