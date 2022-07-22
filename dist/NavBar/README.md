# NavBar

## Tema colorIP

```react
responsive: true

---
   <NavBar
    theme={{
        logoProjeto : "https://github.com/ImpulsoGov/DesignSystem/raw/dev-componente-footer/componentes/estatico/impulso-previne-logo-branco.svg",
        cor : "ColorIP"
    }}
    menu={[
            { label: "Análise", url: "/analise" },
            { label: "Fórum de gestores", url: "/forum" },
            { label: "Sobre", url: "/sobre" },
            { label: "Consultoria", url: "/consultoria" },
            { label: "Contato", url: "/contato" }
          ]
      }
    subtitles = {[
      { label: "Indicadores de Desempenho", url:"/indicadores" },
      { label: "Captação Ponderada", url:"/captacao-ponderada" },
      { label: "Ações Estratégicas", url:"/acoes-estrategicas" }
    ]}

      municipios={[
        { municipio: "Santo André,SP"},
        { municipio: "São Bernardo do Campo,SP"},
        { municipio: "São Caetano,SP"},
        { municipio: "Mauá,SP"},
        { municipio: "Diadema,SP"}
      ]}
    />
```

## Tema Light

```react
responsive: true

---
   <NavBar
    theme={{
        logoProjeto : "https://github.com/ImpulsoGov/DesignSystem/raw/dev-componente-footer/componentes/estatico/impulso-previne-logo-preto.svg",
        cor : "white"
    }}
    menu={[
            { label: "Análise", url: "/analise" },
            { label: "Fórum de gestores", url: "/forum" },
            { label: "Sobre", url: "/sobre" },
            { label: "Consultoria", url: "/consultoria" },
            { label: "Contato", url: "/contato" }
          ]
      }
    subtitles = {[
      { label: "Indicadores de Desempenho", url:"/indicadores" },
      { label: "Captação Ponderada", url:"/captacao-ponderada" },
      { label: "Ações Estratégicas", url:"/acoes-estrategicas" }
    ]}

      municipios={[
        { municipio: "Santo André,SP"},
        { municipio: "São Bernardo do Campo,SP"},
        { municipio: "São Caetano,SP"},
        { municipio: "Mauá,SP"},
        { municipio: "Diadema,SP"}
      ]}
    />
```
