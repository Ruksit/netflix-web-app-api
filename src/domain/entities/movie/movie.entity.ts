export class MovieEntity {
  id: number;
  title: string;
  overview?: string;
  releaseDate?: string;
  backdropPath?: string | null;
  posterPath?: string | null;
}
