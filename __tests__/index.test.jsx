// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import About from '../pages/about.js'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<About />)

    const heading = screen.getByRole('heading', {
      name: /JEST - TEXT FOR TESTING/i,
    })

    expect(heading).toBeInTheDocument()
  })
})