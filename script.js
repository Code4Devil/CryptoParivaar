function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){

 crsr.style.left=dets.x-12+"px"
 crsr.style.top=dets.y-12+"px"
   
})

// var crsrblr = document.querySelector("#cursorblur")
// document.addEventListener("mousemove",function(dets){

//  crsrblr.style.left=dets.x- 40 +"px"
//  crsrblr.style.top=dets.y-40+"px"
   
// })


var tl = gsap.timeline();

tl

// .from("#loader h1", {
//   x:850,
//   duration:4,
//   // delay:1,
//   stagger:.2,
//   ease: Power3.easeInOut 
// })


.to("#loader",{
  height:0,
  delay:6,
  duration:2,
  ease: Expo.easeInOut 
})

.to("#loader h1",{
  opacity:0,
  delay:-1
})


function canvas(){
  const canvas = document.querySelector("#canvaspage>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
C:\Users\code4\OneDrive\Desktop\CryptoParivaar\Frame\Frame\frame00027.png
./Frame/Frame/frame00001.png
./Frame/Frame/frame00002.png
./Frame/Frame/frame00003.png
./Frame/Frame/frame00004.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00006.png
./Frame/Frame/frame00007.png
./Frame/Frame/frame00008.png
./Frame/Frame/frame00009.png
./Frame/Frame/frame00010.png
./Frame/Frame/frame00011.png
./Frame/Frame/frame00012.png
./Frame/Frame/frame00013.png
./Frame/Frame/frame00014.png
./Frame/Frame/frame00015.png
./Frame/Frame/frame00016.png
./Frame/Frame/frame00017.png
./Frame/Frame/frame00018.png
./Frame/Frame/frame00019.png
./Frame/Frame/frame00020.png
./Frame/Frame/frame00021.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png
./Frame/Frame/frame00005.png

./Frame/Frame/frame00010.png
./Frame/Frame/frame00015.png
./Frame/Frame/frame00020.png
./Frame/Frame/frame00025.png
./Frame/Frame/frame00030.png
./Frame/Frame/frame00035.png
./Frame/Frame/frame00040.png
./Frame/Frame/frame00045.png
./Frame/Frame/frame00050.png
./Frame/Frame/frame00055.png
./Frame/Frame/frame00060.png
./Frame/Frame/frame00065.png
./Frame/Frame/frame00070.png
./Frame/Frame/frame00075.png
./Frame/Frame/frame00080.png
./Frame/Frame/frame00085.png
./Frame/Frame/frame00090.png
./Frame/Frame/frame00095.png
./Frame/Frame/frame00100.png
./Frame/Frame/frame00105.png
./Frame/Frame/frame00110.png
./Frame/Frame/frame00115.png
./Frame/Frame/frame00120.png
./Frame/Frame/frame00125.png
./Frame/Frame/frame00025.png
./Frame/Frame/frame00026.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00028.png
./Frame/Frame/frame00029.png
./Frame/Frame/frame00030.png
./Frame/Frame/frame00031.png
./Frame/Frame/frame00032.png
./Frame/Frame/frame00033.png
./Frame/Frame/frame00034.png
./Frame/Frame/frame00035.png
./Frame/Frame/frame00036.png
./Frame/Frame/frame00037.png
./Frame/Frame/frame00038.png
./Frame/Frame/frame00039.png
./Frame/Frame/frame00040.png
./Frame/Frame/frame00050.png
./Frame/Frame/frame00060.png
./Frame/Frame/frame00070.png
./Frame/Frame/frame00080.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png
./Frame/Frame/frame00027.png




`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#canvaspage`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#canvaspage",
// pin: true,
scroller: `#main`,
start: `top bottom`,
end: `bottom top`,
});
}
canvas()
