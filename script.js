function detectInAppBrowser(ua) {
  ua = ua.toLowerCase().trim();
  const isIOS =
    ua.includes("iphone") || ua.includes("ipod") || ua.includes("ipad");
  const isAndroid = ua.includes("android");

  // iOS Chrome
  if (ua.includes("crios")) {
    return "is_chrome_ios";
  }

  // Facebook
  if (ua.includes("fbios") || ua.includes("fb_iab")) {
    return isIOS
      ? "is_facebook_ios"
      : isAndroid
      ? "is_facebook_android"
      : "is_facebook_unknown";
  }

  // Instagram
  if (ua.includes("instagram")) {
    return isIOS
      ? "is_instagram_ios"
      : isAndroid
      ? "is_instagram_android"
      : "is_instagram_unknown";
  }

  // LINE
  if (ua.includes(" line/")) {
    return isIOS
      ? "is_line_ios"
      : isAndroid
      ? "is_line_android"
      : "is_line_unknown";
  }

  // iOS Safari|Twitter|Slack|Discord|etc
  if (isIOS && /safari\/[0-9.]+$/.test(ua)) {
    return "maybe_safari_ios";
  }

  // Android Chrome|Twitter|Slack|Discord|etc
  if (isAndroid && ua.includes("chrome") && /safari\/[0-9.]+$/.test(ua)) {
    return "maybe_chrome_android";
  }

  return "Not able to figure";
}

const body = document.getElementsByTagName("body");
console.log(body);
const browser = detectInAppBrowser(window.navigator.userAgent);
body[0].innerHTML = browser;
