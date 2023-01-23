// String to Number

let var1 = "1122";
let var2 = Number(var1);
let var3 = Number("aaa");
console.log(typeof var1);
console.log(typeof var2);
console.log(var3);
console.log(typeof var3);

// to String

console.log(typeof String(1122));
console.log(typeof String(false));


/// Automatic type convertion

console.log("22"+1+"5");
console.log("22" - 1 - "5");
console.log("22" * 2);
console.log("22" / 2);

// to boolean

// --- theses will return false
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// -- other than this everything will be true
console.log(Boolean(11));
console.log(Boolean("aa"));
console.log(Boolean({}));