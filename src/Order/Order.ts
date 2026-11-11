export class Order {
  constructor(
    private readonly uuid: string,
    private readonly amount: number,
  ) {}

  public getUuidd(): string {
    return this.uuid;
  }

  public getAmount(): number {
    return this.amount;
  }
}
