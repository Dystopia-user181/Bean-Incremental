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
	$("autointerval").innerText = toSci(auto.mul(player.upgrades.includes("12") ? 4 : 1).mul(player.upgrades.includes("24") ? (player.upgrades.includes("14") ? auto.mul((2)).add(1) : 1).div(sumOfAllChar.div(player.shrinkpow.pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2).add(1)).pow(player.skup.includes("21") ? 0.06 : 0.1).div(sumOfAllChar.div(player.shrinkpow.pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2).add(1)).add(15).log(15))) : 1).mul(player.upgrades.includes("21") ? player.char.dirt.add(10).log10() : 1).mul(player.shrinkpow.pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2).add(1)).mul(0.25), 2);
	$("cmpcbeanamt").innerText = toSci(player.cmpcbean);
	$("shrinkamt").innerText = toSci(sumOfAllChar.div(1e10).pow(player.skup.includes() ? 0.17 : 0.1).mul(player.spup.includes("11") ? player.cmpcbean.add(5).log(5) : 1).mul(player.sup.includes("21") ? player.shrinkstat.add(1).pow(1.5) : 1).floor().floor());
	$("autocapboost").innerText = toSci(player.auto.mul((player.upgrades.includes("22") ? 4 : 2)).add(1), 2);
	$("autospeedboost").innerText = toSci(pc.dirt.add(10).log10(), 2);
	$("autospeedboost2").innerText = toSci(player.shrinkstat.add(1).pow(6), 2);
	$("singboost2").innerText = toSci(player.shrinkstat.add(1).pow(1.5), 2);
	$("shringpowboost").innerText = toSci(player.cmpcbean.add(10).log10(), 2);
	$("upitercost").innerText = toSci(Decimal.mul(32, Decimal.pow(750, player.iterlvl)));
	$("autowritercost").innerText = toSci(Decimal.pow(autoScale(), player.autobought).mul(autoScale()));
	$("upautocost").innerText = toSci(new Decimal(1e6).div(player.sup.includes("11") ? 5 : 1));
	$("downautocostcost").innerText = toSci(new Decimal(1e7).div(player.sup.includes("11") ? 5 : 1));
	$("upautocapcost").innerText = toSci(new Decimal(1e8).div(player.sup.includes("11") ? 5 : 1));
	$("upautospeedcost").innerText = toSci(new Decimal(1e9).div(player.sup.includes("11") ? 5 : 1));
	$("bulkmorecost").innerText = toSci(new Decimal(1e12).div(player.sup.includes("11") ? 5 : 1));
	$("replicatecost").innerText = toSci(new Decimal(1e20).div(player.sup.includes("11") ? 5 : 1));
	$("removeautocapcost").innerText = toSci(new Decimal(1e30).div(player.sup.includes("11") ? 5 : 1));
	$("upautospeed2cost").innerText = toSci(new Decimal("1e1000").div(player.sup.includes("11") ? 5 : 1));
	$("upautospeed3cost").innerText = toSci(new Decimal("1e1500").div(player.sup.includes("11") ? 5 : 1));
	$("replicate2cost").innerText = toSci(new Decimal("1e2000").div(player.sup.includes("11") ? 5 : 1));
	$("givedysideascost").innerText = toSci(new Decimal("1e30000").div(player.sup.includes("11") ? 5 : 1));
	$("shrinkpowamt").innerText = toSci(player.shrinkpow, 1);
	$("shrinkpowboost").innerText = toSci(player.shrinkpow.pow(player.skup.includes("31") ? 4 : player.spup.includes("13") ? 3 : 2).add(1), 2);
	$("shrinkeramt").innerText = toSci(player.shrinkers);
	$("shrinkercost").innerText = toSci(Decimal.pow(2, player.shrinkers).mul(2));
	$("singboost").innerText = toSci(player.cmpcbean.add(5).log(5));
	$("autotabbtn").style.display = getDisplay(player.tutorial.unlockedUps);
	$("shrinktabbtn").style.display = getDisplay(player.tutorial.unlockedPrestige);
	$("shrinkbtn").style.display = getDisplay(player.tutorial.unlockedPrestige);
	$("secondrow").style.display = getDisplay(player.sup.includes("12"), "table-row");
	$("thirdrow").style.display = getDisplay(player.skup.includes("31"), "table-row");
	$("secondsing").style.display = getDisplay(player.skup.includes("11"), "table-row");
	$("shrinkpowtabbtn").style.display = getDisplay(player.sup.includes("14"));
	$("shrinktreetabbtn").style.display = getDisplay(player.spup.includes("14"));
	$("upiterbtn").disabled = player.char.square.lt(Decimal.mul(32, Decimal.pow(750, player.iterlvl)));
	$("shrinkbtn").disabled = sumOfAllChar.div(1e10).pow(player.skup.includes() ? 0.13 : 0.1).mul(player.sup.includes("21") ? player.shrinkstat.add(1).pow(1.5) : 1).floor().lt(1);
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
	$("upautospeed2").disabled = pc.dirt.lt(Decimal.div("1e1000", (player.sup.includes("11") ? 5 : 1))) || player.upgrades.includes("31");
	$("upautospeed2").className = `upgradebtn${player.upgrades.includes("31") ? " bought" : ""}`;
	$("upautospeed3").disabled = pc.legs.lt(Decimal.div("1e1500", (player.sup.includes("11") ? 5 : 1))) || player.upgrades.includes("32");
	$("upautospeed3").className = `upgradebtn${player.upgrades.includes("32") ? " bought" : ""}`;
	$("replicate2").disabled = pc.cap.lt(Decimal.div("1e2000", (player.sup.includes("11") ? 5 : 1))) || player.upgrades.includes("33");
	$("replicate2").className = `upgradebtn${player.upgrades.includes("33") ? " bought" : ""}`;
	$("givedysideas").disabled = pc.cmone.lt(Decimal.div("1e30000", (player.sup.includes("11") ? 5 : 1))) || player.upgrades.includes("34");
	$("givedysideas").className = `upgradebtn${player.upgrades.includes("34") ? " bought" : ""}`;
	$("shrinkprice").disabled = player.cmpcbean.lt(1) || player.sup.includes("11");
	$("shrinkprice").className = `supgradebtn${player.sup.includes("11") ? " bought" : ""}`;
	$("moreauto").disabled = player.cmpcbean.lt(1) || player.sup.includes("12");
	$("moreauto").className = `supgradebtn${player.sup.includes("12") ? " bought" : ""}`;
	$("keepauto").disabled = player.cmpcbean.lt(10) || player.sup.includes("13");
	$("keepauto").className = `supgradebtn${player.sup.includes("13") ? " bought" : ""}`;
	$("unlockshrinkpow").disabled = player.cmpcbean.lt(10) || player.sup.includes("14");
	$("unlockshrinkpow").className = `supgradebtn${player.sup.includes("14") ? " bought" : ""}`;
	$("moresing").disabled = player.cmpcbean.lt(1e100) || player.sup.includes("21");
	$("moresing").className = `supgradebtn${player.sup.includes("21") ? " bought" : ""}`;
	$("morepower").disabled = player.cmpcbean.lt(1e150) || player.sup.includes("22");
	$("morepower").className = `supgradebtn${player.sup.includes("22") ? " bought" : ""}`;
	$("keepsing").disabled = player.cmpcbean.lt(1e230) || player.sup.includes("23");
	$("keepsing").className = `supgradebtn${player.sup.includes("23") ? " bought" : ""}`;
	$("helpdysweight").disabled = player.cmpcbean.lt("1e2000") || player.sup.includes("24");
	$("helpdysweight").className = `supgradebtn${player.sup.includes("24") ? " bought" : ""}`;
	$("sing").disabled = player.shrinkpow.lt(1e3) || player.spup.includes("11");
	$("sing").className = `spupgradebtn${player.spup.includes("11") ? " bought" : ""}`;
	$("morepow").disabled = player.shrinkpow.lt(2e3) || player.spup.includes("12");
	$("morepow").className = `spupgradebtn${player.spup.includes("12") ? " bought" : ""}`;
	$("powboost").disabled = player.shrinkpow.lt(2e4) || player.spup.includes("13");
	$("powboost").className = `spupgradebtn${player.spup.includes("13") ? " bought" : ""}`;
	$("unlocktree").disabled = player.shrinkpow.lt(1e5) || player.spup.includes("14");
	$("unlocktree").className = `spupgradebtn${player.spup.includes("14") ? " bought" : ""}`;
	updateTree();
	tabTo(player.navigation.tab);
	if (player.skup.includes("22")) {
		buyGenMax();
		buyAutoMax();
	}
}

function getDisplay(bool, display="inline-block") {
	return (bool ? display : "none");
}

function getVisibility(bool) {
	return (bool ? "visible" : "hidden");
}

setInterval(updateUI, 50);