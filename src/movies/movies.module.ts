import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { MoviesController } from '../presentation/controllers/movies/movies.controller';
import { GetPopularMoviesUseCase } from '../domain/usecases/get-popular-movies/get-popular-movies';
import { MOVIE_REPOSITORY } from '../data/repositories/movie/movie.interface';
import { TmdbMovieRepository } from '../data/tmdb-adapter/tmdb-movie/tmdb-movie';

@Module({
  imports: [
    ConfigModule,

    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const baseURL =
          config.get<string>('TMDB_BASE_URL') || 'https://api.themoviedb.org/3';
        const token = config.get<string>('TMDB_READ_ACCESS_TOKEN');
        const apiKey = config.get<string>('TMDB_API_KEY'); // optional

        return {
          baseURL,
          headers: {
            accept: 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          params: !token && apiKey ? { api_key: apiKey } : undefined,
          timeout: 8000,
        };
      },
    }),
  ],
  controllers: [MoviesController],
  providers: [
    GetPopularMoviesUseCase,

    { provide: MOVIE_REPOSITORY, useClass: TmdbMovieRepository },
  ],
})
export class MoviesModule {}
