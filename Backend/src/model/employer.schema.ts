import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Country } from "./country.schema";
export type EmployerDocument = Employer & Document;
@Schema()
export class Employer {
@Prop({required:true})
  name: string;
  @Prop({required:true})
  email:{ type: String, unique: true };
  @Prop({required:true})
  password: string
  @Prop({required:true})
  country: Country;
  @Prop()
  address: string;
}
export const EmployerSchema = SchemaFactory.createForClass(Employer);
