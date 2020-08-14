function buyStudy(study, cost, req) {
	if (player.skup.includes(study) || player.char.dirt.lt(cost) || !player.skup.includes(req)) return;
	player.skup.push(study);
	player.char.dirt = player.char.dirt.sub(cost);
}

function updateTree() {
	var studies = document.getElementsByClassName("treebtn");
	for (var i = 0; i < studies.length; i++) {
		var studyname = studies[i].id.split("r")[0];
		var studyreq = studies[i].id.split("r")[1].split("c")[0];
		var studycost = studies[i].id.split("c")[1];
		if (player.skup.includes(studyname)) {
			studies[i].style.visibility = "visible";
			studies[i].className = "treebtn bought";
			studies[i].disabled = true;
		} else if (player.skup.includes(studyreq)) {
			studies[i].disabled = player.char.dirt.e < parseInt(studycost);
			studies[i].className = "treebtn";
			studies[i].style.visibility = "visible";
		} else {
			studies[i].style.visibility = "hidden";
			studies[i].className = "treebtn";
		}
	}
}