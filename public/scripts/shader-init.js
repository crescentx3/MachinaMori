shaderWebBackground.shade({
  shaders: {
    image: {
      uniforms: {
        iTime: (gl, loc) => gl.uniform1f(loc, performance.now() / 1000),
        iResolution: (gl, loc) => gl.uniform2f(loc, window.innerWidth, window.innerHeight)
      }
    }
  }
});
let mousePos = { x: 0, y: 0 };
window.addEventListener("mousemove", (event) => {
  mousePos.x = event.clientX;
  mousePos.y = event.clientY;
});