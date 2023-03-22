import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { NovelsModule } from './modules/models/novels/novels.module';

import { TypeOrmModule } from '@nestjs/typeorm';

import { Novel } from './modules/models/novels/entities/novel.entity';
import { LoggerMiddleware } from './commons/common/logger/logger.middleware';
import { AuthModule } from './modules/functions/auth/auth.module';
import { Genre } from './modules/models/genres/entities/genre.entity';
import { Quiz } from './modules/models/quizs/entities/quiz.entity';
import { Tag } from './modules/models/tags/entities/tag.entity';
import { User } from './modules/models/users/entities/user.entity';
import { Profile } from './modules/models/profiles/entities/profile.entity';
import { UsersModule } from './modules/models/users/users.module';
import { TagsModule } from './modules/models/tags/tags.module';
import { GenresModule } from './modules/models/genres/genres.module';
import { QuizsModule } from './modules/models/quizs/quizs.module';
import { ProfilesModule } from './modules/models/profiles/profiles.module';
import { LongReviewsModule } from './modules/models/long-reviews/long-reviews.module';
import { ShortReviewsModule } from './modules/models/short-reviews/short-reviews.module';
import { FileModule } from './modules/functions/file/file.module';
import { Coupon } from './modules/models/coupons/entities/coupon.entity';
import { AdminModule } from '@adminjs/nestjs';
import AdminJS from 'adminjs';
import * as AdminJSTypeorm from '@adminjs/typeorm';
import { ShortReview } from './modules/models/short-reviews/entities/short-review.entity';
import { LongReview } from './modules/models/long-reviews/entities/long-review.entity';
import { Page } from './modules/models/pages/entities/page.entity';

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: 3306,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DBNAME,
      entities: [
        Genre,
        Novel,
        Quiz,
        Tag,
        User,
        Profile,
        Coupon,
        ShortReview,
        LongReview,
        Page,
      ],
      synchronize: true,
    }),
    NovelsModule,
    UsersModule,
    TagsModule,
    GenresModule,
    QuizsModule,
    ProfilesModule,
    LongReviewsModule,
    ShortReviewsModule,
    AuthModule,
    FileModule,
    AdminModule.createAdminAsync({
      useFactory: () => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [
            Genre,
            Novel,
            Quiz,
            Tag,
            User,
            Profile,
            Coupon,
            ShortReview,
            LongReview,
            Page,
          ],
        },
        auth: {
          authenticate,
          cookieName: 'adminjs',
          cookiePassword: 'secret',
        },
        sessionOptions: {
          resave: true,
          saveUninitialized: true,
          secret: 'secret',
        },
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  private readonly isDev: boolean = process.env.MODE === 'dev' ? true : false;
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
AdminJS.registerAdapter({
  Resource: AdminJSTypeorm.Resource,
  Database: AdminJSTypeorm.Database,
});
