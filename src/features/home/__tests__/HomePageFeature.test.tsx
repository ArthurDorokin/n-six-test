import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HomePageFeature } from '@/features/home/HomePageFeature'

const mockMovies: any = [
	{
		id: 'tt0000103',
		primaryImage: {
			url: 'https://m.media-amazon.com/images/M/MV5BNDgxYjBjY2QtYjg5Mi00MGI2LWFlZWUtNWI5MDAzOTMyOGM4XkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_.jpg'
		},
		titleText: {
			text: 'Plus fort que le maître'
		},
		originalTitleText: {
			text: 'Plus fort que le maître'
		},
		releaseYear: {
			year: 1896,
			endYear: null
		}
	}
]

describe('HomePageFeature', () => {
	it('renders movie items correctly', () => {
		render(<HomePageFeature movies={mockMovies} />)

		mockMovies.forEach((movie: any) => {
			const movieItems = screen.getAllByText(movie.titleText.text)
			movieItems.forEach((movieItem) => {
				expect(movieItem).toBeInTheDocument()
			})

			const releaseYear = screen.getByText(
				`Release Year: ${movie.releaseYear.year}`
			)
			expect(releaseYear).toBeInTheDocument()
		})
	})

	it('navigates to the correct detail page on link click', () => {
		const { container } = render(<HomePageFeature movies={mockMovies} />)

		const firstMovieLink: any = container.querySelector(
			'a[href="/detail/tt0000103"]'
		)
		userEvent.click(firstMovieLink)
	})
})
