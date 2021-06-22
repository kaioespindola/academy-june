import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/shared/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  popularMovies: any;
  firstMovie: any;
  public loading: boolean = false;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this.movieService.getPopularMovies()
      .then(popularMovies => {
        this.popularMovies = popularMovies.results;

        this.movieService.getMovieDetails(this.popularMovies[0].id).then(movieDetail => {
          console.log(movieDetail, 'DETALHES DO FILME PRIMEIRO DA LISTA');
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
      })
      .catch(error => alert(error));
    }, 5000)

  }

}
