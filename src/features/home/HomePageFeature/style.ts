import { styled } from '@mui/system'
export const MyThemeHomePage = styled('div')(({ theme }) => ({
	display: 'flex',
	flexWrap: 'wrap',
	flexDirection: 'row',
	justifyContent: 'center',
	'& a': {
		color: '#000'
	},
	'& .movieItem': {
		boxShadow: '2px 2px 12px 2px rgba(0,0,0,0.1)',
		width: 300,
		padding: 10,
		margin: 10
	}
}))
