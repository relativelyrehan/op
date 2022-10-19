function h(w) {
  var _w$location, _w$navigator;

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
      if (
        result &&
        result.data &&
        result.data.smart_link &&
        result.data.inApp
      ) {
        window.location.replace("googlechromes://" + window.location.href);
      } else {
        return "native";
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

h(window);
