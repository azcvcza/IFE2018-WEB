

/*var SVG = function (h, w) {
    var NS = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(NS, "svg");
    svg.setAttribute("width",w);
    svg.setAttribute("height",h);
    
    
    return svg;
}

var circle = function(x,y,r,fill){
    var NS = "http://www.w3.org/2000/svg";
    var SVGObj = document.createElementNS(NS,"circle")
    SVGObj.setAttribute("cx",x);
    SVGObj.setAttribute("cy",y);
    SVGObj.setAttribute("r",r);
    SVGObj.style.fill=fill;
    return SVGObj;
}
var rect = function (h, w, fill) {
    var NS = "http://www.w3.org/2000/svg";
    
    var SVGObj = document.createElementNS(NS, "rect");
    
    SVGObj.setAttribute("height", h);
    SVGObj.setAttribute("width",w);
    SVGObj.style.fill = fill;
    return SVGObj;
}




function bar() {
    //console.log("hello world")


    var svg = SVG(800, 600)
    var r = rect(10,20,"red");
    var c = circle(100,100,100,"blue")
    document.body.appendChild(svg);
    svg.appendChild(r);
    svg.appendChild(c);

    //body.appendChild("svg");
    //svg.appendChild("rect");


}
*/
var bar_module = (function(bar){
        // x axis, y axis
        // data & data on change 
        // text 
        //
        var hello = function(){
            console.log("hello world");
        }
    return {hello};
}(bar_module|| {}))