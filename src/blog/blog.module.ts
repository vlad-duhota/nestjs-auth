import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from '../models/user.model'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { BlogService } from './blog.service'
import { BlogController } from './blog.controller'
import { BlogModel } from '../models/blog.model'

@Module({
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: BlogModel,
				schemaOptions: {
					collection: 'Blog',
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
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig,
		}),
	],
	providers: [BlogService],
	controllers: [BlogController],
	exports: [JwtModule],
})
export class BlogModule {}