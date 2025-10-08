import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { MoviesController } from './presentation/controllers/movies/movies.controller';
import { TmdbMovie } from './data/tmdb-adapter/tmdb-movie/tmdb-movie';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MoviesModule],
  controllers: [AppController, MoviesController],
  providers: [AppService, TmdbMovie],
})
export class AppModule {}
