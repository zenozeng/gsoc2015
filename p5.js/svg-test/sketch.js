var seed = 1;
var svg;
var useSvg = window.location.hash.indexOf('svg') > -1;

function setup() {
    document.getElementById('status').innerHTML = "Current using " + (useSvg ? 'SVG' : 'Canvas');
    document.getElementById('switch').onclick = function() {
        useSvg = !useSvg;
        window.location.hash = useSvg ? 'svg' : '';
        window.location.reload();
    };
    if(useSvg) {
        svg = createSVG(800, 200);
        document.getElementById('defaultCanvas').remove();
    } else {
        createCanvas(800, 200);
    }
}

function draw() {
    var x, y;
    x = seed % 1 * 800;
    seed += 0.1;
    y = noise(seed) * 200;
    fill(255);
    if(useSvg) {
        svg.ellipse(x, y, 100, 100);
    } else {
        ellipse(x, y, 100, 100);
    }
}
