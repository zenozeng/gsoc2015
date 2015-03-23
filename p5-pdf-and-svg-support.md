# PDF/SVG support for p5.js

## SVG

### 首先，是否需要一个 createSVG()?

~~我觉得不需要，因为 Canvas 动画与 SVG 动画大不相同，
不像 Canvas, SVG 如果不断地绘制的话，负担是非常重，会有极其大量的元素被创建。
而不断的重绘画布遮盖旧的组分，却恰恰是 processing (以及 p5.js) 的语法特点。
这种语法天然决定了这样子做 SVG 画布是会显得有些非常低效而且怪异的。
以我个人之浅见，SVG操作的是元素的移动、filter之类，
而canvas则是直接像画布一样画画。~~

不，可能有必要。 draw 方法每次执行的时候我重新初始化一个 svg 就是了，开销也不会大到哪里去的。

所以我个人认为我们不需要实现一个像

https://www.mapbox.com/osmdev/2012/11/20/getting-serious-about-svg/


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
