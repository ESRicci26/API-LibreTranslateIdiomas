document.getElementById("translateButton").addEventListener("click", async function() {
    const text = document.getElementById("textInput").value;
    const sourceLang = document.getElementById("sourceLang").value;
    const targetLang = document.getElementById("targetLang").value;

    if (text === "") {
        alert("Por favor, insira o texto a ser traduzido.");
        return;
    }

    const response = await fetch("https://libretranslate.fabricandocursos.com.br/translate", {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: sourceLang,
            target: targetLang,
            format: "text",
            alternatives: 3,
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
    });

    const data = await response.json();

    // Tratar a resposta e exibir o texto traduzido
    const result = data.translatedText;
    document.getElementById("resultText").textContent = result;
});
