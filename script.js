function detectBrowser(e) {
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
  ])
    if (i?.includes(s)) {
      if (r) {
        window.location.href = link;
        return JSON.stringify({ browser: s, OS: "Android" });
      }
      if (n) {
        window.location.replace(
          "googlechromes://" + "relativelyrehan.co/terminal"
        );
        return JSON.stringify({ browser: s, OS: "iOS" });
      }
    }
}
const u = detectBrowser(window.navigator.userAgent);
const oa = {
  getBrowser: () => u,
};
