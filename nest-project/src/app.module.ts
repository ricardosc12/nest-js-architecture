import { Module } from '@nestjs/common';
import { UsersModule } from './routes/users/users.module';
import { DatabaseModule } from './database/mongo/database.module';

@Module({
	imports: [UsersModule],
	controllers: [],
	providers: [],
})
export class AppModule { }
