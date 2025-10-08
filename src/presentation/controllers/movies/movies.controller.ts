import { Controller, Get, Query } from '@nestjs/common';
import { GetPopularMoviesUseCase } from '../../../domain/usecases/get-popular-movies/get-popular-movies';
import { MovieDto } from '../../dto/movie/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly getPopular: GetPopularMoviesUseCase) {}

  @Get('popular')
  async popular(@Query('page') page = '1'): Promise<MovieDto[]> {
    const list = await this.getPopular.execute(Number(page) || 1);
    return list.map(MovieDto.fromEntity);
  }
}
