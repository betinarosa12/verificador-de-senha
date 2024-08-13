function fazerLogin() {
  let senha = document.getElementById("senha").value;

  if (senha === "") {
    alert("Digite sua senha!");
    return;
  }

  function verificarCaractereEspecial() {
    if ((senha = !senha.match(/^(?=.*[@!#$%^&*()/\\])/))) {
      alert(
        "Senha inválida, a senha deve conter pelo menos um caractere especial."
      );
    }
  }

  function verificarCaracteres() {
    if (senha.length < 8) {
      alert("Senha inválida, a senha deve conter pelo menos 8 caracteres.");
    }
  }

  if (senha.length >= 8 && senha.match(/^(?=.*[@!#$%^&*()/\\])/)) {
    alert("Senha válida!");
    document.getElementById("senha").value = "";
  } else {
    verificarCaracteres() || verificarCaractereEspecial();
  }
}
