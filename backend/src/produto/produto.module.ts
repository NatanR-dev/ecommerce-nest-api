import { Module } from '@nestjs/common';
import { ProdutoController } from './produto.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  controllers: [ProdutoController]
})
export class ProdutoModule {}
