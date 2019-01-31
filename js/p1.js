window.circleAttrs=function (d,i) {
    return {"r":d*window.r}
};

window.line1Attrs=function (d,i) {
    return {"x1":-window.r,'x2':window.r,"y1":-window.r,"y2":window.r}
};

window.line2Attrs=function (d,i) {
    return {"x1":-window.r,'x2':window.r,"y1":window.r,"y2":-window.r}
};
window.rectAttrs=function (d,i) {
    return {}
};
updateShape();

