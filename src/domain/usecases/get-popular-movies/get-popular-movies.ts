import { Inject, Injectable } from '@nestjs/common';
import {
  MOVIE_REPOSITORY,
  MovieRepository,
} from '../../../data/repositories/movie/movie.interface';
import { MovieEntity } from '../../entities/movie/movie.entity';

@Injectable()
export class GetPopularMoviesUseCase {
  constructor(
    @Inject(MOVIE_REPOSITORY) private readonly repo: MovieRepository,
  ) {}

  execute(page = 1): Promise<MovieEntity[]> {
    return this.repo.getPopular(page);
  }
}
