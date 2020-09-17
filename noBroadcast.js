const blocks = document.querySelectorAll(".block");
blocks.forEach((block) => {
  block.onclick = () => {
    const color = block.getAttribute("data-color");
    document.body.style.background = color;
  };
});
