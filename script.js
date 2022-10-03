function detectBrowser(e, u) {
  if (!e) return "unable to detect";
  if (!u) return "invalid url";
  let i = e.toLowerCase().trim(),
    r = i?.includes("android"),
    n = i.includes("iphone") || i.includes("ipod") || i.includes("ipad");

  const link = `intent://${u}#Intent;scheme=http;action=android.intent.action.VIEW;end;`;
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
        window.location.replace("googlechromes://" + u);
        return JSON.stringify({ browser: s, OS: "iOS" });
      }
    }
}
const u = detectBrowser(
  window.navigator.userAgent,
  window.location.href.split("https://")[1]
);
const oa = {
  getBrowser: () => u,
};
