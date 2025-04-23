// // blog.module.ts
// import { Module } from '@nestjs/common'
// import { BlogController } from './blog.controller'
// import { BlogService } from './blog.service'
// import { TypegooseModule } from 'nestjs-typegoose'
// import { BlogModel } from '../user/blog.model'
// import { JwtModule } from '@nestjs/jwt'
// import { AuthModule } from 'src/auth/auth.module'

// @Module({
// 	imports: [TypegooseModule.forFeature([BlogModel]), AuthModule, JwtModule],
// 	controllers: [BlogController],
// 	providers: [BlogService],
// })
// export class BlogModule {}

import { Module } from '@nestjs/common'
// import { AuthService } from './auth.service'
// import { AuthController } from './auth.controller'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModel } from 'src/user/user.model'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJwtConfig } from 'src/config/jwt.config'
import { BlogService } from './blog.service'
import { BlogController } from './blog.controller'
import { BlogModel } from 'src/user/blog.model'

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