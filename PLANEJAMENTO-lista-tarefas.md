# ✅ Lista de Tarefas com Prioridades e Prazos

Projeto pequeno desenvolvido com **React + Vite + JavaScript + CSS**, com foco principal em praticar JavaScript e React sem depender da criação automática de código por IA.

## 🎯 Objetivo do projeto

Criar um gerenciador de tarefas onde é possível cadastrar, organizar por prioridade, definir prazos e acompanhar o que está pendente, atrasado ou concluído.

O projeto será desenvolvido em etapas. Cada versão deve ser concluída e testada antes de avançar para a próxima.

---

# 🛠️ Tecnologias

- React
- Vite
- JavaScript
- CSS
- LocalStorage (a partir da V4)

### Dependências iniciais

Não instalar bibliotecas adicionais sem necessidade.

A ideia é aprender primeiro usando os recursos básicos do React e do JavaScript.

---

# 📌 Regras de aprendizado

Este projeto também será um exercício de programação.

### 1. Tentar antes de pedir código

Antes de pedir uma solução para a IA, tentar resolver sozinho.

### 2. IA como professora

A IA pode:

- explicar conceitos;
- explicar erros;
- indicar quais conceitos estudar;
- revisar código escrito por mim;
- sugerir exercícios;
- ajudar a encontrar bugs.

Evitar pedir:

> "Faça essa funcionalidade inteira para mim."

Preferir:

> "Eu tentei fazer assim. Onde estou errando?"

### 3. Não avançar sem entender

Uma versão só deve ser considerada concluída quando eu entender razoavelmente o código que escrevi.

### 4. Evitar dependências desnecessárias

O objetivo inicial não é criar o projeto mais sofisticado possível.

O objetivo é aprender.

### 5. Buscar mais independência

Neste projeto, o objetivo é tentar escrever o máximo possível sozinho antes de pedir ajuda, mesmo que surjam dúvidas ou erros pelo caminho — isso é esperado e normal.

---

# 🚀 V1 — Estrutura básica

## Objetivo

Criar a primeira versão funcional da lista de tarefas.

## Funcionalidades

- [ ] Criar a estrutura inicial do projeto com Vite
- [ ] Criar componente principal
- [ ] Criar formulário para cadastrar uma tarefa (título)
- [ ] Exibir tarefas cadastradas
- [ ] Marcar tarefa como concluída (checkbox ou clique)
- [ ] Excluir tarefa
- [ ] Criar layout básico com CSS

## Conceitos para praticar

### JavaScript

- `const`
- `let`
- funções
- arrays
- objetos
- `push`
- condições

### React

- componentes
- JSX
- `useState`
- eventos
- renderização de listas
- `key`
- props

---

# 🔎 V2 — Manipulação de dados

## Objetivo

Trabalhar melhor com arrays e objetos, e introduzir filtros por status.

## Funcionalidades

- [ ] Filtrar tarefas por status (todas / pendentes / concluídas)
- [ ] Pesquisar tarefa por título
- [ ] Contar quantidade de tarefas (total, pendentes, concluídas)
- [ ] Ordenar tarefas (por título ou por ordem de criação)
- [ ] Editar o título de uma tarefa já cadastrada

## Conceitos para praticar

- `map()`
- `filter()`
- `find()`
- `findIndex()`
- `sort()`
- `reduce()`
- funções com parâmetros
- retorno de funções
- operadores ternários

---

# 🏷️ V3 — Prioridades e categorias

## Objetivo

Organizar as tarefas por prioridade e categoria, deixando a lista mais informativa.

## Funcionalidades

- [ ] Selecionar prioridade ao cadastrar (Baixa, Média, Alta)
- [ ] Selecionar categoria ao cadastrar (ex: Trabalho, Estudos, Pessoal, Casa)
- [ ] Filtrar tarefas por prioridade
- [ ] Filtrar tarefas por categoria
- [ ] Destacar visualmente tarefas de prioridade Alta
- [ ] Contar tarefas por categoria

## Conceitos para praticar

- `reduce()` agrupando por chave
- objetos como "dicionário" (categoria → contagem)
- atualização de item específico dentro de um array
- renderização condicional
- composição de componentes

---

# 💾 V4 — Persistência

## Objetivo

Fazer os dados continuarem disponíveis depois de fechar o navegador.

## Funcionalidades

- [ ] Salvar tarefas no `localStorage`
- [ ] Recuperar tarefas ao abrir o sistema
- [ ] Atualizar dados salvos
- [ ] Excluir todas as tarefas do `localStorage` (com confirmação)
- [ ] Criar tratamento para dados inexistentes

## Conceitos para praticar

- `localStorage`
- `JSON.stringify()`
- `JSON.parse()`
- `useEffect()`
- ciclo de vida do componente
- tratamento de dados

---

# 🎨 V5 — Melhorias de interface

## Objetivo

Melhorar a experiência visual sem transformar o projeto em um exercício de biblioteca de UI.

## Funcionalidades

- [ ] Responsividade
- [ ] Dark mode (automático ou manual — decidir na hora)
- [ ] Melhorar cards de tarefa (cores diferentes por prioridade)
- [ ] Estados de formulário (erros de validação visuais)
- [ ] Mensagens quando não existem tarefas
- [ ] Mensagens de confirmação (excluir, concluir)
- [ ] Pequenas animações (ao adicionar, ao concluir, ao excluir)

## Conceitos para praticar

- CSS
- classes condicionais
- estados de interface
- responsividade
- organização de componentes

---

# 📅 V6 — Prazos e datas

## Objetivo

Usar datas para tornar a lista de tarefas mais útil no dia a dia.

## Funcionalidades

- [ ] Definir prazo (data de vencimento) ao cadastrar uma tarefa
- [ ] Exibir o prazo formatado em cada tarefa
- [ ] Destacar tarefas atrasadas (prazo já passou e não está concluída)
- [ ] Destacar tarefas que vencem hoje
- [ ] Destacar tarefas que vencem essa semana
- [ ] Ordenar tarefas por prazo (mais urgente primeiro)
- [ ] Contar quantas tarefas estão atrasadas

## Conceitos para praticar

- `reduce()`
- cálculos
- funções reutilizáveis
- derivação de dados
- organização de lógica
- trabalho com datas (`Date`, `getDate`, `getMonth`, comparação de datas)

---

# 🧩 V7 — Organização do código

## Objetivo

Melhorar a arquitetura do frontend sem alterar o funcionamento.

## Possível estrutura

```text
src/
├── components/
│   ├── FormTarefa.jsx
│   ├── ListaTarefas.jsx
│   ├── CardTarefa.jsx
│   └── ResumoTarefas.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css
```

## Conceitos para praticar

- componentização
- props
- responsabilidades dos componentes
- reutilização
- organização de arquivos
- separação entre interface e lógica

---

# 🏁 Critério para considerar o projeto concluído

O projeto será considerado concluído quando eu conseguir:

1. Criar uma aplicação React do zero.
2. Criar componentes sem depender de código pronto.
3. Manipular arrays e objetos com JavaScript.
4. Trabalhar com estado no React.
5. Criar formulários.
6. Persistir dados no navegador.
7. Trabalhar com datas e comparações de data.
8. Entender o código que escrevi.
9. Corrigir pequenos erros sozinho, com mais independência que no projeto anterior.
10. Saber pesquisar documentação quando necessário.
11. Conseguir explicar como as principais partes do projeto funcionam.

---

# 🚦 Próximo passo

## V1

Começar somente pela estrutura básica.

**Não avançar para V2 antes de concluir e entender a V1.**
