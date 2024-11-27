import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('H.O.I.K.S')
    .setDescription('The Hoiks API description')
    .setVersion('1.0')
    .addTag('kiosk')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    //preflightContinue: true,
  })
  // app.use(
  //   helmet({
  //     crossOriginResourcePolicy: { policy: "cross-origin" }, // CORS 허용
  //     crossOriginEmbedderPolicy: true, // 리소스 임베드 허용
  //   })
  // );
  await app.listen(3000);
}
bootstrap();