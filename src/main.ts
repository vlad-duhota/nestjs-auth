import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { join } from 'path'
import { existsSync, mkdirSync } from 'fs'
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
	// const app = await NestFactory.create(AppModule)
	const uploadDir = join(process.cwd(), 'uploads')
	if (!existsSync(uploadDir)) {
		mkdirSync(uploadDir)
	}
	// app.use('/uploads', express.static(join(process.cwd(), 'uploads')));  
	const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
	app.useStaticAssets(join(__dirname, '..', 'uploads'), {
	  prefix: '/uploads/',
	});



	app.enableCors()
	app.setGlobalPrefix('api')
	await app.listen(4200)
}
bootstrap()
