function updateUI() {
	$("beanamt").innerText = toSci(player.char.bean);
	$("oneamt").innerText = toSci(player.char.one);
	$("legsamt").innerText = toSci(player.char.legs);
	$("squareamt").innerText = toSci(player.char.square);
	$("cmoneamt").innerText = toSci(player.char.cmone);
	$("dirtamt").innerText = toSci(player.char.dirt);
	$("capamt").innerText = toSci(player.char.cap);
	tabTo(player.navigation.tab);
}
function getDisplay (bool) {
	return (bool ? "block" : "none");
}
function getInlineDisplay (bool) {
	return (bool ? "inline-block" : "none");
}
function getVisibility (bool) {
	return (bool ? "visible" : "hidden");
}
setInterval(updateUI, 50);