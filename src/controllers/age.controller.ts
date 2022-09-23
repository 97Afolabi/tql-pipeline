import { Request, Response } from "express";

export default class AgeController {
  CURRENT_TIMESTAMP: number;
  constructor() {
    this.CURRENT_TIMESTAMP = Date.now();
  }

  public getAge(req: Request, res: Response): Response {
    const dob = req.query.dob?.toString();

    if (!dob || typeof dob === "undefined") {
      return res.status(400).json({
        status: "error",
        error: "'dob' is required",
      });
    }
    const valid_data = this.validate(dob);

    if (Array.isArray(valid_data)) {
      return res.status(400).json({
        status: "error",
        error: valid_data.join("\n"),
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Process completed",
      dob,
      birth_date: valid_data.toDateString(),
      age: this.getYearDifference(valid_data),
    });
  }

  validate(dob: string): string[] | Date {
    const LOWEST_TIMESTAMP = -2208989615000; // 1900-01-01
    const errors: string[] = [];
    const parsedDob = parseInt(dob.toString());

    if (isNaN(parsedDob)) errors.push("'dob' is invalid");

    if (parsedDob < LOWEST_TIMESTAMP || parsedDob > this.CURRENT_TIMESTAMP) {
      errors.push(
        `'dob' must between range ${LOWEST_TIMESTAMP} and ${this.CURRENT_TIMESTAMP}`
      );
    }

    const dobObject = new Date(parsedDob);
    if (typeof dobObject !== "object") errors.push("'dob' is invalid");

    if (errors.length > 0) {
      return errors;
    }

    return dobObject;
  }

  getYearDifference(dobObject: Date): number {
    const currentDate = new Date(this.CURRENT_TIMESTAMP);
    return currentDate.getFullYear() - dobObject.getFullYear();
  }
}
