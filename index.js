const checkbox = document.querySelector('input[type="checkbox"');
checkbox.onchange = (event) => {
  const { checked } = event.target;
  if (checked) {
    const oldScript = document.scripts.namedItem("noBroadcast");
    document.body.removeChild(oldScript);
    const script = document.createElement("script");
    script.src = "broadcast.js";
    script.id = "broadcast";
    document.body.appendChild(script);
  } else {
    const oldScript = document.scripts.namedItem("broadcast");
    document.body.removeChild(oldScript);
    const script = document.createElement("script");
    script.src = "noBroadcast.js";
    script.id = "noBroadcast";
    document.body.appendChild(script);
  }
};
