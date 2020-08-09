function updateUI() {
	var pc = player.char;
	$("beanamt").innerText = toSci(pc.bean);
	$("oneamt").innerText = toSci(pc.one);
	$("legsamt").innerText = toSci(pc.legs);
	$("squareamt").innerText = toSci(pc.square);
	$("cmoneamt").innerText = toSci(pc.cmone);
	$("dirtamt").innerText = toSci(pc.dirt);
	$("capamt").innerText = toSci(pc.cap);
	$("autowritercost").innerText = toSci(Decimal.pow(256, player.auto).mul(256));
	$("upgradetabbtn").style.display = getInlineDisplay(player.tutorial.unlockedUps);
	$("buyauto").disabled = pc.legs.lt(Decimal.pow(256, player.auto).mul(256));
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