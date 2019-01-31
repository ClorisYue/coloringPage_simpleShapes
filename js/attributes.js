/**
 * Mini Generate Art Tutorial
 * Created for DOIIIT'S watercolor digitizing workshop #2
 * Licia He, 2019(heslicia@umich.edu)
 *
 *
 * ELEMENTS:
     * rectangles
     * circles
     * line1s
     * line2s
 *
 * variable "d":random number between 0 and 1
 * variable "i": index of the cell, going from top left to bottom right
 *
 * Attr:
 *  position, size, fill, stroke
 * Style:
 * stroke-width, opacity,stroke-dasharray... for a full list: https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
 *
 * SCREEN SETUP:
     *  paperRatio(array of width and height, default=[11,8.5])
     * diamInch(diameter(width/height) of the cell (default=1))
     * strokeSettings (feel free to define your own)):black, green, red, blue, orange, yellow
 */
window.circleAttrs=function (d,i) {
    return {}
};

window.line1Attrs=function (d,i) {
    return {}
};

window.line2Attrs=function (d,i) {
    return {}
};

window.rectAttrs=function (d,i) {
    return {}
};
updateShape();

