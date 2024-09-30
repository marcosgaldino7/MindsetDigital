# Mindset Contabilidade Digital

## Descrição do Projeto

Este projeto é o site da Mindset Contabilidade Digital, uma empresa conduzida por mulheres que oferece serviços de contabilidade principalmente para Acroverder-PE e Buique-PE pretende atender toda região do Agreste Pernambucano, site apresenta informações sobre a empresa, seus serviços, profissionais e como entrar em contato.

## Funcionalidades

* **Página inicial:** Apresenta a empresa e seus principais serviços, com um botão para saber mais.
* **Nossa Empresa:** Descreve a missão, visão e valores da empresa, além de apresentar a equipe de contadoras.
* **Serviços:** Lista os serviços oferecidos, como escrituração contábil, imposto de renda, regularização de CPF e CNPJ, abertura e encerramento de empresas, emissão de certidões e contratos.
* **Contatos:** Mostra os endereços e contatos das filiais em Arcoverde e Buique, incluindo mapas com a localização.
* **Menu de navegação:** Permite navegar facilmente pelas diferentes seções do site.
* **Menu mobile:** Adapta o menu de navegação para dispositivos móveis.
* **Botão WhatsApp:** Botão flutuante para contato rápido via WhatsApp.

## Tecnologias Utilizadas

* **HTML:** Estrutura do site.
* **CSS:** Estilização visual do site.
* **JavaScript:**  Usado para interatividade do menu
* **Font Awesome:** Ícones para elementos visuais.


## Estrutura do Projeto

O projeto está organizado da seguinte forma:

* **index.html:** Contém o código HTML principal do site.
* **css/styles.css:** Contém os estilos CSS do site.
* **css/responsividade.css:** Contém os estilos CSS para responsividade.
* **javascript/scripts.js:** Contém o código JavaScript do site (arquivo não fornecido).
* **images/:** Contém as imagens utilizadas no site, produzidas pelo canvas com auxílio de IA.

## Detalhes da Estilização

**Estilos visuais:**

* O CSS define as cores, fontes e layout do site, com um design moderno e profissional.
* A paleta de cores utiliza tons de azul, cinza e dourado para criar uma identidade visual consistente.
* As fontes utilizadas são "Playfair Display", "Poppins", "Montserrat" e "Bebas Neue", que combinam elegância e legibilidade.
* O layout é responsivo e se adapta a diferentes dispositivos, garantindo uma boa experiência de navegação em desktops, tablets e celulares.

**Responsividade:**

* O arquivo `responsividade.css` contém media queries que ajustam o layout e os estilos para diferentes tamanhos de tela.
* O menu de navegação se transforma em um menu hambúrguer em telas menores, facilitando a navegação em dispositivos móveis.
* As seções do site são reorganizadas e redimensionadas para se ajustarem a telas menores, mantendo a legibilidade e a usabilidade.

**Classes e IDs importantes:**

* `.home-container`: Define o estilo da seção inicial, com uma imagem de fundo e um texto de apresentação.
* `.destaks-container`: Define o estilo da seção de destaques, com três colunas contendo ícones, títulos e descrições.
* `.company-container`: Define o estilo da seção sobre a empresa, com um texto sobre a missão, visão e valores.
* `.professional-container`: Define o estilo da seção de profissionais, com fotos e descrições das contadoras.
* `.services-container`: Define o estilo da seção de serviços, com uma lista de serviços oferecidos.
* `.contacts`: Define o estilo da seção de contatos, com informações de contato das filiais.

## Detalhes da Interatividade

**Interação do menu:**

* O JavaScript é usado para adicionar interatividade ao menu de navegação.
* Ao clicar em um item do menu, a página rola suavemente até a seção correspondente.
* O menu hambúrguer em dispositivos móveis é controlado por JavaScript, mostrando e ocultando o menu quando o ícone é clicado.
* A classe "actived" é adicionada ao item do menu correspondente à seção atualmente visível na tela, destacando a seção ativa durante a rolagem.

**Eventos:**

* O evento "scroll" é usado para monitorar a posição de rolagem da página e atualizar o menu ativo.
* O evento "click" é usado para capturar cliques nos itens do menu e rolar a página até a seção correspondente.
* O evento "DOMContentLoaded" é usado para executar o código JavaScript após o carregamento completo do DOM.

**Manipulação do DOM:**

* O JavaScript manipula o DOM para adicionar e remover a classe "actived" dos itens do menu, destacando o item ativo.
* O JavaScript também manipula o DOM para mostrar e ocultar o menu hambúrguer em dispositivos móveis.

**Observações:**

* O código JavaScript não contém animações, validações ou requisições AJAX.
* Nenhuma biblioteca ou framework JavaScript foi utilizada no projeto.