import { Injectable } from "@angular/core";
import { Constants } from '../constants';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
    constructor(private http: HttpClient) {}

    getPopularMovies(): Promise<any> {
        return this.http.get(`${Constants.API_BASE_URL}movie/popular?api_key=${environment.api_key}`).toPromise();
    }

    getMovieDetails(movieId: string): Promise<any> {
        return this.http.get(`${Constants.API_BASE_URL}movie/${movieId}?api_key=${environment.api_key}`).toPromise();
    }
}