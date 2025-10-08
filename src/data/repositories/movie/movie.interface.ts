import { MovieEntity } from '../../../domain/entities/movie/movie.entity';

export interface MovieRepository {
  getPopular(page?: number): Promise<MovieEntity[]>;
}

export const MOVIE_REPOSITORY = 'MovieRepository';
