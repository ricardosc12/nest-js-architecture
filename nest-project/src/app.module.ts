import { Module } from '@nestjs/common';
import { UsersModule } from './routes/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsModule } from './routes/cats/cats.module';
import { DogsModule } from './routes/dogs/dogs.module';
import { AuthModule } from './routes/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ChatModule } from './chat/chat.module';

@Module({
	imports: [
		UsersModule,
		CatsModule,
		DogsModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
		}),
		MongooseModule.forRoot('mongodb://root:toor@127.0.0.1:27017'),
		AuthModule,
		ChatModule
	],
	controllers: [],
})
export class AppModule { }
