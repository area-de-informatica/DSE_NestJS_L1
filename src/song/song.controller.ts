import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Patch,
} from '@nestjs/common';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}
  // find one by id findOne(id)
  @Get(':id')
  findOne(@Param('id') id: number): string {
    return this.songService.findOne(id);
  }

  @Get()
  findAll(): string {
    return this.songService.findAll();
  }

  @Post()
  create(@Body() createSongDto): string {
    return this.songService.create(createSongDto);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateSong): string {
    return this.songService.update(id, updateSong);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return this.songService.delete(id);
  }
}
