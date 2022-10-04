function h(w) {
  if (!w) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    source_url: w?.location?.href,
    user_id: 11231,
    user_agent: w?.navigator?.userAgent,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://service.openinapp.com/api/v1/link/generate", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      if (result?.data?.smart_link && result?.data?.inApp) {
        window.location.href = "https://" + result?.data?.smart_link;
      } else {
        return "native";
      }
    })
    .catch((error) => console.log("error", error));
}

h(window);
