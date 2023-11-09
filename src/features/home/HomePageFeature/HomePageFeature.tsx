'use client'

import { Image } from '@/common/image'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'
import { MyThemeHomePage } from '@/features/home/HomePageFeature/style'
import { Link } from '@/common/link'
import { IMovieData } from '@/common/interface/interface'

interface IProps {
	movies: IMovieData[]
}

export const HomePageFeature: FC<IProps> = ({ movies }) => {
	return (
		<MyThemeHomePage>
			{movies.map((movie: any) => (
				<Link key={movie.id} href={`/detail/${movie.id}`}>
					<Stack className={'movieItem'}>
						{movie.primaryImage ? (
							<Image
								native={true}
								src={movie.primaryImage.url}
								alt={movie.titleText.text}
							/>
						) : (
							<Image native={true} src={''} alt={'non-image'} />
						)}
						<Typography variant={'h5'}>{movie.titleText.text}</Typography>
						<Typography>{movie.originalTitleText.text}</Typography>
						<Typography>{`Release Year: ${movie.releaseYear.year}`}</Typography>
					</Stack>
				</Link>
			))}
		</MyThemeHomePage>
	)
}
