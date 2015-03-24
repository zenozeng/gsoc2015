# PDF/SVG support for p5.js

Time-stamp: <2015-03-25 00:38:27 Zeno Zeng>

Revision: 1 (Draft)

## Part 1 - SVG Support for p5.js

### Frist of all, why SVG?

- Resolution Independence

- Tool chains!

    SVG works with Adobe Illustrator and Inkscape.
    It would be wonderful if designers can easily exports their p5.js to svg,
    and continue their work on SVG.
    Also, it would be great if p5.js could import SVG,
    because many resources files are in SVG.

- Accessibility

    Different from canvas, SVGs are accessible.
    That is, the text can be selected and can be easily copy and could be used for TTS.

- Object Based Events

    Want to bind click on a custom shape? Use SVG!
    SVG's API are born to be object based!

### SVG Example

#### In Canvas

```javascript
function setup() {
    createCanvas(width, height);
}
```

```javascript
var myshape;
function preload() {
    myshape = loadImage('myshape.svg');
}
```

```javascript
var x = 0,
    y = 0;
function draw() {
    background(0);
    shapeMode(CORNERS);
    shape(myshape, x, y, w, h); // draw svg on current canvas
    x++;
    y++;
}
```

#### In SVG

After a long consideration,
I think that maybe a custom API for SVG is better.

```javascript
var svg;
function setup() {
    svg = createSVG(width, height); // enter SVG mode
}
```

```javascript
var myshape;
function preload() {
    myshape = loadImage('myshape.svg');
}
```

```javascript
var s,
    x = 0,
    y = 0;
function draw() {
    if (!s) {
        // insert svg on current svg
        shapeMode(CORNERS);
        // note that when in canvas mode this will throw an exception
        s = new Shape(myshape, x, y, w, h);
        // s.shapeMode now is CORNERS
    } else {
        s.x = x;
        s.y = y;
        s.update(); // move s
    }
    x++;
    y++;
}
```

#### Export SVG

```javascript
var svg;
function setup() {
    svg = createSVG(width, height);
}
```

```javascript
function draw() {
    if (some condition) {
        // draw something
    } else {
        noLoop();
        var dataURL = svg.toDataURL();
    }
}
```

### SVG API Outline

- shapeMode

- shape(Shape, x, y, w, h)

    Loading shape to canvas

- new Shape()

    For loading existing svg to svg

- All basic shapes in p5.js

```javascript
function setup () {
    ellipse = new Ellipse(x, y, w, h);
}
```

```javascript
function draw () {
    ellipse.width++;
    ellipse.update();
}
```

- new SVGShape

- Groups

```javascript
var group = new p5.SVG.Group
```

- toDataURL

### FAQ

#### Performance Issue

I have tested the performance of svg using a demo drawing many circles (a very edge case).
http://zenozeng.github.io/gsoc2015/p5.js/svg-test/

Though the fps is always about 60,
the circles drawn per second varies when circles increases.
(Tested on my laptop, Intel(R) Core(TM) i5-2450M CPU @ 2.50GHz)
At the very first (before drawing 550 circles), about 40+ circles per second.
However, when 1000 circles already exists in svg, only 20+ circles per second.
When it comes to 20000 circles, only about 1 circle per second.
See also: http://zenozeng.github.io/gsoc2015/p5.js/svg-test/svg.log

The performance is not good, but not so bad.
However, performance can be improved via following ways:

- GC invisible elements
    For instance, remove all nodes when `background()` called.

- provide an API in SVG's manner

    That is, move an existing object rather than draw another new object.
    A OOP API for this, for example.


## Part 2 - PDF support for p5.js

基于我现在的项目，然后增加矢量输出。

## Why me?

我是谁？凭什么是我。

## Links

- [Project List](https://github.com/processing/processing/wiki/Project-List)

- [Dealing with SVGs](https://github.com/processing/p5.js/issues/458)

- [Load and Display SVG in processing](https://www.processing.org/examples/loaddisplaysvg.html)

- https://www.mapbox.com/osmdev/2012/11/20/getting-serious-about-svg/

- http://code.tutsplus.com/articles/why-arent-you-using-svg--net-25414

- [Adding SVG support to processing-js](https://annasob.wordpress.com/2010/07/20/adding-svg-support-to-processing-js/)

- http://snapsvg.io/start/
