import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
export type CountryDocument = Country & Document;
@Schema()
export class Country {
  @Prop()
  name: string;
  @Prop()
  personalTax: number;
}
export const CountrySchema = SchemaFactory.createForClass(Country);
