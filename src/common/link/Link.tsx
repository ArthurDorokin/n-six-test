import NextLink from 'next/link'
import React, { FC, ReactNode } from 'react'

interface IProps {
	href: string
	children: ReactNode
}

export const Link: FC<IProps> = ({ href, children }) => {
	return <NextLink href={href}>{children}</NextLink>
}
