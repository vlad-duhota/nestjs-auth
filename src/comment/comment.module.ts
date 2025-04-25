import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from '../models/user.model'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { CommentService } from './comment.service'
import { CommentController } from './comment.controller'
import { CommentModel } from '../models/comment.model'
import { BlogModel } from 'src/models/blog.model'

@Module({
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: CommentModel,
                schemaOptions: {
                    collection: 'Comment',
                },
            },
        ]),
        TypegooseModule.forFeature([
            {
                typegooseClass: UserModel,
                schemaOptions: {
                    collection: 'User',
                },
            },
        ]),
        TypegooseModule.forFeature([
            {
                typegooseClass: BlogModel,
                schemaOptions: {
                    collection: 'Blog',
                },
            },
        ]),
        ConfigModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getJwtConfig,
        }),
    ],
    providers: [CommentService],
    controllers: [CommentController],
    exports: [JwtModule],
})
export class CommentModule {}