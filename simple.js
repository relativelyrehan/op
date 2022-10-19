function h(w) {
  function i() {
    document.body.style.display = "none";
    setTimeout(() => {
      document.body.style.display = "block";
    }, 250);
  }
  i();
  var _w$navigator, _w$location;
  if (!w) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    user_agent:
      w === null || w === void 0
        ? void 0
        : (_w$navigator = w.navigator) === null || _w$navigator === void 0
        ? void 0
        : _w$navigator.userAgent,
    source_url:
      w === null || w === void 0
        ? void 0
        : (_w$location = w.location) === null || _w$location === void 0
        ? void 0
        : _w$location.href,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(
    "https://helper.openinapp.com/api/v1/link/parse-url-agent",
    requestOptions
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (result && result.data && result.data.inApp) {
        if (result.data.isIOS) {
          window.location.href =
            "googlechromes://" + source_url.replace("https://", "");
        } else {
          window.location.replace(
            `intent://${window.location.href.replace(
              "https://",
              ""
            )}#Intent;scheme=http;action=android.intent.action.VIEW;end;`
          );
        }
      } else {
        return "native";
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

h(window);

// source_url -> 'https://xyz.com'

// IOS:

// res -> 'googlechromes://xyz.com'

// Android:

// res ->

// not inApp

// res -> url : ''

// if(res.url !== '') {
//   window.location.replace(res.url);
// }
