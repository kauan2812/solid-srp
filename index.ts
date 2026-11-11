import { OrderProcessorService } from "./src/Order/OrderProcessorService";
import { Order } from "./src/Order/Order";
import { InventoryChecker } from "./src/Order/InventoryChecker";
import { OrderCalculator } from "./src/Order/OrderCalculator";
import { PaymentProcessor } from "./src/Order/PaymentProcessor";

const order = new Order("uuid", 10);

const inventoryChecker = new InventoryChecker();
const orderCalculator = new OrderCalculator();
const paymentProcessor = new PaymentProcessor();

const orderProcessorService = new OrderProcessorService(
  inventoryChecker,
  orderCalculator,
  paymentProcessor,
);

orderProcessorService.processOrder(order);
