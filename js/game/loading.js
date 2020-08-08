/*
throw (truck)
try 
catch (truck)

//Output: Failed to catch (truck): Too heavy

Something something Python 🐍
0.1+0.2 ahhhhhhh
php bad lollolol funny
Why is css
Redfire has AD clone
"Hello world";
Why doesn't this code have "use strict";?
oh good idea*/
"use strict";
/*
```js- wait I'm not in discord
qwertyuiopasdfghjklzxcvbnm
mnbvcxzlkjhgfdsapoiuytrewq
qazwsxedcrfvtgbyhnujmikolp
plmoknijbuhvygctfxrdzeswaq
B
*/
function load(save) {
	if (typeof save !== "object") return;
	if (save === null) return;
	player = runParse(save, initPlayer);
}
function runParse(obj, obj2) {
	Object.keys(obj2).forEach(function (key, index) {
		if (key != "proto") {
			if (obj[key] === undefined) {
				obj[key] = obj2[key];
			} else if (typeof obj[key] === "string" && typeof obj2[key] === "object") {
				obj[key] = new Decimal(obj[key]);
			} else if (typeof initPlayer[key] === "object" && typeof obj[key] === "object") {
				runParse(obj[key], obj2[key]);
			} else if (typeof obj[key] != typeof obj2[key]) {
				obj[key] = obj2[key];
			}
		}
	});
	return (obj);
}
var parsedsave = JSON.parse(localStorage.getItem("beancrementalsave"));
if (localStorage.getItem("beancrementalsave") !== null) {
	load(parsedsave);
}
/*function expo() {
	var sv = $("savetext");
	sv.style.display = "block";
	sv.innerText = btoa(JSON.stringify(player));
	sv.focus();
	sv.select();
	document.execCommand('copy');
	sv.style.display = "none";
}
function impo() {
	load(JSON.parse(atob(prompt("Paste your save here."))));
}*/