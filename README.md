API-Libre Translate
-------------------
https://libretranslate.fabricandocursos.com.br/
Essa API tem somente os idiomas Português, Inglês e Francês.

Código JavaScript/HTML/CSS para consumir a API de tradução e permitir que o usuário insira o texto, selecione as línguas de origem e destino, e veja o
resultado tratado em UTF-8:

Documentação do código:
-----------------------
HTML: Cria uma interface simples com um campo de entrada de texto (input), duas listas suspensas (select) para escolher a língua de origem e destino, e um
botão para acionar a tradução.

CSS: Estiliza a interface com cores e espaçamentos agradáveis.

JavaScript: O código faz uma requisição POST à API de tradução com os parâmetros fornecidos (texto, língua de origem, língua de destino), trata a resposta
e exibe o texto traduzido na página.

Esse código evita problemas com caracteres estranhos ao utilizar UTF-8 no cabeçalho da página HTML (<meta charset="UTF-8">) e no corpo da requisição JSON.
