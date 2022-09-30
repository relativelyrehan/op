function detectBrowser(ua) {
  if (!ua) return "unable to detect";

  const uaString = ua.toLowerCase().trim();
  const isAndroid = uaString?.includes("android");
  const isIOS =
    uaString.includes("iphone") ||
    uaString.includes("ipod") ||
    uaString.includes("ipad");
  const isMacOS = uaString?.includes("macintosh");
  const isWindows = uaString?.includes("win");
  const allBrowsers = [
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
  ];

  for (let browser of allBrowsers) {
    if (uaString?.includes(browser)) {
      if (isMacOS) {
        return JSON.stringify({
          browser: browser,
          OS: "MacOS",
        });
      }
      if (isWindows) {
        return JSON.stringify({
          browser: browser,
          OS: "Windows",
        });
      }
      if (isAndroid) {
        return JSON.stringify({
          browser: browser,
          OS: "Android",
        });
      }
      if (isIOS) {
        return JSON.stringify({
          browser: browser,
          OS: "iOS",
        });
      }
    }
  }
}

const u = detectBrowser(window.navigator.userAgent);

document.write(u);

const node = document.createElement("p");
node.innerHTML = window.navigator.userAgent;
document.getElementById("body").appendChild(node);
