window.circleAttrs=function (d,i) {
    return {"r":d*window.r}
};

window.line1Attrs=function (d,i) {
    var r=d*window.r;
    var x_a=-window.r*d;
    var y_a=-window.r;
    var x_b=window.r+x_a;
    var y_b=window.r;
    var inters=circleIntersection(r,x_a,x_b,y_a,y_b);
    if(inters.length<1){
        return {"opacity":0}
    }
    return {"x1":x_a,'y1':y_a,"x2":inters[0][0],"y2":inters[0][1]}
};

window.line2Attrs=function (d,i) {
    var r=d*window.r;
    var x_a=-window.r*d;
    var y_a=-window.r;
    var x_b=window.r+x_a;
    var y_b=window.r;
    var inters=circleIntersection(r,x_a,x_b,y_a,y_b);
    if(inters.length<1){
        return {"opacity":0}
    }
    return {"x1":x_b,'y1':y_b,"x2":inters[1][0],"y2":inters[1][1]}

};
window.rectAttrs=function (d,i) {
    return {}
};
updateShape();

