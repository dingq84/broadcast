const broadcast = new BroadcastChannel("changeColor");

broadcast.onmessage = function (ev) {
  document.body.style.background = ev.data;
};

blocks.forEach((block) => {
  block.onclick = () => {
    const color = block.getAttribute("data-color");
    document.body.style.background = color;
    broadcast.postMessage(color);
  };
});
