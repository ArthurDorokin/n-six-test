import React from 'react'
import { render } from '@testing-library/react'
import { WrapPage } from '@/features/page'

describe('WrapPage', () => {
	it('renders children correctly', () => {
		const { getByTestId } = render(
			<WrapPage>
				<div data-testid="child-element">Hello, World!</div>
			</WrapPage>
		)

		const childElement = getByTestId('child-element')
		expect(childElement).toBeInTheDocument()
		expect(childElement.textContent).toBe('Hello, World!')
	})
})
