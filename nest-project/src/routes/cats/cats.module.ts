import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { catsProvider } from './cats.providers';
import { DatabaseModule } from 'src/database/mongo/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CatsController],
    providers: [...catsProvider],
})
export class CatsModule { }
