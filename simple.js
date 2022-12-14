function h(w) {
  var _w$navigator, _w$location;
  if (!w) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    user_id: "c238826f-5ff5-4dc6-bf5d-4809d2778f83",
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
      if (result && result.data && result.data.url != "") {
        window.location.href = result.data.url.replace("http://", "");
      } else {
        return;
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

h(window);
