function buyGen() {
	if (player.cmpcbean.lt(Decimal.pow(2, player.shrinkers).mul(2))) return;
	player.shrinkers = player.shrinkers.add(1);
	player.cmpcbean = player.cmpcbean.sub(Decimal.pow(2, player.shrinkers));
}
function buyGenMax() {
	if (player.cmpcbean.lt(Decimal.pow(2, player.shrinkers).mul(2))) return;
	var shrinkeramt = new Decimal(Math.floor(player.cmpcbean.log(2))).sub(player.shrinkers);
	player.cmpcbean = player.cmpcbean.sub(Decimal.pow(2, player.shrinkers.add(shrinkeramt)));
	player.shrinkers = player.shrinkers.add(shrinkeramt);
}
setInterval(function () {
	player.shrinkpow = player.shrinkpow.add(player.shrinkers.div(100));
}, 100);
function buySPup(upgrade, cost) {
	if (player.shrinkpow.lt(cost) || player.spup.includes(upgrade)) return;
	player.shrinkpow = player.shrinkpow.sub(cost);
	player.spup.push(upgrade);
}