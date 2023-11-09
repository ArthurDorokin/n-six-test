'use client'

import { FC } from 'react'
import { MyThemeDetailPage } from '@/features/detailPage/DetailPageFeature/style'
import { Image } from '@/common/image'
import { Stack, Typography } from '@mui/material'
import { IMovieData } from '@/common/interface/interface'

interface IProps {
	movieDetail: IMovieData
}

export const DetailPageFeature: FC<IProps> = ({ movieDetail }) => {
	const { id, primaryImage, titleText, originalTitleText, releaseYear } =
		movieDetail

	return (
		<MyThemeDetailPage>
			<Stack key={id} className={'movieDetailItem'} flexDirection={'row'}>
				<Stack flexDirection={'row'} className={'image'}>
					{primaryImage ? (
						<Image
							native={true}
							src={primaryImage.url}
							alt={primaryImage.caption?.plainText}
						/>
					) : (
						<Image native={true} src={''} alt={'non-image'} />
					)}
				</Stack>
				<Stack>
					<Typography variant={'h5'}>{titleText.text}</Typography>
					<Typography>{originalTitleText.text}</Typography>
					<Typography>{`Release Year: ${releaseYear.year}`}</Typography>
				</Stack>
			</Stack>
		</MyThemeDetailPage>
	)
}
