function defaultPlayer() {
	return {
		char: {
			bean: new Decimal(1),
			legs: new Decimal(0),
			one: new Decimal(0),
			square: new Decimal(0),
			cmone: new Decimal(0),
			dirt: new Decimal(0),
			cap: new Decimal(0)
		},
		iterlvl: 0,
		auto: new Decimal(0),
		autobought: new Decimal(0),
		upgrades: [],
		sup: [],
		powup: [],
		shrinkpow: new Decimal(0),
		shrinkers: new Decimal(0),
		cmpcbean: new Decimal(0),
		shrinkstat: new Decimal(0),
		tutorial: {
			unlockedUps: false,
			unlockedPrestige: false
		},
		navigation: {
			tab: "Characters"
		}
	}
}
player = defaultPlayer();

function $(el) {
	return document.getElementById(el);
}