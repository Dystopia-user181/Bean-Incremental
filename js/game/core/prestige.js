function prestige(keysToKeep) {
	var savedKeys = {};
	keysToKeep.push("tutorial");
	keysToKeep.push("navigation");
	for (var i = 0; i < keysToKeep.length; i++) {
		savedKeys[keysToKeep[i]] = player[keysToKeep[i]];
	}
	player = defaultPlayer();
	for (var i = 0; i < keysToKeep.length; i++) {
		player[keysToKeep[i]] = savedKeys[keysToKeep[i]];
	}
}

function shrink() {
	var canPrestige = true;
	Object.keys(player.char).forEach(function (key) {
		if (player.char[key].lt(1e10)) {
			canPrestige = false;
		}
	});
	if (!canPrestige) return;
	prestige(["cmpcbean", "shrinkstat", "sup"]);
	player.cmpcbean = player.cmpcbean.add(1);
	player.shrinkstat = player.shrinkstat.add(1);
}

function buySup(upgrade, cost) {
	if (player.cmpcbean.lt(cost) || player.sup.includes(upgrade)) return;
	player.cmpcbean = player.cmpcbean.sub(cost);
	player.sup.push(upgrade);
}