# Gfinp
# O que é Gfinp?
## Gfinp 
É uma plataforma web responsavel por organizar e gerir sua área financeira. O nome é uma sigla para Gestão Finaceira Perssoal.
## Tecnologias Utilizadas
Atenção: Lembrando q todos esses comandos são baseados em cima no sistema operacional linux-ubuntu

* node.js e mondodb   (back-end/banco de dados)
* react.js   (front-end)
* docker e docker-compose (devops)

# Como Rodar o Gfinp
## Subindo o Gfinp
Atenção: Verifique que você tenha o docker e o docker compose intalado na sua maquina para rodar o conteiner do back-end.

[Instale o docker](https://docs.docker.com/engine/install/ubuntu/)

[Instale o docker-compose](https://docs.docker.com/compose/install/)


    docker -v && docker-compose -v



### Back-End 
Construir a imagem

    docker-compose build  

Subir a imagem


    docker-compose up

### Fron-End
Atenção: Verifique que você esteja dentro da pasta raiz do projeto 



    npm run start

## Acessando o sistema web
O sistema estará no seguinte link 
[Gfinp](http://localhost:3000/)



