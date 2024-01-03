import { Module } from '@nestjs/common';
import { UsersModule } from './routes/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsModule } from './routes/cats/cats.module';

@Module({
	imports: [
		UsersModule,
		CatsModule
		// GraphQLModule.forRoot<ApolloDriverConfig>({
		// 	driver: ApolloDriver,
		// 	autoSchemaFile: true,
		// })
	],
	controllers: [],
	providers: [],
})
export class AppModule { }
