function detectBrowser(e, url) {
  if (!e) return "unable to detect";
  let i = e.toLowerCase().trim(),
    r = i?.includes("android"),
    n = i.includes("iphone") || i.includes("ipod") || i.includes("ipad"),
    t = i?.includes("macintosh"),
    o = i?.includes("win");
  const linkAndroid = `intent://scan/#Intent;S.browser_fallback_url=${url};end`;
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
      if (t) {
        window.location.replace(linkAndroid);
        return JSON.stringify({ browser: s, OS: "MacOS" });
      }
      if (o) {
        window.location.replace(linkAndroid);
        return JSON.stringify({ browser: s, OS: "Windows" });
      }
      if (r) {
        if (
          s == "instagram" ||
          s == "linkedinapp" ||
          s == "fb" ||
          s == "facebook"
        ) {
          window.location.replace(linkAndroid);
        }
        window.location.replace(linkAndroid);
        return JSON.stringify({ browser: s, OS: "Android" });
      }
      if (n) {
        window.location.replace(linkAndroid);
        return JSON.stringify({ browser: s, OS: "iOS" });
      }
    }
}
const u = detectBrowser(window.navigator.userAgent, window.location.href);
const oa = {
  getBrowser: () => u,
};
// const node = document.createElement("p");
// (node.innerHTML = u), document.getElementById("body").appendChild(node);
