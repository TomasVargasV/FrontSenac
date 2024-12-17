function validaBusca() {
  if (document.querySelector("#input").value !== "") {
    let pesquisa = document.querySelector("#input").value;
    window.location.href = "http://www.google.com.br/search?q=" + pesquisa;
  }
}
