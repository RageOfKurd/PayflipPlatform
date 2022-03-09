import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './model/employee.schema';
import { Employer, EmployerSchema } from './model/employer.schema';
import { Country, CountrySchema } from './model/country.schema';

@Module({
  imports: [ MongooseModule.forFeature([{ name: "Employee", schema: EmployeeSchema }]),
  MongooseModule.forFeature([{ name: "Employer", schema: EmployerSchema }]),
  MongooseModule.forFeature([{ name: "Country", schema: CountrySchema }]),
  MongooseModule.forRoot('mongodb://localhost:27017/Stream'),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
