export interface TmdbMovie {
  id: number;
  title: string;
  overview?: string;
  release_date?: string;
  backdrop_path?: string | null;
  poster_path?: string | null;
}

export interface TmdbListResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}
