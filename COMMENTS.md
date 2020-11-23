# Decisão da arquitetura utilizada
> Backend
* Procurei desenvolver uma aplicação baseado no conceito de Separation Of Concerns;
* Buscando sempre fazer com que a aplicação seja modular para facilitar a manutenção
*  Database: pasta contendo Migrations e a conexão inicial com o banco
* Models: Contém as classes necessárias para fazer uma correlação com a base de dados
* Routes: Contem as rotas do sistema
* server.js: é o ponto de partida da aplicação
>Banco de Dados
* Utilizado o Postgres
> Frontend
* O requisito era para Utilizar o Vuetify, então o frontend da aplicação seguei o padrao criado pelo próorio framework

# Lista de bibliotecas de terceiros utilizadas
>Bibliotecas do Backend
* cors: permite configurar as permissões que outros domínios possuem ao acessar um recurso em outra URL
* Express
* PG: Driver postgres
* Sequelize: Principal ORM encontrado para Node.js
* Demais bibliotecas para desenvolvimento e linting: 
    1. eslint,
    2. eslint-config-airbnb-base,
    3. eslint-plugin-import
    4. nodemon
    5. sequelize-cli

> Bibliotecas FrontEnd
* axios: para consultas HTTP
* core-js
* vue
* vue-router
* vuetify

# O que você melhoraria se tivesse mais tempo
1. Escreveria Testes
2. Estudaria um pouco mais o Vue para aplicar melhor a componentização;
3. Aprenderia como configurar a conexão do Sequelize através de variáveis de ambiente;
4. Criar a camada Service da API, para desacoplar mais ainda;
5. Estudaria o vee-validate para aprimorar minhas validações de formulário

# Quais requisitos obrigatórios que não foram entregues
[PARCIALMENTE] - Validações de Formulário; Atualmente o CPF não está sendo validado;

P.S: Posso até não ser contratado, mas, essa madrugada resolvendo esse desafio me deixou fascinado com esses novos frameworks, principalmente com o Vue. Achei muito mágico!

Att,
Lucas Balieiro