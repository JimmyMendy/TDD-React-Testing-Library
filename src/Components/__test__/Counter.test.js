import React from 'react';
import Counter from '../Counter';
import { render, fireEvent } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const {getByTestId} = render(<Counter />);
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter")
})

test("Counter initially start with text of 0", () => {
  const { getByTestId } = render(<Counter />)
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")
})

test("input countain initial value of 1",() => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId("input")

  expect(inputEl.value).toBe("1")
})

test("add button render with +", () => {
  const { getByTestId } = render(<Counter />)
  const addBtn = getByTestId("add-btn")

  expect(addBtn.textContent).toBe("+")
})

test("add button render with -", () => {
  const { getByTestId } = render(<Counter />)
  const subBtn = getByTestId("sub-btn")

  expect(subBtn.textContent).toBe("-")
})

test("change value of input work correctly", () => {
  const { getByTestId } = render(<Counter />)
  const inputEl = getByTestId("input")

  expect(inputEl.value).toBe("1")

  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  expect(inputEl.value).toBe("5")
})


test("click on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter/>)
  const addBtnEl = getByTestId("add-btn")
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe("1")
})

test("click on sub btn subtract 1 to counter", () => {
  const { getByTestId } = render(<Counter/>)
  const subBtnEl = getByTestId("sub-btn")
  const counterEl = getByTestId("counter")

  expect(counterEl.textContent).toBe("0")

  fireEvent.click(subBtnEl)

  expect(counterEl.textContent).toBe("-1")
})


test("changing input value then clicking on addbn works correctly", () => {
  const { getByTestId } = render(<Counter/>)
  const addBtnEl = getByTestId("add-btn")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")


  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(addBtnEl)

  expect(counterEl.textContent).toBe("5")
})

test("changing input value then clicking on subbtn works correctly", () => {
  const { getByTestId } = render(<Counter/>)
  const subBtnEl = getByTestId("sub-btn")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  
  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(subBtnEl)

  expect(counterEl.textContent).toBe("-5")
})

test("adding and then substracting leads to the corect counter number", () => {
  const { getByTestId } = render(<Counter/>)
  const addBtnEl = getByTestId("add-btn")
  const subBtnEl = getByTestId("sub-btn")
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")

  fireEvent.change(inputEl, {
    target: {
      value: "10"
    }
  })

  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  fireEvent.click(addBtnEl)
  fireEvent.click(subBtnEl)
  fireEvent.click(subBtnEl)

  expect(counterEl.textContent).toBe("20")
  
  fireEvent.change(inputEl, {
    target: {
      value: "5"
    }
  })

  fireEvent.click(addBtnEl)
  fireEvent.click(subBtnEl)
  fireEvent.click(subBtnEl)

  expect(counterEl.textContent).toBe("15")

})


test("counter contains className", () => {
  const {getByTestId} = render(<Counter />);
  const counterEl = getByTestId("counter")
  const inputEl = getByTestId("input")
  const addBtnEl = getByTestId("add-btn")
  const subBtnEl = getByTestId("sub-btn")

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50"
    }
  })

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl)

  expect(counterEl.className).toBe("")

  fireEvent.click(addBtnEl)

  expect(counterEl.className).toBe("green")

  fireEvent.click(addBtnEl)

  expect(counterEl.className).toBe("green")

  fireEvent.click(subBtnEl)
  fireEvent.click(subBtnEl)

  expect(counterEl.className).toBe("")

  fireEvent.click(subBtnEl)
  fireEvent.click(subBtnEl)
  fireEvent.click(subBtnEl)
  fireEvent.click(subBtnEl)

  expect(counterEl.className).toBe("red")
})