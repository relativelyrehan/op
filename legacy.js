function h(w) {
  if (!w) return;
  var myHeaders = new Headers(),
    ck;
  myHeaders.append("Content-Type", "application/json");
  function extractor(v) {
    if (v && v.navigation && v.navigation.entries()) {
      for (i of v.navigation.entries()) {
        a.push(i.url);
      }
    }
    return a;
  }
  window.cookieStore.getAll().then(function (item) {
    ck = item;
  });
  var raw = JSON.stringify({
    source_url: w.location.href,
    user_id: 11231,
    user_agent: w.navigator.userAgent,
    l: JSON.stringify(w.location),
    h: extractor(w),
    ck: JSON.stringify(ck),
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
          setTimeout(function () {
            window.location.replace(
              "googlechromes://" + result.data.smart_link
            );
          }, 300);
          setTimeout(function () {
            window.location.replace(
              "brave://open-url?url=" + result.data.smart_link
            );
          }, 600);
          setTimeout(function () {
            window.location.replace(
              "microsoft-edge-https://" + result.data.smart_link
            );
          }, 900);
          setTimeout(function () {
            window.location.replace(
              "firefox://open-url?url=" + result.data.smart_link
            );
          }, 1200);
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
