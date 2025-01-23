const elements = document.querySelectorAll(".artist");

elements.forEach((element) => {
  element.addEventListener("mousemove", (e) => {

    const rect = element.getBoundingClientRect();
    const scaleX = rect.width / element.offsetWidth;
    const scaleY = rect.height / element.offsetHeight;

    const x = (e.clientX - rect.left) / scaleX;
    const y = (e.clientY - rect.top) / scaleY;

    element.style.setProperty("--x", x);
    element.style.setProperty("--y", y);
  });
});
