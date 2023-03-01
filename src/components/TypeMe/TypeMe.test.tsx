import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TypeMe from "./TypeMe";

describe("TypeMe", () => {
  describe("No Props", () => {
    beforeEach(() => {
      render(<TypeMe />);
    });

    it('should on type change the text', async () => {
      userEvent.type(screen.getByLabelText('Type In Me'), 'Hello World')
      expect(await screen.findByText('Hello World'))
    })
  });

  describe('props.defaultInput', () => {
    const defaultInput = 'Wake Up'
    beforeEach(() => {
      render(<TypeMe defaultInput={defaultInput}/>)
    })

    it('should render the defaultInput value', async () => {
      expect(screen.getByLabelText('Type In Me')).toHaveValue(defaultInput)
      expect(await screen.findByText(defaultInput))
    })
  })
});
