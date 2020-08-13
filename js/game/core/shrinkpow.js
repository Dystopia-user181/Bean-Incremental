function buyGen() {
	if (player.cmpcbean.lt(Decimal.pow(2, player.shrinkers).mul(2))) return;
	player.shrinkers = player.shrinkers.add(1);
	player.cmpcbean = player.cmpcbean.sub(Decimal.pow(2, player.shrinkers));
}
function buyGenMax() {
	if (player.cmpcbean.lt(Decimal.pow(2, player.shrinkers).mul(2))) return;
	var shrinkeramt = new Decimal(Math.floor(player.cmpcbean.log(2))).sub(player.shrinkers);
	player.shrinkers = player.shrinkers.add(shrinkeramt);
	player.cmpcbean = player.cmpcbean.sub(Decimal.pow(2, player.shrinkers.add(shrinkeramt)));
}
setInterval(function () {
	player.shrinkpow = player.shrinkpow.add(player.shrinkers.div(100));
}, 100);