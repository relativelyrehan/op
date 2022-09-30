function detectBrowser(e) {
  if (!e) return "unable to detect";
  let i = e.toLowerCase().trim(),
    r = i?.includes("android"),
    n = i.includes("iphone") || i.includes("ipod") || i.includes("ipad"),
    t = i?.includes("macintosh"),
    o = i?.includes("win");
  for (let s of [
    "facebook",
    "fb",
    "fbios",
    "youtube",
    "telegram",
    "linkedinapp",
    "instagram",
    "opera",
    "edg",
    "chrome",
    "safari",
    "firefox",
    "msie",
    "trident",
  ])
    if (i?.includes(s)) {
      if (t) return JSON.stringify({ browser: s, OS: "MacOS" });
      if (o) return JSON.stringify({ browser: s, OS: "Windows" });
      if (r) return JSON.stringify({ browser: s, OS: "Android" });
      if (n) return JSON.stringify({ browser: s, OS: "iOS" });
    }
}
const u = detectBrowser(window.navigator.userAgent);
console.log(u);
// const node = document.createElement("p");
// (node.innerHTML = u), document.getElementById("body").appendChild(node);
