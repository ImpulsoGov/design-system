# Design System

O Design System da Impulso Gov apresenta os padrões de interface que devem ser seguidos por designers e desenvolvedores para garantir a experiência única na interação com os sistemas interativos da Impulso Gov.

A iniciativa potencializa a eficiência e a eficácia dos usuários na utilização de interfaces para acesso aos serviços e aos sistemas da Impulso, possibilitando uma única curva de aprendizado e garantindo a previsibilidade na utilização dos diferentes sistemas.

## Instalação

Instale pela linha de comando:
```
npm i @impulsogov/designsystem
```
ou
```
yarn add @impulsogov/designsystem
```

## Execução em ambiente local 

```
yarn sb
```

## Execução em produção

```
yarn start
```

## Build componentes

```
yarn build
```

## Build aplicação story-book

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
