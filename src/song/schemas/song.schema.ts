import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export interface Song extends Document {
  title: string;
  artist: string;
  duration: number;
}

@Schema({ timestamps: true })
export class Song extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  artist: string;

  @Prop({ required: true })
  duration: number;
}

export const SongSchema = SchemaFactory.createForClass(Song);
