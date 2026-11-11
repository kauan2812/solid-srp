# SOLID — SRP (Single Responsibility Principle)

Estudo prático do **S** do SOLID: o **Princípio da Responsabilidade Única**.

> "Uma classe deve ter um, e apenas um, motivo para mudar." — Robert C. Martin

## O problema

Um caso clássico de violação do SRP é uma classe `OrderService` que faz tudo sozinha: verifica estoque, calcula o total e processa o pagamento. Qualquer mudança em uma dessas regras (trocar o gateway de pagamento, mudar a regra de cálculo, etc.) obriga a mexer na mesma classe, aumentando o acoplamento e o risco de quebrar o resto.

## A solução

Cada responsabilidade foi extraída para a sua própria classe, e o `OrderProcessorService` apenas **orquestra** o fluxo, recebendo as dependências pelo construtor (injeção de dependência):

| Classe | Responsabilidade |
| --- | --- |
| `Order` | Representa o pedido (uuid e valor) |
| `InventoryChecker` | Verificar o estoque |
| `OrderCalculator` | Calcular o total do pedido |
| `PaymentProcessor` | Processar o pagamento |
| `OrderProcessorService` | Coordenar as etapas do processamento |

```ts
public processOrder(order: Order): void {
  this.inventoryChecker.checkInventory(order);
  this.orderCalculator.calculate(order);
  this.paymentProcessor.process(order);
}
```

Agora, se a forma de pagamento mudar, só o `PaymentProcessor` muda — o resto continua intacto.

## Estrutura

```
srp/
├── index.ts                     # Monta as dependências e processa um pedido
└── src/Order/
    ├── Order.ts
    ├── InventoryChecker.ts
    ├── OrderCalculator.ts
    ├── PaymentProcessor.ts
    └── OrderProcessorService.ts
```

## Como rodar

Requer [Bun](https://bun.com).

```bash
bun install
bun run index.ts
```

## Série SOLID

- **S** — [Single Responsibility Principle](https://github.com/kauan2812/solid-srp) (este repo)
- **O** — [Open/Closed Principle](https://github.com/kauan2812/solid-ocp)
