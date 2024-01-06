import { Module } from '@nestjs/common';
// import { CatsController } from './cats.controller';
import { catsProvider } from './cats.providers';
import { DatabaseModule } from 'src/database/mongo/database.module';
import { CatsResolver } from './cats.resolver';

@Module({
    imports: [DatabaseModule],
    controllers: [
        
    ],
    providers: [...catsProvider, CatsResolver],
})
export class CatsModule { }
