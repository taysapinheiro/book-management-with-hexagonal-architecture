# Gerenciador de Livros — Arquitetura Hexagonal

Projeto de estudo para aprender **Arquitetura Hexagonal** (Ports and Adapters) na prática, implementando um gerenciador de livros com operações CRUD.

## Objetivo

Este repositório serve como laboratório para entender como separar regras de negócio de detalhes de infraestrutura e interface. O domínio é propositalmente simples — cadastro e gestão de livros — para que o foco fique na organização do código e nos conceitos arquiteturais, não na complexidade funcional.

## Funcionalidades

- **Criar** livros (título, autor, ISBN, ano de publicação)
- **Listar** todos os livros cadastrados
- **Atualizar** informações de um livro existente
- **Remover** livros do acervo

## Arquitetura Hexagonal

A Arquitetura Hexagonal propõe isolar o **núcleo da aplicação** (domínio e casos de uso) das camadas externas (UI, banco de dados, APIs). A comunicação acontece por meio de **portas** (interfaces) e **adaptadores** (implementações concretas).

```
                    ┌─────────────────────────────────┐
                    │         Driving Adapters        │
                    │   (UI Angular, Controllers)     │
                    └───────────────┬─────────────────┘
                                    │
                    ┌───────────────▼─────────────────┐
                    │      Primary Ports (In)         │
                    │   (Use Cases / Application)     │
                    └───────────────┬─────────────────┘
                                    │
                    ┌───────────────▼─────────────────┐
                    │            Domain               │
                    │   (Entities, Value Objects)     │
                    └───────────────┬─────────────────┘
                                    │
                    ┌───────────────▼─────────────────┐
                    │     Secondary Ports (Out)       │
                    │   (Repository interfaces)       │
                    └───────────────┬─────────────────┘
                                    │
                    ┌───────────────▼─────────────────┐
                    │        Driven Adapters          │
                    │  (InMemory, LocalStorage, API)  │
                    └─────────────────────────────────┘
```

### Camadas previstas

| Camada | Responsabilidade | Exemplo |
|--------|------------------|---------|
| **Domain** | Entidades e regras de negócio puras | `Book`, validações de ISBN |
| **Application** | Casos de uso que orquestram o domínio | `CreateBookUseCase`, `ListBooksUseCase` |
| **Ports** | Contratos (interfaces) de entrada e saída | `BookRepository`, `CreateBookPort` |
| **Adapters (In)** | Interface com o usuário | Componentes Angular, formulários |
| **Adapters (Out)** | Persistência e serviços externos | `InMemoryBookRepository`, `LocalStorageBookRepository` |

### Estrutura de pastas sugerida

```
src/
├── app/
│   ├── domain/
│   │   ├── entities/
│   │   │   └── book.ts
│   │   └── value-objects/
│   ├── application/
│   │   └── use-cases/
│   ├── ports/
│   │   ├── in/
│   │   └── out/
│   ├── adapters/
│   │   ├── in/
│   │   │   └── ui/
│   │   └── out/
│   │       └── persistence/
│   └── infrastructure/
│       └── di/          # Injeção de dependências (providers)
```

## Modelo de domínio

Entidade principal: **Book**

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | `string` | Identificador único |
| `title` | `string` | Título do livro |
| `author` | `string` | Nome do autor |
| `isbn` | `string` | Código ISBN |
| `publishedYear` | `number` | Ano de publicação |

## Tecnologias

- [Angular](https://angular.dev/) 20
- TypeScript 5.9
- RxJS

## Pré-requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- npm (incluso com o Node.js)

## Como executar

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm start
# ou
ng serve
```

Acesse `http://localhost:4200/` no navegador. A aplicação recarrega automaticamente ao alterar arquivos fonte.

## Scripts disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm start` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (saída em `dist/`) |
| `npm test` | Testes unitários com Karma/Jasmine |
| `npm run watch` | Build contínuo em modo development |

## Conceitos para explorar neste projeto

- **Inversão de dependência**: o domínio define interfaces; a infraestrutura as implementa
- **Testabilidade**: casos de uso testáveis sem UI nem banco real (repositório in-memory)
- **Substituição de adaptadores**: trocar persistência em memória por LocalStorage ou API sem alterar o domínio
- **Separação de responsabilidades**: cada camada com um motivo claro para existir

## Referências

- [Hexagonal Architecture — Alistair Cockburn](https://alistair.cockburn.us/hexagonal-architecture/)
- [Angular Documentation](https://angular.dev/)
- [Clean Architecture — Robert C. Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Licença

Projeto de estudo pessoal.
