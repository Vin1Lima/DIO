# 🦸 Classificador de Nível de Herói

Desafio da trilha **Formação Lógica de Programação** da [DIO](https://web.dio.me).

## Objetivo

Guardar o nome e a experiência (XP) de um herói e, com uma estrutura de decisão, mostrar o nível dele:

| XP | Nível |
|---|---|
| até 1.000 | Ferro |
| 1.001 a 2.000 | Bronze |
| 2.001 a 5.000 | Prata |
| 5.001 a 7.000 | Ouro |
| 7.001 a 8.000 | Platina |
| 8.001 a 9.000 | Ascendente |
| 9.001 a 10.000 | Imortal |
| 10.001 ou mais | Radiante |

## Conceitos usados

- **Variáveis**: `nome`, `xp` e `nivel`
- **Operadores**: comparação (`<=`, `<`) e incremento (`i++`)
- **Laço de repetição**: um `for` que passa por uma lista de heróis
- **Estrutura de decisão**: uma cadeia de `if / else if / else`

## Como executar

Com o [Node.js](https://nodejs.org) instalado:

```bash
node index.js
```

## Saída

```
O Herói de nome Arthas está no nível de Ferro
O Herói de nome Jaina está no nível de Bronze
O Herói de nome Thrall está no nível de Prata
O Herói de nome Sylvanas está no nível de Ouro
O Herói de nome Uther está no nível de Platina
O Herói de nome Illidan está no nível de Ascendente
O Herói de nome Kael está no nível de Imortal
O Herói de nome Medivh está no nível de Radiante
```
