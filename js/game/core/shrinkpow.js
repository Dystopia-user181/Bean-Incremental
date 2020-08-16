function buyGen() {
	if (player.cmpcbean.lt(Decimal.pow(player.skup.includes("52") ? 1.5 : 2, player.shrinkers).mul(2))) return;
	player.shrinkers = player.shrinkers.add(1);
	player.cmpcbean = player.cmpcbean.sub(Decimal.pow(player.skup.includes("52") ? 1.5 : 2, player.shrinkers));
}
function buyGenMax() {
	if (player.cmpcbean.lt(Decimal.pow(player.skup.includes("52") ? 1.5 : 2, player.shrinkers).mul(2))) return;
	var shrinkeramt = new Decimal(Math.floor(player.cmpcbean.add(Decimal.pow(player.skup.includes("52") ? 1.5 : 2, player.shrinkers)).log(player.skup.includes("52") ? 1.5 : 2))).sub(player.shrinkers);
	player.cmpcbean = player.cmpcbean.sub(Decimal.pow(player.skup.includes("52") ? 1.5 : 2, player.shrinkers.add(shrinkeramt)));
	player.shrinkers = player.shrinkers.add(shrinkeramt);
}
setInterval(function () {
	var pc = player.char;
	var sumOfAllChar = pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap);
	player.shrinkpow = player.shrinkpow.add(player.shrinkers.div(100).mul(player.spup.includes("12") ? 5 : 1).mul(player.sup.includes("22") ? player.cmpcbean.add(10).log10() : 1).mul(player.skup.includes("31") ? Decimal.pow(3, player.shrinkers.div(10).floor()) : 1));
	if (player.sup.includes("23")) player.cmpcbean = player.cmpcbean.add(sumOfAllChar.div(1e10).pow(player.skup.includes() ? 0.13 : 0.1).mul(player.spup.includes("11") ? player.cmpcbean.add(5).log(5) : 1).mul(player.sup.includes("21") ? player.shrinkstat.add(1).pow(1.5) : 1).floor())
}, 100);
function buySPup(upgrade, cost) {
	if (player.shrinkpow.lt(cost) || player.spup.includes(upgrade)) return;
	player.shrinkpow = player.shrinkpow.sub(cost);
	player.spup.push(upgrade);
}