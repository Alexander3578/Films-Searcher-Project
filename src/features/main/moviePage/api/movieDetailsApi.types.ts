export type MovieDetailsParams = {
    language?: string
}

export type MovieDetailsType = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: CollectionBelongsType;
	budget: number;
	genres: GenresType[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: CompaniesType[];
	production_countries: CountriesType[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: LanguageType[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export type CollectionBelongsType = {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}

export type GenresType = {
	id: number;
	name: string;
}

export type CompaniesType = {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}

export type CountriesType = {
	iso_3166_1: string;
	name: string;
}

export type LanguageType = {
	english_name: string;
	iso_639_1: string;
	name: string;
}

export type MovieCreditsType = {
	id: number;
	cast: CastType[]
}

export type CastType = {
	adult: boolean;
	gender: number;
	id: number;
	known_for_department: string;
	name: string;
	original_name: string;
	popularity: number;
	profile_path: string;
	cast_id: number;
	character: string;
	credit_id: string;
	order: number;
}