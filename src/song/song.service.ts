import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Song } from './schemas/song.schema';

@Injectable()
export class SongService {
  constructor(@InjectModel('Song') private readonly songModel: Model<Song>) {}

  async findOne(id: number): Promise<Song> {
    const room = await this.songModel.findById({ _id: id }).exec();
    return room;
  }

  async findAll(): Promise<Song[]> {
    const songs = await this.songModel.find().exec();
    return songs;
  }

  async create(createSongDto): Promise<{}> {
    const createdSong = new this.songModel(createSongDto);
    return createdSong.save();
  }

  async update(id, updateSong): Promise<{}> {
    const updatedSong = await this.songModel.findByIdAndUpdate(id, updateSong, {
      new: true,
    });
    return updatedSong;
  }

  async delete(id): Promise<{}> {
    const deletedSong = await this.songModel.findByIdAndRemove(id);
    return deletedSong;
  }
}
