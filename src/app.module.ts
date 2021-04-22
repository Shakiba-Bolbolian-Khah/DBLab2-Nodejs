import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobseekersModule } from './jobseekers/jobseekers.module';
import EmpEntity from './db/employer.entity';
import FreelanceEntity from './db/freelancer.entity';
import ProEntity from './db/projects.entity';

@Module({
  imports: [HelloModule,
        JobseekersModule,
        TypeOrmModule.forFeature(
        [EmpEntity, FreelanceEntity, ProEntity],
        ),

        TypeOrmModule.forRoot({
          type: "postgres",     
          host: "localhost",     
          port: 5432,     
          username: "postgres",
          password: "shakiba-db",     
          database: "Jobseeker",
          entities: [
            "dist/db/**/*.js"
          ],
          synchronize: true 
        }),
        JobseekersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}