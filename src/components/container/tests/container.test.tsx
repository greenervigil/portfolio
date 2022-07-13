import { getByTestId, render, screen } from "@testing-library/react";
import Container from "../container";

describe('*** Container Component ***', () => {
    it('renders the component', () => {
        render(<Container />)

        expect(screen.getByTestId('container')).toBeInTheDocument()
    })
    it('renders children', () => {
        render(<Container children={<div><h1 data-testid="header">Test</h1></div>}/>)

        const header = screen.getByTestId('header')

        expect(screen.getByTestId('container')).toContainElement(header)
    })
})