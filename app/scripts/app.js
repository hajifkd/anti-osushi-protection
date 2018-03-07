var script = document.createElement("script");
script.textContent = "console.clear = () => {}; var y = console.dir; console.dir = x => { try { if (x.tagName.toLowerCase() == 'usingdevtool') return; } catch(e) {}; return y(x); };";
document.documentElement.appendChild(script);
