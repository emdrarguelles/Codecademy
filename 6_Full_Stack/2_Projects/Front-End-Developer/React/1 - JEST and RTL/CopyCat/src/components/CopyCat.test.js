import { CopyCat } from "./CopyCat";
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

it("Displays the provided name", () => {
  render(<CopyCat 
          name='Mack'
          value=""
          handleChange={() => {}}
          toggleTape={() => {}}
          isCopying={true} 
          />)

  const name = screen.getByRole('heading', { name: /mack/i })
  expect(name).toHaveTextContent('Copy Cat Mack')

});

it("Should display input text in paragraph when isCopying is set to true", () => {
  render(<CopyCat 
          name='Mack'
          value='Here is an input'
          handleChange={() => {}}
          toggleTape={() => {}}
          isCopying={true} 
          />)

          const input = screen.getByRole('textbox')
          expect(input).toHaveValue('Here is an input')

          const p = screen.getByText('Here is an input')
          expect(p).toBeInTheDocument()
});

it("Should not display input text in paragraph when isCopying is set to false", () => {
  render(<CopyCat 
          name='Mack'
          value='Here is an input'
          handleChange={() => {}}
          toggleTape={() => {}}
          isCopying={false} 
          />)
        
          const input = screen.queryByText('Here is an input')
          expect(input).toBeNull()
});
