// app.module.ts
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypegooseModule } from 'nestjs-typegoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { BlogModule } from './blog/blog.module'
import { getMongoConfig } from './config/mongo.config'
import { UploadModule } from './upload/upload.module';
import { CommentModule } from './comment/comment.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		BlogModule,
		UploadModule,
		CommentModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
