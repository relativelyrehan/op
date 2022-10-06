function h(w) {
  var _w$location, _w$navigator;

  if (!w) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    source_url:
      w === null || w === void 0
        ? void 0
        : (_w$location = w.location) === null || _w$location === void 0
        ? void 0
        : _w$location.href,
    user_id: 11231,
    user_agent:
      w === null || w === void 0
        ? void 0
        : (_w$navigator = w.navigator) === null || _w$navigator === void 0
        ? void 0
        : _w$navigator.userAgent,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  fetch(
    "https://service.openinapp.com/api/v1/link/generate-sdk",
    requestOptions
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (result) {
      if (
        result &&
        result.data &&
        result.data.smart_link &&
        result.data.inApp
      ) {
        if (result.data.isIOS) {
          setTimeout(
            () =>
              (window.location.href =
                "googlechromes://" + result.data.smart_link),
            200
          );
          setTimeout(
            () =>
              (window.location.href =
                "x-web-search://?" + result.data.smart_link),
            400
          );
        } else {
          window.location.href = "https://" + result.data.smart_link;
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
