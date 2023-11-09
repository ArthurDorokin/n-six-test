import ImageNext, { ImageProps } from 'next/image'

interface IProps {
	src: string
	native: boolean
	alt: string
}

export const Image = ({
	src,
	alt,
	native = false,
	...props
}: IProps & ImageProps) => {
	const checkEmptySrc = typeof src === 'string' && src.trim() === ''
	if (checkEmptySrc) {
		src = '/../assets/images/no-image.svg'
	}

	return (
		<>
			{native ? (
				<picture>
					<img
						src={src}
						alt={alt}
						style={{
							width: '100%',
							height: '100%',
							objectFit: 'contain'
						}}
						loading="lazy"
					/>
				</picture>
			) : (
				<ImageNext src={`${src}`} alt={alt} priority {...props} />
			)}
		</>
	)
}
