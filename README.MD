# Botão Ativador em React Native 🔘

Este é um projeto simples em **React Native** que simula um botão que alterna entre dois estados: **ativado** e **desativado**. A troca de estado modifica a **cor de fundo** da tela e a **imagem do botão**.

## ✨ Funcionalidades

- Alternância entre dois estados (`On` e `Off`);
- Mudança de cor de fundo (preto ou branco);
- Troca da imagem do botão conforme o estado;
- Comportamento controlado por `useState`.

## 📸 Preview

| Estado OFF | Estado ON |
|------------|-----------|
| ![symbol-off](./assets/pictures/symbol-off.png) | ![symbol-on](./assets/pictures/symbol-on.png) |

---
## 🚀 Como rodar o projeto

1. Clone este repositório

2. Instale as dependências:

```bash
npm install
```

3. Rode o projeto:

```bash
npx run start
```
## 🛠 Tecnologias utilizadas

* React Native
* TypeScript (opcional, se seu projeto usa)
* Expo (caso esteja usando o Expo para facilitar o desenvolvimento)

## 📌 Observações

* As imagens `symbol-on.png` e `symbol-off.png` devem estar corretamente colocadas na pasta `./assets/pictures/`.
* A função `handleSymbol()` alterna o estado `Active` com base no valor anterior, usando `setIsActive(prev => !prev)`.

---

