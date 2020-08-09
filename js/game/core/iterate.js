function iter(max=0, mult=1) {
	max = new Decimal(max);
	if (max.eq(0)) {
		var cmone = player.char.cmone;
		var bean = player.char.bean;
		player.char.dirt = player.char.dirt.add(cmone.mul(mult));
		player.char.cap = player.char.cap.add(cmone.mul(mult));
		player.char.cmone = new Decimal(0);
		player.char.cmone = player.char.cmone.add(player.char.one.mul(mult));
		player.char.one = new Decimal(0);
		player.char.legs = player.char.legs.add(bean.mul(mult));
		player.char.one = player.char.one.add(bean.mul(2).mul(mult));
		player.char.square = player.char.square.add(bean.mul(mult));
		player.char.bean = new Decimal(0);
		player.char.bean = player.char.bean.add(cmone.mul(mult));
	} else {
		var cmone = player.char.cmone;
		var bean = player.char.bean;
		player.char.dirt = player.char.dirt.add(cmone.min(max).mul(mult));
		player.char.cap = player.char.cap.add(cmone.min(max).mul(mult));
		player.char.cmone = player.char.cmone.sub(cmone.min(max));
		player.char.cmone = player.char.cmone.add(player.char.one.min(max).mul(mult));
		player.char.one = player.char.one.sub(player.char.one.min(max));
		player.char.legs = player.char.legs.add(bean.min(max).mul(mult));
		player.char.one = player.char.one.add(bean.min(max).mul(2).mul(mult));
		player.char.square = player.char.square.add(bean.min(max).mul(mult));
		player.char.bean = player.char.bean.sub(player.char.bean.min(max));
		player.char.bean = player.char.bean.add(cmone.min(max).mul(mult));
	}
	player.tutorial.unlockedUps = true;
}

function iterbtn() {
	var pc = player.char;
	$("iterbtn").disabled = true;
	$("iterbar").style.transition = `${pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap).add(5).log(10)}s all linear`;
	setTimeout(function() {
		$("iterbar").style.width = "100%";
		setTimeout(function() {
			$("iterbar").style.transition = "";
			$("iterbar").style.width = "2%";
			$("iterbtn").disabled = false;
			iter()
		}, pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap).add(5).log(10)*1000);
	}, 50);
}

function autowritertick() {
	if (player.auto.lt(1)) {
		setTimeout(autowritertick, 1000);
		return;
	}
	if (player.auto.mul(player.upgrades.includes("12") ? 4 : 1).gt(40)) {
		setTimeout(autowritertick, 40);
		iter(player.auto.mul(250), player.auto.div(40));
	} else {
		setTimeout(autowritertick, 4000/player.auto.toNumber()/(player.upgrades.includes("12") ? 4 : 1));
		iter(10000);
	}
}
autowritertick();