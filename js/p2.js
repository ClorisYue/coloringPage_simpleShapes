window.circleAttrs=function (d,i) {
    return {}
};

window.line2Attrs=function (d,i) {
    var x=randomFloat(-window.r,window.r);
    return {"x1":x,'x2':x,"y1":-window.r,"y2":window.r}
};

window.line1Attrs=function (d,i) {
    var y=randomFloat(-window.r,window.r);
    return {"x1":-window.r,'x2':window.r,"y1":y,"y2":y}
};

window.rectAttrs=function (d,i) {
    return {}
};
updateShape();

