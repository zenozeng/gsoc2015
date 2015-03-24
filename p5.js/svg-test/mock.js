// dirty mock for demo
(function(global) {
    "use strict";

    var svg;

    var createElement = function(string, attributes, styles) {
        var xmlns = "http://www.w3.org/2000/svg",
            el = document.createElementNS(xmlns, string);
        if(!attributes) attributes = {};
        if(!styles) styles = {};
        for (var k in attributes) {
            el.setAttribute(k, attributes[k]);
        }
        for (k in styles) {
            el.style[k] = styles[k];
        }
        return el;
    };

    var count = 0;
    var w, h;
    var ts = new Date();

    var ellipse = function(cx, cy, dx, dy) {
        count++;
        if(count % 50 === 0) {
            svg = createElement('svg', {
                width: w,
                height: h
            });
            document.body.appendChild(svg);
            var nts = new Date();
            console.log(count);
            console.log(50 / (nts - ts) * 1000+ ' circles per second');
            ts = nts;
        }
        svg.appendChild(createElement('ellipse', {
            cx: cx,
            cy: cy,
            rx: dx / 2,
            ry: dy / 2
        }, {fill: '#fff', stroke: '#000'}));
    };

    global.createSVG = function(width, height) {
        svg = createElement('svg', {
            width: width,
            height: height
        });
        w = width;
        h = height;
        document.body.appendChild(svg);
        return {
            ellipse: ellipse
        };
    };

})(this);
