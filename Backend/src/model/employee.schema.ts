import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Employer } from "./employer.schema";
export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee {
    @Prop({required:true})
  firstName: string;
  @Prop({required:true})
  lastName: string;
  @Prop({required:true})
  email:{ type: String, unique: true };
  @Prop({required:true})
    password: string
    @Prop({required:true})
  employer: Employer;
  @Prop()
  salary: number;
  @Prop()
  totalSpendableAmount: number;
  @Prop()
  bonuses: number;
}
export const EmployeeSchema = SchemaFactory.createForClass(Employee);
