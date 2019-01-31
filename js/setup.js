function rangeRand(size) {
    /**
     * https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp
     */
    return [...Array(size).keys()].map(i =>Math.random());
}
function setupspace() {
    window.paperRatio=[11,8.5];
    window.diamInch=1;

    window.screenRatio=window.innerWidth/window.paperRatio[0];
    window.minEdge=0.2*screenRatio;
    window.svg_width=screenRatio*window.paperRatio[0];
    window.svg_height=screenRatio*window.paperRatio[1];
    window.margins={"l":minEdge,"t":minEdge,"r":minEdge,"b":minEdge};
    function updateWH() {
        window.svg_width_b=window.svg_width-window.margins.l-window.margins.r;
        window.svg_height_b=window.svg_height-window.margins.t-window.margins.b;
    }
    updateWH();
    var id="mainSvg";
    window.svg=d3.select("body")
        .append("svg")
        .attrs({"width":svg_width,"height":svg_height,"id":id});

    window.diam=window.screenRatio*diamInch;
    window.colCt=Math.floor(window.svg_width_b/window.diam);
    window.rowCt=Math.floor(window.svg_height_b/window.diam);
    window.margins.l=(window.svg_width-window.colCt*window.diam)/2;
    window.margins.r=window.margins.l;

    window.margins.t=(window.svg_height-window.rowCt*window.diam)/2;
    window.margins.b=window.margins.t;

    window.r=window.diam/2;

    window.svg_g=window.svg
        .append("g")
        .attr("id",id+"_g")
        .attr("transform","translate("+window.margins.l+","+window.margins.t+")");
    var sw=10;
    window.blackStroke={"stroke":"black","fill":"none","stroke-width":sw};
    window.greenStroke={"stroke":"green","fill":"none","stroke-width":sw};
    window.redStroke={"stroke":"red","fill":"none","stroke-width":sw};
    window.blueStroke={"stroke":"blue","fill":"none","stroke-width":sw};
    window.orangeStroke={"stroke":"orange","fill":"none","stroke-width":sw};
    window.yellowStroke={"stroke":"yellow","fill":'none',"stroke-width":sw};
    updateWH();

    svg_g.append("rect")
        .attrs({"x":0,"y":0,"width":window.svg_width_b,"height":window.svg_height_b})
        .attrs(blackStroke);
    svg_g.append("rect")
        .attrs({"x":-window.margins.l,"y":-window.margins.t,"width":window.svg_width-1,"height":window.svg_height-1})
        .attrs(blackStroke);
}
function addCells() {
    var data=rangeRand(rowCt*colCt);
    var grid_g=window.svg_g.selectAll("g.grid")
        .data(data)
        .enter()
        .append('g')
        .attr("class","grid")
        .attr("transform",function (d,i) {
            var tx=window.r*2*(i%window.colCt)+window.r;
            var ty=Math.floor(i/window.colCt)*window.r*2+window.r;
            return "translate("+tx+","+ty+")";
        });
    window.rectangles=grid_g.append("rect")
        .attrs({"x":-window.r,"y":-window.r,"width":window.diam,"height":window.diam})
        .attrs(yellowStroke);

    window.circles=grid_g.append("circle")
        .attrs({"cx":0,"cy":0,"r":window.r})
        .attrs(greenStroke);

    window.line1s=grid_g
        .append("line")
        .attrs({"x1":-window.r,"x2":window.r,"y1":0,"y2":0})
        .attrs(blueStroke);

    window.line2s=grid_g
        .append("line")
        .attrs({"x1":-window.r,"x2":window.r,"y1":-window.r/2,"y2":window.r/2})
        .attrs(orangeStroke);

}
function download() {
    var svgs=document.getElementsByTagName("svg");
    // console.log(svgs)
    for(var i=0;i<svgs.length;i++){
        var svg=svgs[i];
        svg.setAttribute("xmlns","http://www.w3.org/2000/svg");
        svg.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' +svg.outerHTML);
        var t=new Date().getTime();
        element.setAttribute('download', "generated_"+i+".svg");

        if (document.createEvent) {
            var event = document.createEvent('MouseEvents');
            event.initEvent('click', true, true);
            element.dispatchEvent(event);
        }
        else {
            element.click();
        }
    }
}
function addDownloadButton(selector) {
    selector.append("<span class=\"input-group-btn\">\n" +
        "        <button id=\"download\" class=\"btn btn-secondary\" type=\"button\">Download</button></span>");
    $("#download").click(function () {
        download()
    });
}
function getRandomInt(min, max) {
    /**
     * max is inclusive
     */
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function random01(lim=0.5) {
    var r=Math.random();
    if (r<lim){
        return 0
    }
    return 1
}
function randomFloat(start,end) {
    return (Math.random() * (end - start) + start).toFixed(4)
}
function sgn(x) {
    if(x<0){
        return -1
    }
    return 1
}
function makeCircleXY(dx,dy,dr,D,delta,sign) {
    var rdD=Math.sqrt(delta);
    var xP=sgn(dy)*dx*rdD;
    var yP=Math.abs(dy)*rdD;
    var x=(D*dy+sign*xP)/Math.pow(dr,2);
    var y=(-D*dx+sign*yP)/Math.pow(dr,2);
    return [x,y]
}
function circleIntersection(r,x1,x2,y1,y2) {
    var dx=x2-x1;
    var dy=y2-y1;
    var dr=Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));
    var D=x1*y2-x2*y1;
    var delta=Math.pow(r,2)*Math.pow(dr,2)-Math.pow(D,2);
    if(delta<0){
        return []
    }
    if(delta===0){
        return [makeCircleXY(dx,dy,dr,D,delta,1)]
    }else{
        return [makeCircleXY(dx,dy,dr,D,delta,-1),makeCircleXY(dx,dy,dr,D,delta,1)]
    }
}
setupspace();
addCells();
addDownloadButton($("body"));

function updateShape() {
    var shapes=[window.rectangles,window.circles,window.line1s,window.line2s];
    var attrCollection=[window.rectAttrs,window.circleAttrs,window.line1Attrs,window.line2Attrs];
    // var styleCollection=[window.rectStyle,window.circleStyle,window.line1Style,window.line2Style];
    for (var j=0;j<shapes.length;j++){
        shapes[j].attr("font-size",function (d,i) {
            d3.select(this)
                .attrs(attrCollection[j](d,i));
                // .styles(styleCollection[j](d,i));
            return 0
        })
    }
}
