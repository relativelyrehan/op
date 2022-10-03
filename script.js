function detectBrowser(e) {
  alert("I am working");
  if (!e) return "unable to detect";
  let i = e.toLowerCase().trim(),
    r = i?.includes("android"),
    n = i.includes("iphone") || i.includes("ipod") || i.includes("ipad"),
    t = i?.includes("macintosh"),
    o = i?.includes("win");

  const link =
    "intent://relativelyrehan.co/terminal#Intent;scheme=http;action=android.intent.action.VIEW;end;";
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
        window.location.href = link;
        return JSON.stringify({ browser: s, OS: "MacOS" });
      }
      if (o) {
        window.location.href = link;
        return JSON.stringify({ browser: s, OS: "Windows" });
      }
      if (r) {
        window.location.href = link;
        return JSON.stringify({ browser: s, OS: "Android" });
      }
      if (n) {
        window.location.href = link;
        return JSON.stringify({ browser: s, OS: "iOS" });
      }
    }
}
detectBrowser(window.navigator.userAgent);
