/* eslint-disable testing-library/no-render-in-setup */
import {screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect';
import EmojiComponent from './EmojiComponent';


describe("Emoji List tester", () => {
    let button, input;
    beforeEach(() => {
        render(<EmojiComponent/>);
        button = screen.getByText("Filter");
        input = screen.getByDisplayValue("Filter Emoji");
    })

    test("Başlık kısmının başarılı şekilde render edilmesi", () => {
        const header = screen.getAllByText("Emoji Search");
        expect(header).toBeInTheDocument();
    })

    test("Input girildiğinde başarılı şekilde render ediyor mu?", () => {
        userEvent.click(button)
        expect(screen.getByText(input)).toBeInTheDocument();
    })






})