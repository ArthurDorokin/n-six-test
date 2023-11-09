import { styled } from '@mui/system'

export const MyThemeDetailPage = styled('div')(({ theme }) => ({
	'& .movieDetailItem': {
		display: 'flex',
		marginTop: 20,
		'& .image': {
			maxWidth: 400,
			boxShadow: '2px 2px 12px 2px rgba(0,0,0,0.1)',
			marginRight: 20
		}
	}
}))
