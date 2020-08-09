function buyAuto() {
	if (player.char.legs.lt(Decimal.pow(autoScale(), player.auto).mul(autoScale()))) return;
	player.auto = player.auto.add(1);
	player.char.legs = player.char.legs.sub(Decimal.pow(autoScale(), player.auto));
}
function buyUp(upgrade, cost, character) {
	var pc = player.char;
	if (pc[character].lt(cost) || player.upgrades.includes(upgrade)) return "bad";
	player.upgrades.push(upgrade);
	player.char[character] = player.char[character].sub(cost);
}
function autoScale() {
	return player.upgrades.includes("13") ? 100 : 128;
}