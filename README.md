# Gulp Automation

O Gulp é um automatizador de tarefas rápido na sua execução, simples de usar e de fácil aprendizado. Ele usa como base a plataforma node.js para interpretar seu código e requer conhecimento de Javascript para criar suas tarefas.

Essas tarefas podem ser qualquer coisa que você precisa fazer de forma repetida ou que vai consumir muito do seu tempo. Por exemplo, minificar imagem, copiar diretórios, concatenar arquivos, compilar Javascript etc. Todas essas são tarefas que, se forem feitas manualmente, irá consumir muito tempo e trabalho; e o Gulp cuida de tudo isso.

# Características do Gulp

* Fácil de usar: Com uma instalação simples e poucas linhas de código, você executa processos trabalhosos com apenas uma linha de comando.
* Eficiente: Aproveita a tecnologia Stream do Node.js, sem construir arquivos intermediários em disco e usa o mecanismo de pipeline do unix.
* Fácil de aprender: Basicamente sabendo um pouco sobre o mecanismo de pipeline do unix, Javascript e entendendo a estrutura do gulpfile que é simples, você estará pronto para criar tarefas.

# Instalação

Você precisa do gulp instalado globalmente:

```sh
$ npm i -g gulp
```
Depois de instalar o gulp de forma global, você precisa fazer o clone do projeto e a instalação das dependências:

```sh
$ git clone https://github.com/ogawaryu/gulp-automation.git
$ cd gulp-automation
$ npm install
```

Agora é só se divertir!