import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './routes/users/users.module';
import { DatabaseModule } from './database/mongo/database.module';

@Module({
	imports: [UsersModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule { }
