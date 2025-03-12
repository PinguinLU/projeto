function toggleMode() {
    const html = document.documentElement; // Acessa o elemento <html>
    const img = document.querySelector("#profile img"); // Acessa a imagem do perfil

    // Alterna a classe 'light' no <html>
    html.classList.toggle("light");

    // Verifica se a classe 'light' foi adicionada
    if (html.classList.contains('light')) {
        img.setAttribute('src', './assets/Lucas-light.jpg'); // Altera a imagem para a versão clara
    } else {
        img.setAttribute('src', './assets/Lucas.png'); // Altera a imagem para a versão escura
    }
}
