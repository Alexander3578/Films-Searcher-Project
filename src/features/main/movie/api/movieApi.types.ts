export type GetPopularMovieParams = {
	page?: number
	language?: string
}

export type GetPopularMovieTypes = {
	page: number;
	results: PopularMovieResults[];
	total_pages: number;
	total_results: number;
}

export type PopularMovieResults = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}