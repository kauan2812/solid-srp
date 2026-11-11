import type { InventoryChecker } from "./InventoryChecker";
import type { Order } from "./Order";
import type { OrderCalculator } from "./OrderCalculator";
import type { PaymentProcessor } from "./PaymentProcessor";

export class OrderProcessorService {
  constructor(
    private readonly inventoryChecker: InventoryChecker,
    private readonly orderCalculator: OrderCalculator,
    private readonly paymentProcessor: PaymentProcessor,
  ) {}

  public processOrder(order: Order): void {
    this.inventoryChecker.checkInventory(order);
    this.orderCalculator.calculate(order);
    this.paymentProcessor.process(order);
  }
}
