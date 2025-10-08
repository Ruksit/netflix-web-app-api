import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { MovieRepository } from '../../repositories/movie/movie.interface';
import { MovieEntity } from '../../../domain/entities/movie/movie.entity';

@Injectable()
export class TmdbMovieRepository implements MovieRepository {
  constructor(private readonly http: HttpService) {}

  async getPopular(page = 1): Promise<MovieEntity[]> {
    const { data } = await firstValueFrom(
      this.http.get<{ results: any[] }>('/movie/popular', { params: { page } }),
    );

    return data.results.map((m) => ({
      id: m.id,
      title: m.title,
      overview: m.overview,
      releaseDate: m.release_date,
      backdropPath: m.backdrop_path
        ? `https://image.tmdb.org/t/p/w154${m.backdrop_path}`
        : null,
      posterPath: m.poster_path
        ? `https://image.tmdb.org/t/p/w92${m.poster_path}`
        : null,
    }));
  }
}
