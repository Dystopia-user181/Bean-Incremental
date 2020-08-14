function iter(max=0, mult=1) {
	max = new Decimal(max);
	var cmone = player.char.cmone;
	var bean = player.char.bean;
	if (max.eq(0)) {
		player.char.dirt = player.char.dirt.add(cmone.mul(Decimal.pow(2, mult)));
		player.char.cap = player.char.cap.add(cmone.mul(Decimal.pow(2, mult)));

		player.char.cmone = player.char.one.mul(Decimal.pow(2, mult));

		player.char.one = bean.mul(2).mul(Decimal.pow(2, mult));
		player.char.square = player.char.square.add(bean.mul(Decimal.pow(2, mult)));
		player.char.legs = player.char.legs.add(bean.mul(Decimal.pow(2, mult)));

		player.char.bean = cmone.mul(Decimal.pow(2, mult));
	} else {
		player.char.dirt = player.char.dirt.add(cmone.min(max).mul(mult));
		player.char.cap = player.char.cap.add(cmone.min(max).mul(mult));

		player.char.cmone = player.char.cmone.sub(cmone.min(max).mul(mult));
		player.char.cmone = player.char.cmone.add(player.char.one.min(max).mul(mult));

		player.char.one = player.char.one.sub(player.char.one.min(max).mul(mult));
		player.char.one = player.char.one.add(bean.min(max).mul(2).mul(mult));

		player.char.legs = player.char.legs.add(bean.min(max).mul(mult));
		player.char.square = player.char.square.add(bean.min(max).mul(mult));

		player.char.bean = player.char.bean.sub(player.char.bean.min(max).mul(mult));
		player.char.bean = player.char.bean.add(cmone.min(max).mul(mult));
	}

	player.tutorial.unlockedUps = true;
	var canUnlockPrestige = true;
	Object.keys(player.char).forEach(function (key) {
		if (player.char[key].lt(1e10)) {
			canUnlockPrestige = false;
		}
	});
	player.tutorial.unlockedPrestige = player.tutorial.unlockedPrestige || canUnlockPrestige;
}

function iterbtn() {
	var pc = player.char;
	$("iterbtn").disabled = true;
	$("iterbar").style.transition = `${Math.pow(pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap).add(5).div(player.shrinkpow.add(1).pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2).add(1)).log(10), 1.1)/Math.pow(player.iterlvl, 1.1)}s all linear`;
	setTimeout(function() {
		$("iterbar").style.width = "100%";
		setTimeout(function() {
			$("iterbar").style.transition = "";
			$("iterbar").style.width = "1%";
			$("iterbtn").disabled = false;
			iter();
		}, Math.pow(pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap).add(5).div(player.shrinkpow.add(1).pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2).add(1)).log(10), 1.1)/Math.pow(player.iterlvl, 1.1)*1000);
	}, 50);
}

function upiter() {
	if (player.char.square.lt(Decimal.mul(32, Math.pow(750, player.iterlvl)))) return;
	player.char.square = player.char.square.sub(Decimal.mul(32, Math.pow(750, player.iterlvl)));
	player.iterlvl++;
}

function autowritertick() {
	var auto = player.auto.mul(player.upgrades.includes("22") ? 2 : 1);
	var pc = player.char;
	var sumOfAllChar = pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap);
	var shrinkeff = player.shrinkpow.add(1).pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2);
	var autospeed = auto.mul(player.upgrades.includes("12") ? 4 : 1)
		.mul(player.upgrades.includes("24") ? (
			(player.upgrades.includes("14") ? auto.mul((2)).add(1) : 1)
			.div(
			sumOfAllChar.div(shrinkeff.add(1)).pow(player.skup.includes("21") ? 0.06 : 0.1)
			.div(sumOfAllChar.div(shrinkeff.add(1)).add(15).log(15)))) : 1)
		.mul(player.upgrades.includes("21") ? player.char.dirt.add(10).log10() : 1)
		.mul(shrinkeff.add(1))
		.mul(player.upgrades.includes("31") ? player.shrinkstat.add(1).pow(6) : 1)
		.mul(player.upgrades.includes("32") ? 300 : 1);
	if (autospeed.lt(0.001)) {
		setTimeout(autowritertick, 100);
		return;
	}
	if (autospeed.gte(40)) {
		setTimeout(autowritertick, 100);
		iter(player.upgrades.includes("24") ? 0 : auto.mul(2500).mul(player.upgrades.includes("14") ? auto.mul(2).add(1) : 1), autospeed.div(40));
	} else {
		setTimeout(autowritertick, 4000/autospeed.toNumber());
		iter(Decimal.mul((player.upgrades.includes("24") ? 0 : (player.upgrades.includes("14") ? auto.mul(2).add(1) : 1)), 100000), 1);
	}
}
autowritertick();