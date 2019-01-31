window.circleAttrs=function (d,i) {
    return {"r":d*window.r}
};
var randomX=randomFloat(-window.r,window.r);
var randomY=randomFloat(-window.r,window.r);
window.line1Attrs=function (d,i) {
    var rx=randomX*d;
    var ry=randomY*d;
    return {"x1":-window.r,'x2':rx,"y1":ry,"y2":ry}
};

window.line2Attrs=function (d,i) {
    var rx=randomX*d;
    var ry=randomY*d;

    return {"x1":rx,'x2':rx,"y1":ry,"y2":-window.r}
};
window.rectAttrs=function (d,i) {
    return {}
};
updateShape();

