import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: '用户姓名',
    example: '张三',
  })
  readonly name: string;

  @Prop()
  @ApiProperty({
    description: '用户年龄',
    example: 20,
  })
  readonly age: number;
}
