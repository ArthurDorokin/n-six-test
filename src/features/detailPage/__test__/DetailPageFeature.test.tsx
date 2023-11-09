import React from 'react'
import { render, screen } from '@testing-library/react'
import { DetailPageFeature } from '@/features/detailPage/DetailPageFeature' // Update the import path

const mockMovie: any = {
	id: 'tt0000103',
	primaryImage: {
		url: 'https://m.media-amazon.com/images/M/MV5BNDgxYjBjY2QtYjg5Mi00MGI2LWFlZWUtNWI5MDAzOTMyOGM4XkEyXkFqcGdeQXVyNTI2NTY2MDI@._V1_.jpg',
		caption: {
			plainText: 'Image Caption'
		}
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

jest.mock('next/router', () => ({
	useRouter: () => ({
		query: { id: 'tt0000103' }
	})
}))

describe('DetailPageFeature', () => {
	it('renders movie details correctly', () => {
		render(<DetailPageFeature movieDetail={mockMovie} />)

		const titleText = screen.getByRole('heading', {
			name: /Plus fort que le maître/i
		})
		expect(titleText).toBeInTheDocument()

		const originalTitleText = screen.getByText('Plus fort que le maître', {
			selector: 'p'
		})
		expect(originalTitleText).toBeInTheDocument()

		const releaseYearText = screen.getByText('Release Year: 1896')
		expect(releaseYearText).toBeInTheDocument()

		const image = screen.getByAltText('Image Caption')
		expect(image).toBeInTheDocument()
		expect(image).toHaveAttribute('src', mockMovie.primaryImage.url)
	})
})
