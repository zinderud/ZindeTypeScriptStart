function ekle(x, y) { return x + y; }
var mytopla = function (x, y) { return x + y; };
var mytoplasan = (a, b) => a + b;
function add(arg1, arg2) {
    return arg1 + arg2;
}
function isimlik(ad, soyad) {
    if (soyad)
        return ad + soyad;
    else
        return ad;
}
var benimIsimlik = isimlik("sade", "de");
function isimlikrest(ad, ...parameters) {
    return ad + parameters.join(" ");
}
function beniCagir(text) {
    console.log('icerden beniCagir ' + text);
}
function cagrilanFonksiyon(ictext, calback) {
    calback(ictext);
}
cagrilanFonksiyon("bakalım ne olacak", beniCagir);
