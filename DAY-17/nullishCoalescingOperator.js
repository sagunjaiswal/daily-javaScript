let name1 = null;
let name2 = null;
let name3 = undefined;
let name4 = "Sagun";
document.write(name3 ?? name4, "<br/>"); //Sagun
document.write(name1 ?? name2 ?? name3 ?? name4 ?? "Anonymous", "<br/>"); //Sagun
let res = (null || undefined) ?? name4;
document.write(res, "<br/>"); //Sagun
