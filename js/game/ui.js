function updateUI() {
	var pc = player.char;
	var sumOfAllChar = pc.bean.add(pc.one).add(pc.square).add(pc.legs).add(pc.cmone).add(pc.dirt).add(pc.cap);
	var auto = player.upgrades.includes("22") ? player.auto.mul(2) : player.auto;
	$("beanamt").innerText = toSci(pc.bean);
	$("oneamt").innerText = toSci(pc.one);
	$("legsamt").innerText = toSci(pc.legs);
	$("squareamt").innerText = toSci(pc.square);
	$("cmoneamt").innerText = toSci(pc.cmone);
	$("dirtamt").innerText = toSci(pc.dirt);
	$("capamt").innerText = toSci(pc.cap);
	$("autos").innerText = toSci(player.auto.mul(player.upgrades.includes("22") ? 2 : 1));
	$("autocapamt").innerText = player.upgrades.includes("24") ? "Uncapped" : `Capped at ${toSci(player.upgrades.includes("13") ? player.auto.mul((player.upgrades.includes("22") ? 4 : 2)).add(1) : new Decimal(1).mul(1e5))} per autowriter`;
	$("bulkautoamt").innerText = `${1} autowriter`;
	$("autointerval").innerText = toSci(new Decimal(player.upgrades.includes("12") ? 4 : 1).mul(player.upgrades.includes("24") ? (player.upgrades.includes("14") ? auto.mul((2)).add(1) : 1).div(sumOfAllChar.pow(0.1).div(sumOfAllChar.log(15))) : 1).mul(player.upgrades.includes("21") ? player.char.dirt.add(10).log10() : 1).mul(0.25), 2);
	$("cmpcbeanamt").innerText = toSci(player.cmpcbean);
	$("shrinkamt").innerText = toSci(sumOfAllChar.div(1e10).pow(0.1).floor());
	$("autocapboost").innerText = toSci(player.auto.mul((player.upgrades.includes("22") ? 4 : 2)).add(1), 2);
	$("autospeedboost").innerText = toSci(pc.dirt.add(10).log10(), 2);
	$("upitercost").innerText = toSci(Decimal.mul(32, Decimal.pow(750, player.iterlvl)));
	$("autowritercost").innerText = toSci(Decimal.pow(autoScale(), player.autobought).mul(autoScale()));
	$("upautocost").innerText = toSci(new Decimal(1e6).div(player.sup.includes("11") ? 5 : 1));
	$("downautocostcost").innerText = toSci(new Decimal(1e7).div(player.sup.includes("11") ? 5 : 1));
	$("upautocapcost").innerText = toSci(new Decimal(1e8).div(player.sup.includes("11") ? 5 : 1));
	$("upautospeedcost").innerText = toSci(new Decimal(1e9).div(player.sup.includes("11") ? 5 : 1));
	$("bulkmorecost").innerText = toSci(new Decimal(1e12).div(player.sup.includes("11") ? 5 : 1));
	$("replicatecost").innerText = toSci(new Decimal(1e20).div(player.sup.includes("11") ? 5 : 1));
	$("removeautocapcost").innerText = toSci(new Decimal(1e30).div(player.sup.includes("11") ? 5 : 1));
	$("shrinkpowamt").innerText = toSci(player.shrinkpow, 1);
	$("shrinkpowboost").innerText = toSci(player.shrinkpow.pow(2), 2);
	$("shrinkeramt").innerText = toSci(player.shrinkers);
	$("shrinkercost").innerText = toSci(Decimal.pow(2, player.shrinkers).mul(2));
	$("autotabbtn").style.display = getDisplay(player.tutorial.unlockedUps);
	$("shrinktabbtn").style.display = getDisplay(player.tutorial.unlockedPrestige);
	$("shrinkbtn").style.display = getDisplay(player.tutorial.unlockedPrestige);
	$("secondrow").style.display = getDisplay(player.sup.includes("12"), "table-row");
	$("shrinkpowtabbtn").style.display = getDisplay(player.sup.includes("14"));
	$("upiterbtn").disabled = player.char.square.lt(Decimal.mul(32, Decimal.pow(750, player.iterlvl)));
	$("shrinkbtn").disabled = sumOfAllChar.div(1e10).pow(0.1).floor().lt(1);
	$("buyshrink").disabled = player.cmpcbean.lt(Decimal.pow(2, player.shrinkers).mul(2));
	$("buymaxshrink").disabled = player.cmpcbean.lt(Decimal.pow(2, player.shrinkers).mul(2));
	$("buyauto").disabled = pc.legs.lt(Decimal.pow(autoScale(), player.autobought).mul(autoScale()));
	$("upauto").disabled = pc.dirt.lt(1e6/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("12");
	$("upauto").className = `upgradebtn${player.upgrades.includes("12") ? " bought" : ""}`;
	$("downautocost").disabled = pc.square.lt(1e7/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("13");
	$("downautocost").className = `upgradebtn${player.upgrades.includes("13") ? " bought" : ""}`;
	$("upautocap").disabled = pc.cap.lt(1e8/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("14");
	$("upautocap").className = `upgradebtn${player.upgrades.includes("14") ? " bought" : ""}`;
	$("upautospeed").disabled = pc.dirt.lt(1e9/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("21");
	$("upautospeed").className = `upgradebtn${player.upgrades.includes("21") ? " bought" : ""}`;
	$("bulkmore").disabled = pc.legs.lt(1e12/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("22");
	$("bulkmore").className = `upgradebtn${player.upgrades.includes("22") ? " bought" : ""}`;
	$("replicate").disabled = pc.cap.lt(1e20/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("23");
	$("replicate").className = `upgradebtn${player.upgrades.includes("23") ? " bought" : ""}`;
	$("removeautocap").disabled = pc.cmone.lt(1e30/(player.sup.includes("11") ? 5 : 1)) || player.upgrades.includes("24");
	$("removeautocap").className = `upgradebtn${player.upgrades.includes("24") ? " bought" : ""}`;
	$("shrinkprice").disabled = player.cmpcbean.lt(1) || player.sup.includes("11");
	$("shrinkprice").className = `supgradebtn${player.sup.includes("11") ? " bought" : ""}`;
	$("moreauto").disabled = player.cmpcbean.lt(1) || player.sup.includes("12");
	$("moreauto").className = `supgradebtn${player.sup.includes("12") ? " bought" : ""}`;
	$("keepauto").disabled = player.cmpcbean.lt(10) || player.sup.includes("13");
	$("keepauto").className = `supgradebtn${player.sup.includes("13") ? " bought" : ""}`;
	$("unlockshrinkpow").disabled = player.cmpcbean.lt(10) || player.sup.includes("14");
	$("unlockshrinkpow").className = `supgradebtn${player.sup.includes("14") ? " bought" : ""}`;
	tabTo(player.navigation.tab);
}

function getDisplay(bool, display="inline-block") {
	return (bool ? display : "none");
}

function getVisibility(bool) {
	return (bool ? "visible" : "hidden");
}

setInterval(updateUI, 50);