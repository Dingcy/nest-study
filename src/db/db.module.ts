import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schema/user.schema';

const MONGO_MODELS = MongooseModule.forFeature([
  {
    name: 'USER_MODEL',
    schema: UserSchema,
    collection: 'user',
  },
]);

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest', {
      useNewUrlParser: true,
      useUndefinedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }),
    MONGO_MODELS,
  ],
  exports: [MONGO_MODELS],
})
export class DbModule {}
