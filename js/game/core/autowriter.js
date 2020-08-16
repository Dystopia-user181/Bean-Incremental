function buyAuto() {
	if (player.char.legs.lt(Decimal.pow(autoScale(), player.autobought).mul(autoScale()))) return;
	player.auto = player.auto.add(1);
	player.autobought = player.autobought.add(1);
	player.char.legs = player.char.legs.sub(Decimal.pow(autoScale(), player.autobought));
}
function buyAutoMax() {
	if (player.char.legs.lt(Decimal.pow(autoScale(), player.autobought).mul(autoScale()))) return;
	var autoamt = new Decimal(Math.floor(player.char.legs.log(autoScale()))).sub(player.auto);
	player.char.legs = player.char.legs.sub(Decimal.pow(autoScale(), player.auto.add(autoamt)));
	player.autobought = player.autobought.add(autoamt);
	player.auto = player.auto.add(autoamt);
}
function buyUp(upgrade, cost, character) {
	cost = new Decimal(cost);
	var pc = player.char;
	if (pc[character].lt(cost.div(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes(upgrade)) return;
	player.upgrades.push(upgrade);
	player.char[character] = player.char[character].sub(cost.div(player.sup.includes("11") ? 5 : 1));
}
function autoScale() {
	return (player.upgrades.includes("13") ? 80 : 128)*(player.sup.includes("11") ? 0.6 : 1);
}
setInterval(function() {
	if (player.upgrades.includes("23")) player.auto = player.auto.add(player.auto.mul(player.upgrades.includes("33") ? 0.05 : 0.01));
}, 1000);