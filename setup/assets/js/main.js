import {Brand} from "./Brand.js";
import {Component} from "./Component.js";
import {Link} from "./Link.js";
import {Price} from "./Price.js";
import {Sell} from "./Sell.js";
import {Setup} from "./Setup.js";
import {Type} from "./Type.js";

const setup = new Setup([
	new Component({
		type: Type.CPU,
		brand: Brand.INTEL,
		model: "Core i7-13700K 3.4GHz",
		description: "LGA 1700 • 16 cores",
		image: "https://m.media-amazon.com/images/I/31Byi3U8YDL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(415.45, 4.61),
				link: new Link("https://www.amazon.es/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(415.57, 4.61),
				link: new Link("https://www.amazon.de/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(475.66, 0),
				link: new Link("https://www.amazon.fr/dp/B0BG6843GX"),
			}),
			new Sell({
				price: new Price(499.0, 0),
				link: new Link("https://www.amazon.es/dp/B0BCF57FL5"),
			}),
		],
		bestPrice: new Price(415.45, 4.61),
		target: 424.50,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.MOTHERBOARD,
		brand: Brand.ASUS,
		model: "ROG Strix Z790-F Gaming",
		description: "ATX • LGA 1700 • Wi-Fi",
		image: "https://m.media-amazon.com/images/I/41Er4p78RML._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(429.01, 7.77),
				link: new Link("https://www.amazon.de/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(469.00, 0),
				link: new Link("https://www.amazon.fr/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(474.50, 9.90),
				link: new Link("https://www.amazon.es/dp/B0BH94RXPC"),
			}),
			new Sell({
				price: new Price(499.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_cm_1700_puis_ref_est_in20014869.html"),
			}),
		],
		bestPrice: new Price(422.66, 7.77),
		target: 430.43,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.WATERCOOLING,
		brand: Brand.CORSAIR,
		model: "iCUE H150i ELITE LCD (Base/XT)",
		description: "360mm • 3x120mm • LGA 1700",
		image: "https://m.media-amazon.com/images/I/31T3BaaHbFL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(329.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_reliq_puis_ref_est_in20011451.html"), // Base
			}),
			new Sell({
				price: new Price(319.00, 11.79),
				link: new Link("https://www.amazon.fr/dp/B0BQWSP2ZP"), // XT
			}),
			new Sell({
				price: new Price(334.24, 0),
				link: new Link("https://www.amazon.de/dp/B0BQWSP2ZP"), // XT
			}),
			new Sell({
				price: new Price(329.90, 11.79),
				link: new Link("https://www.amazon.fr/dp/B09HDWQKV8"), // Base
			}),
			new Sell({
				price: new Price(347.34, 0),
				link: new Link("https://www.amazon.es/dp/B0BQWSP2ZP"), // XT
			}),
		],
		bestPrice: new Price(299.00, 11.79),
		target: 310,
		certainty: true,
	}),
	new Component({
		type: Type.RAM,
		brand: Brand.CORSAIR,
		model: "Vengeance 32Gb (2x16Gb)",
		description: "DDR5 6400MHz • CL32 • Black",
		image: "https://m.media-amazon.com/images/I/31s6I6ymzwL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(134.89, 4.65),
				link: new Link("https://www.amazon.de/dp/B0BPL9VYPW"),
			}),
			new Sell({
				price: new Price(141.46, 4.64),
				link: new Link("https://www.amazon.de/dp/B0BXHCNK8J"),
			}),
			new Sell({
				price: new Price(154.88, 0),
				link: new Link("https://www.amazon.fr/dp/B0BPL9VYPW"),
			}),
			new Sell({
				price: new Price(183.34, 4.65),
				link: new Link("https://www.amazon.es/dp/B0BPL9VYPW"),
			}),
		],
		bestPrice: new Price(134.89, 4.65),
		target: 130,
		certainty: true,
	}),
	new Component({
		type: Type.GPU,
		brand: Brand.AMD,
		model: "Radeon RX 7900 XTX",
		description: "24Gb GDDR6 • 4K",
		image: "https://m.media-amazon.com/images/I/31q7quYSDvL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(1103.00, 0),
				link: new Link("https://shop-eu-fr.amd.com/amd-radeon-rx-7900-xtx-graphics"),
			}),
		],
		bestPrice: new Price(1069.00, 0),
		target: 1087,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 1Tb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 5800Mb",
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(95.97, 4.82),
				link: new Link("https://www.amazon.de/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(102.77, 0),
				link: new Link("https://www.amazon.fr/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(104.25, 4.82),
				link: new Link("https://www.amazon.es/dp/B09F5Z6BJ6"),
			}),
			new Sell({
				price: new Price(112.49, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20010807.html"),
			}),
		],
		bestPrice: new Price(93.99, 0),
		target: 98.81,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.CORSAIR,
		model: "MP600 PRO XT 2Tb M.2 NVMe",
		description: "Gen4 • PCIe x4 • Read 7100Mb • Write 6800Mb",
		image: "https://m.media-amazon.com/images/I/31t-v2rIjcL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(171.06, 4.66),
				link: new Link("https://www.amazon.de/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(174.99, 4.66),
				link: new Link("https://www.amazon.es/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(183.88, 0),
				link: new Link("https://www.amazon.fr/dp/B09F5X8ZMY"),
			}),
			new Sell({
				price: new Price(197.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20010806.html"),
			}),
		],
		bestPrice: new Price(171.06, 4.66),
		target: 177.51,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.SSD,
		brand: Brand.SAMSUNG,
		model: "980 500Gb M.2 NVMe",
		description: "PCIe 3.0 • Read 3100Mb • Write 2600Mb",
		image: "https://m.media-amazon.com/images/I/31XnYpheJbL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(42.85, 0),
				link: new Link("https://www.amazon.fr/dp/B08THW4S3T"),
			}),
			new Sell({
				price: new Price(46.00, 4.59),
				link: new Link("https://www.amazon.es/dp/B08THW4S3T"),
			}),
			new Sell({
				price: new Price(52.95, 1.50),
				link: new Link("https://www.amazon.fr/dp/B08V7GT6F3"),
			}),
			new Sell({
				price: new Price(59.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ssd_puis_ref_est_in20007749.html"),
			}),
			new Sell({
				price: new Price(52.28, 12.08),
				link: new Link("https://www.amazon.es/dp/B09G3DM8VF"),
			}),
		],
		bestPrice: new Price(35.90, 4.59),
		target: 40,
		certainty: true,
	}),
	new Component({
		type: Type.HDD,
		brand: Brand.SEAGATE,
		model: "Barracuda 4Tb",
		description: "SATA III • 5400 RPM • 3.5\"",
		image: "https://m.media-amazon.com/images/I/41Z-sFIFVOL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(74.72, 5.22),
				link: new Link("https://www.amazon.es/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(85.44, 0),
				link: new Link("https://www.amazon.fr/dp/B0713R3Y6F"),
			}),
			new Sell({
				price: new Price(85.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_wdi_sata_puis_ref_est_in10106812.html"),
			}),
			new Sell({
				price: new Price(88.90, 0),
				link: new Link("https://www.amazon.fr/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(84.98, 5.22),
				link: new Link("https://www.amazon.de/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(90.39, 0),
				link: new Link("https://www.amazon.fr/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(85.09, 5.40),
				link: new Link("https://www.amazon.de/dp/B07D9C7SQH"),
			}),
			new Sell({
				price: new Price(80.11, 12.67),
				link: new Link("https://www.amazon.es/dp/B07115ZSQ6"),
			}),
			new Sell({
				price: new Price(94.99, 5.40),
				link: new Link("https://www.amazon.es/dp/B07D9C7SQH"),
			}),
		],
		bestPrice: new Price(72.90, 5.40),
		target: 70,
		certainty: true,
	}),
	new Component({
		type: Type.PSU,
		brand: Brand.BE_QUIET,
		model: "Straight Power 11 1000W",
		description: "Modular • 80+ Platinum",
		image: "https://m.media-amazon.com/images/I/41UDBwjuXmL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(192.90, 9.90),
				link: new Link("https://www.amazon.de/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(194.52, 9.90),
				link: new Link("https://www.amazon.fr/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(195.40, 9.90),
				link: new Link("https://www.amazon.de/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(196.14, 9.90),
				link: new Link("https://www.amazon.es/dp/B083SVLLCQ"),
			}),
			new Sell({
				price: new Price(197.24, 9.90),
				link: new Link("https://www.amazon.fr/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(198.88, 9.90),
				link: new Link("https://www.amazon.es/dp/B078WZSN2W"),
			}),
			new Sell({
				price: new Price(209.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_micro_puis_rubrique_est_w_ali_puis_ref_est_in20000189.html"),
			}),
		],
		bestPrice: new Price(193.02, 6.00),
		target: 202.80,
		certainty: true,
		buyed: true,
	}),
	new Component({
		type: Type.CASE,
		brand: Brand.CORSAIR,
		model: "Obsidian 500D RGB SE",
		description: "50.01 x 23.7 x 50.7cm • 3 LL120 RGB fans included",
		image: "https://m.media-amazon.com/images/I/41y8mm4LplL._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(269.53, 19.61),
				link: new Link("https://www.amazon.de/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(249.00, 45.52),
				link: new Link("https://www.amazon.fr/dp/B07C46L1D8"),
			}),
			new Sell({
				price: new Price(249.00, 61.29),
				link: new Link("https://www.amazon.es/dp/B07C46L1D8"),
			}),
		],
		bestPrice: new Price(216.41, 19.61),
		target: 230,
		certainty: true,
	}),
	new Component({
		type: Type.KEYBOARD,
		brand: Brand.LOGITECH,
		model: "G815 LIGHTSYNC RGB",
		description: "AZERTY • GL Clicky switches",
		image: "https://m.media-amazon.com/images/I/4117+8ARx3L._AC_US256_.jpg",
		sells: [
			new Sell({
				price: new Price(155.99, 0),
				link: new Link("https://www.amazon.fr/dp/B07W6JPFH1"),
			}),
			new Sell({
				price: new Price(184.99, 0),
				link: new Link("https://www.topachat.com/pages/detail2_cat_est_gaming_puis_rubrique_est_wg_pccla_puis_ref_est_in20000200.html"),
			}),
			new Sell({
				price: new Price(208.94, 0),
				link: new Link("https://www.amazon.de/-/en/Logitech-LIGHTSPEED-Mechanical-LIGHTSYNC-Bluetooth/dp/B07W6JPFH1"),
			}),
		],
		bestPrice: new Price(155.99, 0),
		target: 130,
		certainty: true,
	}),
]);

setup.populate(table, total, template);