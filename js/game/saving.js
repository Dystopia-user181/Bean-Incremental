function save() {
	localStorage.setItem("beancrementalsave", JSON.stringify(player));
	console.log("Game saved.");
}
function reset() {
	if (confirm("Do you want to reset your save?")) {
		setTimeout(function () {
			if (prompt("Type RESET in caps to confirm.") === "RESET") {
				player = initPlayer;
			}
		}, 200);
	}
}
setInterval(save, 10000);