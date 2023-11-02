import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
  private songs: any[] = [];

  findOne(id: number): string {
    return `Get song with id ${id}`;
  }

  findAll(): string {
    return 'Get all songs';
  }

  create(createSongDto): string {
    this.songs.push(createSongDto);
    return 'Song created successfully';
  }

  update(id, updateSong): string {
    return 'Song updated successfully';
  }

  delete(id): string {
    return 'Song deleted successfully';
  }
}
