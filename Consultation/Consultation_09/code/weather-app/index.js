const button = document.getElementById("refreshButton");
const BerlinElement = "https://wttr.in/Berlin";
const BerlinParams = {
  3: "",
  m: "",
  lang: "uk",
};

function fetchData(url, params) {
  const queryString = new URLSearchParams(params).toString();
  fetch(`${url}?${queryString}`)
    .then((responce) => responce.text())
    .then((pageText) => {
      const result = document.getElementById("content");
      result.innerHTML = pageText;
    })
    .catch((error) => {
      console.error("Ошибка при выполнении запроса", error);
    });
}
function fetchBerlinWeather() {
  fetchData(BerlinElement, BerlinParams);
}
button.addEventListener("click", fetchBerlinWeather);
