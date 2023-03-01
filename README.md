# Design System

*******
## :mag_right: Índice
1. [Contexto](#contexto)
2. [Estrutura do repositório](#estrutura)
3. [Rodando em produção](#rodando)
4. [Instruções para instalação e acesso ao projeto](#instalacao)
6. [Contribua](#contribua)
7. [Licença](#licenca)
*******

<div id='contexto'/>  

## :rocket: Contexto

O Design System da Impulso Gov apresenta os padrões de interface que devem ser seguidos por designers e desenvolvedores para garantir a experiência única na interação com os sistemas interativos da Impulso Gov.

A iniciativa potencializa a eficiência e a eficácia dos usuários na utilização de interfaces para acesso aos serviços e aos sistemas da Impulso, possibilitando uma única curva de aprendizado e garantindo a previsibilidade na utilização dos diferentes sistemas.

<div id='estrutura'/>  

 ## :milky_way: Estrutura do repositório


```plain
root
├─ .storybook
├─ componentes
├─ docs

```

- componentes: componentes para serem consumidos pelas aplicações da ImpulsoGov
- .storybook: arquivos de confuguração do storybook
- docs: páginas de documentação no storybook

*******
 <div id='rodando'/> 
 
## :gear: Rodando em produção

As nossas aplicações são rodadas na [vercel](https://vercel.com/).

*******

<div id='instalacao'/> 

 ## 🛠️ Instruções para instalação e acesso ao projeto
 
### Instale pela linha de comando:

```
yarn add @impulsogov/designsystem
```

### Execução em ambiente local 

```
yarn sb
```

### Execução em produção

```
yarn start
```

### Build componentes

```
yarn build
```

### Build aplicação storybook

```
yarn build-storybook
```

## Versionamento

O design-system segue as praticas de versionamento semantico e adota as seguintes convenções:

### Patch

- Alterações de componentes sem mudanças nas propriedades (Mantém retro-compatibilidade)

### Minor

- Adiciona novos compomentes

### Major

- Mudanças estruturais, como mudança de tecnologia, ferramentas, estrutura de diretório e retro-compatibilidade.

## Documentação

A [documentação](https://designsystem.impulsogov.org/?path=/story/docs-introdu%C3%A7%C3%A3o--page) foi implementada com o [storybook](https://storybook.js.org/), nela você encontra:
- lista de componentes disponiveis
- pre-visualização
- exemplo de consumo
- descrição e orientações das propriedades de cada componente
- fundamentos visuais :
  - paleta de cores
  - tipografia
  - espaçamentos
  - logos

<div id='contribua'/>  

## Publicação

- Publicar pacote apenas a partir da branch main.

## :left_speech_bubble: Contribua
Sinta-se à vontade para contribuir em nosso projeto! Abra uma issue ou envie PRs.

*******
<div id='licenca'/>  

## :registered: Licença
MIT (c) 2020, 2022 Impulso Gov <contato@impulsogov.org>
