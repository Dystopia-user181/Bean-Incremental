function buyAuto() {
	if (player.char.legs.lt(Decimal.pow(256, player.auto).mul(256))) return;
	player.auto = player.auto.add(1);
	player.char.legs = player.char.legs.sub(Decimal.pow(256, player.auto));
}
function buyUp(upgrade, cost, character) {
	var pc = player.char;
	if (pc[character].lt(cost)) return;
	player.upgrades.push(upgrade);
	player.char[character] = player.char[character].sub(cost);
}