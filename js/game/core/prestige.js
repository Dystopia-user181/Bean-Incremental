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
	var pc = player.char;
	var sumOfAllChar = pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap);
	if (new Decimal(sumOfAllChar.log10()/10).pow(sumOfAllChar.log(500)/3).sub(0.2).pow(2).floor().lt(1)) return;
	if (player.cmpcbean.gte(10)) {
		prestige(["cmpcbean", "shrinkstat", "sup"]);
		player.cmpcbean = player.cmpcbean.add(new Decimal(sumOfAllChar.log10()/10).pow(sumOfAllChar.log(500)/3).sub(0.2).pow(2).floor());
		player.shrinkstat = player.shrinkstat.add(1);
	} else {
		$("body").style.height = "0vh";
		$("body").style.width = "0vw";
		$("body").style.fontSize = "0px";
		setTimeout(function() {
			prestige(["cmpcbean", "shrinkstat", "sup"]);
			player.cmpcbean = player.cmpcbean.add(new Decimal(sumOfAllChar.log10()/10).pow(sumOfAllChar.log(500)/3).sub(0.2).pow(2).floor());
			player.shrinkstat = player.shrinkstat.add(1);
			$("body").style.height = "96vh";
			$("body").style.width = "98vw";
			$("body").style.fontSize = "16px";
		}, 2000);
	}
}

function buySup(upgrade, cost) {
	if (player.cmpcbean.lt(cost) || player.sup.includes(upgrade)) return;
	player.cmpcbean = player.cmpcbean.sub(cost);
	player.sup.push(upgrade);
}