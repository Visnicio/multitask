# MultiTask App

Este repositório contém um **backend Laravel** e um **frontend AngularJS 1.6**.  
O backend roda via **Laravel Sail**, e o frontend será empacotado em um container Docker que serve os arquivos estáticos usando `python -m http.server` na porta 4060.

---

## Pré-requisitos

- Docker (versão ≥ 20.10)
- Docker Compose
- Git

---

1. **Clone o projeto no local desejado**  

## 1. Configuração do Backend (Laravel Sail)
1. Acesse o diretorio do backend `cd multitask-backend`
1. Instale as dependencias do sail
    1. Linux
        ```bash
        docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v $(pwd):/var/www/html \
        -w /var/www/html \
        laravelsail/php81-composer:latest \
        composer update laravel/sail
        ```
        E depois
        ```bash
        docker run --rm \
        -u "$(id -u):$(id -g)" \
        -v $(pwd):/var/www/html \
        -w /var/www/html \
        laravelsail/php81-composer:latest \
        composer install --ignore-platform-reqs
        ```
   2. Windows
        ```bash
        docker run --rm `
        -u "${UID}:${GID}" `
        -v ${PWD}:/var/www/html `
        -w /var/www/html `
        laravelsail/php81-composer:latest `
        composer update laravel/sail
        ```
        E depois
        ```bash
        docker run --rm `
        -v ${PWD}:/var/www/html `
        -w /var/www/html `
        laravelsail/php81-composer:latest `
        composer install --ignore-platform-reqs
        ```
3. Inicie o container
```bash
sail up -d
```


## 2. Configura o Frontend (AngularJS 1.6)
1. Acesse o diretorio do front-end
2. Realize o build da imagem docker
```bash
docker build -t multitask-frontend:latest .
```
3. Inicie o container
```bash
docker run -p 4060:4060 multitask-frontend
```
para acessar o frontend, acesse http://localhost:4060

