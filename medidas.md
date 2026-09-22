# Estrutura de Responsive Design

## Approach
* **Mobile First**: O desenvolvimento começa focado nas telas menores, adicionando estilos e ajustes progressivamente via *media queries* conforme o tamanho da tela aumenta.

---

## Breakpoints

| Dispositivo | Largura Mínima (`min-width`) | Descrição |
| :--- | :--- | :--- |
| **Smartphone** | `400px` | Telas pequenas (Smartphones em modo retrato) |
| **Tablet** | `769px` | Tablets em modo retrato / Telas médias |
| **Tablet Landscape** | `1024px` | Tablets em modo paisagem / Desktops pequenos |
| **Desktop** | `1240px` | Monitores e telas grandes |

---

## Exemplo de CSS (Media Queries)

```css
/* Estilos Base (Mobile First) */
body {
  font-size: 14px;
}

/* Smartphone */
@media (min-width: 400px) {
  /* ... */
}

/* Tablet */
@media (min-width: 769px) {
  /* ... */
}

/* Tablet Landscape */
@media (min-width: 1024px) {
  /* ... */
}

/* Desktop */
@media (min-width: 1240px) {
  /* ... */
}