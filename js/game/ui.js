function updateUI() {
	var pc = player.char;
	var sumOfAllChar = pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap);
	$("beanamt").innerText = toSci(pc.bean);
	$("oneamt").innerText = toSci(pc.one);
	$("legsamt").innerText = toSci(pc.legs);
	$("squareamt").innerText = toSci(pc.square);
	$("cmoneamt").innerText = toSci(pc.cmone);
	$("dirtamt").innerText = toSci(pc.dirt);
	$("capamt").innerText = toSci(pc.cap);
	$("autos").innerText = toSci(player.auto);
	$("cmpcbeanamt").innerText = toSci(player.cmpcbean);
	$("shrinkamt").innerText = toSci(new Decimal(sumOfAllChar.log10()/10).pow(sumOfAllChar.log(500)/15).pow(2).floor());
	$("autocapboost").innerText = toSci(player.auto.mul(1.5).add(1), 2);
	$("autowritercost").innerText = toSci(Decimal.pow(autoScale(), player.auto).mul(autoScale()));
	$("upautocost").innerText = toSci(new Decimal(1e6).div(player.sup.includes("11") ? 5 : 1));
	$("downautocostcost").innerText = toSci(new Decimal(1e7).div(player.sup.includes("11") ? 5 : 1));
	$("upautocapcost").innerText = toSci(new Decimal(1e8).div(player.sup.includes("11") ? 5 : 1));
	$("autotabbtn").style.display = getInlineDisplay(player.tutorial.unlockedUps);
	$("shrinktabbtn").style.display = getInlineDisplay(player.tutorial.unlockedUps);
	$("shrinkbtn").style.display = getInlineDisplay(player.tutorial.unlockedPrestige);
	var canPrestige = true;
	Object.keys(player.char).forEach(function (key) {
		if (player.char[key].lt(1e10)) {
			canPrestige = false;
		}
	});
	$("shrinkbtn").disabled = !canPrestige;
	$("buyauto").disabled = pc.legs.lt(Decimal.pow(autoScale(), player.auto).mul(autoScale()));
	$("upauto").disabled = pc.dirt.lt(1e6) || player.upgrades.includes("12");
	$("upauto").className = `upgradebtn${player.upgrades.includes("12") ? " bought" : ""}`;
	$("downautocost").disabled = pc.square.lt(1e7) || player.upgrades.includes("13");
	$("downautocost").className = `upgradebtn${player.upgrades.includes("13") ? " bought" : ""}`;
	$("upautocap").disabled = pc.cap.lt(1e8) || player.upgrades.includes("14");
	$("upautocap").className = `upgradebtn${player.upgrades.includes("14") ? " bought" : ""}`;
	$("shrinkprice").disabled = player.cmpcbean.lt(1) || player.sup.includes("11");
	$("shrinkprice").className = `supgradebtn${player.sup.includes("11") ? " bought" : ""}`;
	tabTo(player.navigation.tab);
}

function getDisplay(bool) {
	return (bool ? "block" : "none");
}
function getInlineDisplay(bool) {
	return (bool ? "inline-block" : "none");
}

function getVisibility(bool) {
	return (bool ? "visible" : "hidden");
}

setInterval(updateUI, 50);