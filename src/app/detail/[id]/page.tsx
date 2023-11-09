import { WrapPage } from '@/features/page'
import { DetailPageFeature } from '@/features/detailPage/DetailPageFeature'
import { Metadata } from 'next'
import { customFetch } from '@/utils/function/customFetch'

export const metadata: Metadata = {
	title: 'Detail page',
	description: 'Detail page description'
}

export default async function DetailPage({
	params
}: {
	params: { id: string }
}) {
	const movieDetail = await customFetch(`/titles/${params.id}`, {
		method: 'GET',
		cache: 'no-store'
	})

	return (
		<WrapPage>
			<DetailPageFeature movieDetail={movieDetail.results} />
		</WrapPage>
	)
}
