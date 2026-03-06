import { vertexShader, fragmentShader } from "./shaders.js";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, SplitText);

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);           // 让 Lenis 更新滚动位置
    ScrollTrigger.update();    // 让 ScrollTrigger 重新计算
    requestAnimationFrame(raf); // 下一帧继续
}
requestAnimationFrame(raf);
lenis.on("scroll", ScrollTrigger.update);