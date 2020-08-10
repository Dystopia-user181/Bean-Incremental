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
	$("autointerval").innerText = toSci(4/(player.upgrades.includes('12') ? 4 : 1));
	$("cmpcbeanamt").innerText = toSci(player.cmpcbean);
	$("shrinkamt").innerText = toSci(new Decimal(sumOfAllChar.log10()/10).pow(sumOfAllChar.log(500)/3).sub(0.2).pow(2).floor());
	$("autocapboost").innerText = toSci(player.auto.mul(2).add(1), 2);
	$("autowritercost").innerText = toSci(Decimal.pow(autoScale(), player.auto).mul(autoScale()));
	$("upautocost").innerText = toSci(new Decimal(1e6).div(player.sup.includes("11") ? 5 : 1));
	$("downautocostcost").innerText = toSci(new Decimal(1e7).div(player.sup.includes("11") ? 5 : 1));
	$("upautocapcost").innerText = toSci(new Decimal(1e8).div(player.sup.includes("11") ? 5 : 1));
	$("upautospeedcost").innerText = toSci(new Decimal(1e9).div(player.sup.includes("11") ? 5 : 1));
	$("autotabbtn").style.display = getDisplay(player.tutorial.unlockedUps);
	$("shrinktabbtn").style.display = getDisplay(player.tutorial.unlockedPrestige);
	$("shrinkbtn").style.display = getDisplay(player.tutorial.unlockedPrestige);
	$("secondrow").style.display = getDisplay(player.sup.includes("12"), "table-row");
	$("shrinkbtn").disabled = new Decimal(sumOfAllChar.log10()/10).pow(sumOfAllChar.log(500)/3).sub(0.2).pow(2).floor().lt(1);
	$("buyauto").disabled = pc.legs.lt(Decimal.pow(autoScale(), player.auto).mul(autoScale()));
	$("upauto").disabled = pc.dirt.lt(1e6/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("12");
	$("upauto").className = `upgradebtn${player.upgrades.includes("12") ? " bought" : ""}`;
	$("downautocost").disabled = pc.square.lt(1e7/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("13");
	$("downautocost").className = `upgradebtn${player.upgrades.includes("13") ? " bought" : ""}`;
	$("upautocap").disabled = pc.cap.lt(1e8/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("14");
	$("upautocap").className = `upgradebtn${player.upgrades.includes("14") ? " bought" : ""}`;
	$("upautospeed").disabled = pc.dirt.lt(1e9/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("21");
	$("upautospeed").className = `upgradebtn${player.upgrades.includes("21") ? " bought" : ""}`;
	$("shrinkprice").disabled = player.cmpcbean.lt(1) || player.sup.includes("11");
	$("shrinkprice").className = `supgradebtn${player.sup.includes("11") ? " bought" : ""}`;
	$("moreauto").disabled = player.cmpcbean.lt(1) || player.sup.includes("12");
	$("moreauto").className = `supgradebtn${player.sup.includes("12") ? " bought" : ""}`;
	tabTo(player.navigation.tab);
}

function getDisplay(bool, display="inline-block") {
	return (bool ? display : "none");
}

function getVisibility(bool) {
	return (bool ? "visible" : "hidden");
}

setInterval(updateUI, 50);