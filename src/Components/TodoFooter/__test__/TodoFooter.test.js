import { render, screen } from '@testing-library/react'

// [v] 1. Tes container dirender atau tidak
// 2. Tes kalau props.todoLength > 0 (par.2)
  // [v] todo-footer-with-items dirender
  // [v] todo-footer-no-item TIDAK dirender
// 3. Tes kalau props.todoLength > 1
  // todo-footer-with-items berisi text "You have {count} tasks"
// 4. Tes kalau props.todoLength == 1
  // todo-footer-with-items berisi text "You have 1 task"
// 5. Tes kalau props.todoLength <= 0
  // todo-footer-with-items TIDAK dirender
  // todo-footer-no-item dirender


// import component yg akan dites
import TodoFooter from '../TodoFooter'

test( 'renders todo footer container', () => {
    // 1. RENDER COMPONENT
    render(<TodoFooter todoLength={5} />)

    // 2. SELECT DOM (MEMILIH ELEMENT YANG AKAN DITES)
    const containerElement = screen.getByTestId('todo-footer-container')

    // 3. EXPECTED RESULT
    expect(containerElement).toBeInTheDocument()
} )




// todo-footer-with-items dirender
test('todo length > 0 - render with item message', () => {
    render(<TodoFooter todoLength={5} />)
    const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
    expect(footerWithItemsElement).toBeInTheDocument()
})

// todo-footer-no-item TIDAK dirender
test('todo length > 0 - render with no item message', () => {
    render(<TodoFooter todoLength={5} />)
    const footerWithNoItemElement = screen.queryByTestId('todo-footer-no-item')
    expect(footerWithNoItemElement).not.toBeInTheDocument()
})

// Tes kalau props.todoLength > 1
test('todo length > 1, render "TASK" in plural', () => {
    render(<TodoFooter todoLength={5} />)
    const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
    expect(footerWithItemsElement).toHaveTextContent('You have 5 tasks')
})

// Tes kalau props.todoLength == 1
test('todo length == 1, render "TASK" in singular', () => {
    render(<TodoFooter todoLength={1} />)
    const footerWithItemsElement = screen.getByTestId('todo-footer-with-items')
    expect(footerWithItemsElement).toHaveTextContent('You have 1 task')
})

// Tes kalau props.todoLength <= 0 : todo-footer-with-items TIDAK dirender
test('todo length <= 0 - not render with item message', () => {
    render(<TodoFooter todoLength={0} />)
    const footerWithItemsElement = screen.queryByTestId('todo-footer-with-items')
    expect(footerWithItemsElement).not.toBeInTheDocument()
})

// Tes kalau props.todoLength <= 0 : todo-footer-no-item dirender
test('todo length <= 0 - render with no item message', () => {
    render(<TodoFooter todoLength={0} />)
    const footerWithNoItemElement = screen.getByTestId('todo-footer-no-item')
    expect(footerWithNoItemElement).toBeInTheDocument()
})