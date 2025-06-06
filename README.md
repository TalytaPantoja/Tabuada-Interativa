Este projeto gera a tabuada de 1 a 10 de um número digitado pelo usuário, exibindo os resultados dinamicamente na tela ao clicar em um botão ou pressionar Enter.

## Funcionalidade

- O usuário digita um número no campo de entrada.
- Ao clicar no botão ou pressionar Enter, é exibida a tabuada.
- O conteúdo da tabuada é gerado dinamicamente na página, sem recarregar.

## Conceitos Praticados

### HTML
- Estrutura semântica com `<main>`, `<form>`, `<input>`, `<button>`, e `<div>`.
- Atributos acessíveis como `placeholder`, `id`, `class`, e `type`.
- Conexão com arquivos externos de **CSS** e **JavaScript**.

### CSS
- Uso de **variáveis CSS** com `:root` para personalizar cores e fontes.
- Aplicação de **gradientes de fundo** com `linear-gradient`.
- Estilização de componentes com `display: flex`, alinhamento central, e responsividade básica.
- Criação de classes reutilizáveis (`.equacao`, `.container-input`, etc.).
- Estilização minimalista e moderna com **bordas arredondadas**, **fontes do Google Fonts** e organização visual.

### JavaScript
- Seleção de elementos com `getElementById` e `querySelector`.
- Manipulação do DOM com `createElement`, `textContent`, `appendChild`, e `innerHTML`.
- Conversão de string para número com `Number()`.
- Validação de entrada com `isNaN()`.
- Criação de uma **função reutilizável** para calcular e exibir a tabuada.
- Uso de `addEventListener` para eventos de clique e submit (Enter).
- Prevenção do comportamento padrão do formulário com `event.preventDefault()`.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Google Fonts (Krona One, Montserrat, Numans)
