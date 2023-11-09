export interface IImage {
	id: string
	width: number
	height: number
	url: string
	caption: {
		plainText: string
		__typename: string
	}
	__typename: string
}

export interface ITitleType {
	text: string
	id: string
	isSeries: boolean
	isEpisode: boolean
	__typename: string
}

export interface ITitleText {
	text: string
	__typename: string
}

export interface IYearRange {
	year: number
	endYear: number | null
	__typename: string
}

export interface IMovieData {
	_id: string
	id: string
	primaryImage: IImage
	titleType: ITitleType
	titleText: ITitleText
	originalTitleText: ITitleText
	releaseYear: IYearRange
	releaseDate: null
}
