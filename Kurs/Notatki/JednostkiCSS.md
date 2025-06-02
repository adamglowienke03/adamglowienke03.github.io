# Jednostki w css
## Jednostki względne
Zapewniają większą elastyczność niż wartości px - pikseli, ma to duże znaczenie, gdy strona musi się skalować do wymiarów okna czy ekranu
## REM, EM
### REM
  - jednostka względna do elementu głównego strony czyli elementu html.
  - rem to skrót od "root em"
  - Pseudoklasa `:root` w CSS pozwala odwołać się do elementu głównego, czyli w praktyce jak selektor html.
---
### EM
  - dziedziczona od rodzica
  - gdy body ma ustawione `font-size: 16px;` to elementy znajdujące się w nim przy skorzystaniu z np. `font-size: 1.25em;` wartości się mnożą przez siebie i wtedy `font-size` wynosi `16*1.25=20px`

  ```css
  body{
    font-size: 16px;
  }

  div{
    font-size: 1.25em;
    /* font-size: 20px; 16*1.25 */
  }
  ```
  ## Jednostki względne obszaru roboczego
  - `vh` - 1/100 dostępnej wysokości
  - `vw` - 1/100 dostępnej szerokości
  - `vmin` - 1/100 mniejszej wartości - wysokości lub szerokości
  - `vmax`  1/100 większej wartości - wysokości lub szerokości