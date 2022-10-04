function h(url) {
  if (!url) return;
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    source_url: url,
    user_id: 11231,
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
      if (result?.data?.smart_link) {
        window.location.href = "https://" + result?.data?.smart_link;
      } else {
        return "fail";
      }
    })
    .catch((error) => console.log("error", error));
}

h(window.location.href);
