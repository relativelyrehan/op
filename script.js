function detectBrowser(ua) {
  if (!ua) return "unable to detect";

  const uaString = ua.toLowerCase().trim();
  // OPERATING SYSTEMS
  const isAndroid = uaString?.includes("android");
  const isIOS =
    uaString.includes("iphone") ||
    uaString.includes("ipod") ||
    uaString.includes("ipad");
  const isMacOS = uaString?.includes("macintosh");
  const isWindows = uaString?.includes("win");

  // BROWSERS
  const chrome = uaString?.includes("chrome");
  const firefox = uaString?.includes("firefox");
  const opera = uaString?.includes("opera");
  const safari = uaString?.includes("safari");

  if (isWindows) {
    if (chrome) {
      return JSON.stringify({
        browser: "Chrome",
        OS: "Windows",
      });
    }
    if (firefox) {
      return JSON.stringify({
        browser: "Firefox",
        OS: "Windows",
      });
    }
  }

  if (isAndroid) {
    if (chrome) {
      return JSON.stringify({
        browser: "Chrome",
        OS: "Android",
      });
    }
    if (firefox) {
      return JSON.stringify({
        browser: "Firefox",
        OS: "Android",
      });
    }
    if (opera) {
      return JSON.stringify({
        browser: "Opera",
        OS: "Mac OS",
      });
    }
  }

  if (isMacOS) {
    if (chrome) {
      return JSON.stringify({
        browser: "Chrome",
        OS: "Mac OS",
      });
    }
    if (firefox) {
      return JSON.stringify({
        browser: "Firefox",
        OS: "Mac OS",
      });
    }
    if (opera) {
      return JSON.stringify({
        browser: "Opera",
        OS: "Mac OS",
      });
    }
    if (safari) {
      return JSON.stringify({
        browser: "Safari",
        OS: "Mac OS",
      });
    }
  }

  if (isIOS) {
    if (chrome) {
      return JSON.stringify({
        browser: "Chrome",
        OS: "iOS",
      });
    }
    if (firefox) {
      return JSON.stringify({
        browser: "Firefox",
        OS: "iOs",
      });
    }
    if (opera) {
      return JSON.stringify({
        browser: "Opera",
        OS: "iOS",
      });
    }
    if (safari) {
      return JSON.stringify({
        browser: "Safari",
        OS: "iOS",
      });
    }
  }

  return ua;
}

const u = detectBrowser(window.navigator.userAgent);

document.write(u);

const node = document.createElement("p");
node.innerHTML = window.navigator.userAgent;
document.getElementById("body").appendChild(node);
