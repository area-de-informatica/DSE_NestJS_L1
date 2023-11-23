import { Module } from '@nestjs/common';
import { SongController } from './song.controller';
import { SongService } from './song.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SongSchema } from './schemas/song.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Song', schema: SongSchema }])],
  controllers: [SongController],
  providers: [SongService],
})
export class SongModule {}
