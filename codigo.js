
let intentos = 0;
const maxIntentos = 3;
function Login(usuario, contrasena) {
  if (usuario === "usuario" && contrasena === "123456") {
      window.location.href = "operaciones.html"
    return true;
  } else {
    intentos++;
    return false;
  }
}
document.getElementById('btnLogin').addEventListener('click', function () {

  if (intentos >= maxIntentos) {
    document.getElementById('resultado').textContent = "Has superado el número máximo de intentos.";
    return;
  }

  let usuarioInput = document.getElementById('username').value;
  let contrasenaInput = document.getElementById('password').value;
  let resultadoDiv = document.getElementById('resultado');

  if (Login(usuarioInput, contrasenaInput)) {
    resultadoDiv.textContent = "Login exitoso. ¡Bienvenido!";
  } else {
    if (intentos < maxIntentos) {
      resultadoDiv.textContent = `Login incorrecto. Te quedan ${maxIntentos - intentos} intento(s).`;
    } else {
      resultadoDiv.textContent = "Login incorrecto. Has alcanzado el número máximo de intentos.";
    }
  }
})