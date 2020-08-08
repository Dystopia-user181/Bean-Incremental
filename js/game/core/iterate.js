function iter(times=0, max=0) {
	max = new Decimal(max);
	if (max.eq(0)) {
		var cmone = player.char.cmone;
		var bean = player.char.bean;
		player.char.dirt = player.char.dirt.add(cmone);
		player.char.cap = player.char.cap.add(cmone);
		player.char.cmone = new Decimal(0);
		player.char.cmone = player.char.cmone.add(player.char.one);
		player.char.one = new Decimal(0);
		player.char.legs = player.char.legs.add(bean);
		player.char.one = player.char.one.add(bean.mul(2));
		player.char.square = player.char.square.add(bean);
		player.char.bean = new Decimal(0);
		player.char.bean = player.char.bean.add(cmone);
	} else {
		var cmone = player.char.cmone;
		var bean = player.char.bean;
		player.char.dirt = player.char.dirt.add(cmone.min(max));
		player.char.cap = player.char.cap.add(cmone.min(max));
		player.char.cmone = player.char.cmone.sub(cmone.min(max));
		player.char.cmone = player.char.cmone.add(player.char.one.min(max));
		player.char.one = player.char.one.sub(player.char.one.min(max));
		player.char.legs = player.char.legs.add(bean.min(max));
		player.char.one = player.char.one.add(bean.min(max).mul(2));
		player.char.square = player.char.square.add(bean.min(max));
		player.char.bean = player.char.bean.sub(player.char.bean.min(max));
		player.char.bean = player.char.bean.add(cmone.min(max));
	}
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