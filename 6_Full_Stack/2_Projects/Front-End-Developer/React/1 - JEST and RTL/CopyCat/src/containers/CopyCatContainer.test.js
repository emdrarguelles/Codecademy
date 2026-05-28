import { CopyCatContainer } from "./CopyCatContainer";
import "regenerator-runtime";
import React from 'react'
import { waitFor, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

it("Should display copied text", async () => {
  render(<CopyCatContainer />)

  const input = screen.getByRole('textbox')
  userEvent.type(input, "Hello World!")

  const copy = await screen.findByText("Hello World!")
  expect(copy).toBeInTheDocument()
});

it("Should remove copied text after putting on tape", async () => {
  render(<CopyCatContainer />)

  const input = screen.getByRole('textbox')
  userEvent.type(input, "My mouth is shut")

  const copy = await screen.findByText("My mouth is shut")
  expect(copy).toBeInTheDocument()

  const copyCat = screen.getByRole('button', { name: /copycat/i })
  await userEvent.click(copyCat)

  await waitFor(() => {
    const removed = screen.queryByText("My mouth is shut")
    expect(removed).toBeNull()
  })
});

it("Should display copied text after removing tape", async () => {
  render(<CopyCatContainer />)

  const input = screen.getByRole('textbox')
  await userEvent.type(input, "Eventually this will appear")

  const copyCat = screen.getByRole('button', { name: /copycat/i })
  await userEvent.click(copyCat)

  const quietCat = await screen.getByRole('button', { name: /quietcat/i })
  await userEvent.click(quietCat)

  const copy = await screen.findByText("Eventually this will appear")
  expect(copy).toBeInTheDocument()
});