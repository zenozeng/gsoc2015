# PDF/SVG support for p5.js

## SVG

### 首先，是否需要一个 createSVG()?

我觉得不需要，因为 Canvas 动画与 SVG 动画大不相同，
不像 Canvas, SVG 如果不断地绘制的话，负担是非常重，会有极其大量的元素被创建。
而不断的重绘画布遮盖旧的组分，却恰恰是 processing (以及 p5.js) 的语法特点。
这种语法天然决定了这样子做 SVG 画布是会显得有些非常低效而且怪异的。
以我个人之浅见，SVG操作的是元素的移动、filter之类，
而canvas则是直接像画布一样画画。

但是有个缺点就是，比如

I have tested the performance of svg using a demo drawing many circles.
[这里补充一个链接]
Though the fps is always about 60,
the circles drawn per second varies when circles increases.
(Tested on my laptop, Intel(R) Core(TM) i5-2450M CPU @ 2.50GHz)
At the very first (before drawing 550 circles), about 40+ circles per second.
However, when 1000 circles already exists in svg, only 20+ circles per second.
When it comes to 20000 circles, only about 1 circle per second.
[这里补充log链接]


利用 Canvas API 来模拟好了。

#### SVG 有什么优势呢？

- 有现成的工具链，可以导出到 Inkscape 或者 AI 来进行接下来的艺术创作

- 矢量，可以用于网页的无损缩放 (Image scaling)

- resolution independence and browser agnosticism

    SVG offers a way to do full resolution graphical elements, no matter what size screen, what zoom level, or what resolution your user's device has

- Accessibility

    SVGs are accessible; text and drawing elements are machine-readable so screen readers can other devices can parse the images. 上面的文字将会是可以选择的。

### Export SVG

### PShape

### loadShape

Load SVG and draw it in current canvas.

```javascript
function preload() {
    loadImage('hello.svg');
}

var bot;

function setup() {
    // do something here
}

function draw() {
}
```

### Update

## PDF

基于我现在的项目，然后增加矢量输出。

## FAQ

### Why SVG? We already had canvas.



### Why add support for PDF/SVG together?

他们非常统一、相似，一起做可以节省很多时间。

### Why me?

我是谁？凭什么是我。

### Something Else

I think the syntax of processing (and p5.js) is more canvas like,
and is somehow im

## Links

- [Project List](https://github.com/processing/processing/wiki/Project-List)

- [Dealing with SVGs](https://github.com/processing/p5.js/issues/458)

- [Load and Display SVG in processing](https://www.processing.org/examples/loaddisplaysvg.html)

```processing
// The next line is needed if running in JavaScript Mode with Processing.js
/* @pjs preload="bot1.svg"; */

PShape bot;

void setup() {
  size(640, 360);
  // The file "bot1.svg" must be in the data folder
  // of the current sketch to load successfully
  bot = loadShape("bot1.svg");
}

void draw(){
  background(102);
  shape(bot, 110, 90, 100, 100);  // Draw at coordinate (110, 90) at size 100 x 100
  shape(bot, 280, 40);            // Draw at coordinate (280, 40) at the default size
}
```

- https://www.mapbox.com/osmdev/2012/11/20/getting-serious-about-svg/

- http://code.tutsplus.com/articles/why-arent-you-using-svg--net-25414

- [Adding SVG support to processing-js](https://annasob.wordpress.com/2010/07/20/adding-svg-support-to-processing-js/)
