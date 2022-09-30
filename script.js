function detectBrowser(e) {
  if (!e) return "unable to detect";
  let i = e.toLowerCase().trim(),
    r = i?.includes("android"),
    n = i.includes("iphone") || i.includes("ipod") || i.includes("ipad"),
    t = i?.includes("macintosh"),
    o = i?.includes("win");

  const link =
    "intent://scan/#Intent;scheme=ijijiji://send?#text=text=some%20text;S.browser_fallback_url=https://relativelyrehan.co/;end";

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
        window.location.replace(link);
        return JSON.stringify({ browser: s, OS: "MacOS" });
      }
      if (o) {
        window.location.replace(link);
        return JSON.stringify({ browser: s, OS: "Windows" });
      }
      if (r) {
        window.location.replace(link);
        return JSON.stringify({ browser: s, OS: "Android" });
      }
      if (n) {
        window.location.replace(link);
        return JSON.stringify({ browser: s, OS: "iOS" });
      }
    }
}
const u = detectBrowser(window.navigator.userAgent);
const oa = {
  getBrowser: () => u,
};
// const node = document.createElement("p");
// (node.innerHTML = u), document.getElementById("body").appendChild(node);
