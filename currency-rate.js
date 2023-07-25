function getCurrencyRate() {
  // Cria uma nova requisição HTTP.
  var request = new XMLHttpRequest();

  // Define a URL da API de cotações.
  request.open("GET", "https://api.exchangerate-api.com/latest?base=USD");

  // Envia a requisição.
  request.send();

  // Quando a resposta for recebida, trata-a.
  request.onload = function() {
    if (request.status === 200) {
      // Obtém o objeto JSON da resposta.
      var response = JSON.parse(request.responseText);

      // Obtém a taxa de câmbio para o dólar americano.
      var rate = response.rates.USD;

      // Exibe a taxa de câmbio no elemento HTML com o ID `currency-rate`.
      document.getElementById("currency-rate").innerHTML = rate;
    } else {
      // Exibe uma mensagem de erro.
      document.getElementById("currency-rate").innerHTML = "Erro ao obter a taxa de câmbio";
    }
  };
}

// Chama a função `getCurrencyRate()` a cada minuto.
setInterval(getCurrencyRate, 60000);
