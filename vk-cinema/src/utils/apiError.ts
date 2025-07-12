export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number = 500) {
    super(message);
    this.name = "";
    this.status = status;

    Object.setPrototypeOf(this, ApiError.prototype);
  }
}