import { MovieEntity } from '../../../domain/entities/movie/movie.entity';

export class MovieDto {
  id: number;
  title: string;
  overview?: string;
  release_date?: string;
  backdrop_path?: string | null;
  poster_path?: string | null;

  static fromEntity(e: MovieEntity): MovieDto {
    return {
      id: e.id,
      title: e.title,
      overview: e.overview,
      release_date: e.releaseDate,
      backdrop_path: e.backdropPath,
      poster_path: e.posterPath,
    };
  }
}
