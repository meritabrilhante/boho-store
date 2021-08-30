# Boho Store

![Cover (1)](https://user-images.githubusercontent.com/52331000/131263507-d73f67e1-8633-4cf4-a8d8-8b6f0ff37203.png)

 
## Overview

Aplicação desenvolvida interdisciplinarmente para as disciplinas de Lógica l e Construção de Páginas para a Internet l, do curso Sistemas para Internet do Instituto Federal de Ciência e Tecnologia de Brasília como projeto final de ambas as disciplinas. 
A proposta é o desenvolvimento de um site que utilize conceitos de HTML, CSS e Javascript. 

## 💻 Project

Um e-commerce desenvolvido em HTML e estilizado em CSS que altera o conteúdo das páginas dinamicamente atráves do Javascript.<br>
Os conceitos de CSS que escolhemos para nortear a estilização do site são flexbox e grid.<br>
As informações dos produtos estão armazenadas em memória, sendo um array de categorias, onde cada categoria possui um array de produtos.<br> 
Os produtos são listados atráves uma iteração nesse array.<br>
Dentro do HTML são marcadas através de ID, as tags para onde serão enviadas as informações desses produtos.<br>
Essas informações são armazenadas a partir do clique, no sessionstorage do navegador como strings (utilizando o JSON Stringy que transforma objetos js para strings) e enviados para a tela de produto.<br> 
Na tela de produto, foi criada uma verificação para a forma de pagamento selecionada, onde dependendo de qual input está ativo, será mostrado suas respectivas informações.<br> 
Além disso, também foi criada uma newsletter, que armazena o email no localstorage.<br> 

Para a responsividade foi utilizado os grids e tamanhos de containers do Bootstrap.<br>

## 👩 Contributors 

Isamara Galvão - Desenvolveu todo o HTML e estilizou o projeto com CSS;<br>
Rita Brilhante - Desenvolveu a lógica e as funções Javascript; 

## 👨‍💻 Technologies

- HTML
- CSS
- JAVASCRIPT

## Figma
https://www.figma.com/file/MaK0UugHt3HE3kSf1KH3ym/Boho-Sotre?node-id=0%3A1


## 🚀 How to use

```bash
# Clone this repository
$ git clone git@github.com:rtcstr/boho-store.git

```
 ## 🔮 Deploy 
 https://vigorous-heyrovsky-ab3d7a.netlify.app/
 
