var script = document.createElement("script");
script.textContent = "console.clear = () => {}; console.dir = () => {};";
document.documentElement.appendChild(script);
