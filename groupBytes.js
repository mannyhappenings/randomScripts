function fromHex(x) { if (x.charCodeAt(0) < 64) return (x.charCodeAt(0) - 48); else return x.charCodeAt(0) - 97 + 10; }

let fromHex = b => {
	let charCode = fromHex(b[2]) * 16 + fromHex(b[3]);
	if (charCode > 31) {
		return String.fromCharCode(charCode);
    }
	return charCode;
}

["0x1b", "0x40", "0x1b", "0x61", "0x01", "0x1d", "0x21", "0x11", "0x23", "0x34"].map(getCharcode).reduce((a, b) => {
	if (a.length > 0 && typeof a[a.length - 1] === "string" && typeof b === "string") {
		a[a.length - 1] += b;
    } else a.push(b);
	return a;
}, [])
