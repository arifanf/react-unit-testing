import { render, screen } from '@testing-library/react'

// import component yg akan dites
import TodoFooter from '../TodoFooter'

test( 'renders todo footer', () => {
    // 1. RENDER COMPONENT
    render(<TodoFooter todoLength={5} />)

    // 2. SELECT DOM (MEMILIH ELEMENT YANG AKAN DITES)
    const containerElement = screen.getByTestId('todo-footer-element')

    // 3. EXPECTED RESULT
    expect(containerElement).toBeInTheDocument()
} )