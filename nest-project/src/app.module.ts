import { Module } from '@nestjs/common';
import { UsersModule } from './routes/users/users.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CatsModule } from './routes/cats/cats.module';
import { DogsModule } from './routes/dogs/dogs.module';
import { AuthModule } from './routes/auth/auth.module';
import { CaslModule } from './casl/casl.module';

@Module({
	imports: [
		UsersModule,
		CatsModule,
		DogsModule,
		GraphQLModule.forRoot<ApolloDriverConfig>({
			driver: ApolloDriver,
			autoSchemaFile: true,
		}),
		AuthModule,
		CaslModule,		
	],
	controllers: [],
})
export class AppModule { }
