import { render, screen } from "@testing-library/react";
import Container from "../container";

describe('*** Container Component ***', () => {
    it('renders the component', () => {
        render(<Container />)

        expect(screen.getByTestId('container')).toBeInTheDocument();
    })
})