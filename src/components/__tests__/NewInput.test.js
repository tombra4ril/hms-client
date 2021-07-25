import { unmountComponentAtNode, render } from "react-dom";
import { act } from "react-dom/test-utils"
import NewInput from "../NewInput"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove()
  container = null
});

it("Renders NewInput.js component", () => {
  // displays text
  //decalre values to pass to component
  let func = 2;
  let arr = ["tombra", "bibi"]
  let index = 0
  act(() => {
    render(<NewInput changeArr = {func} arr = {arr} index = {index} />, container)
  })
  expect(container.textContent).toBe("close")
  
  // check for input field and class
  act(() => {
    render(<NewInput changeArr = {func} arr = {arr} index = {index} />, container)
  })
  expect(container.querySelector("input").value).toEqual(arr[index])
  
  // check for label field and class
  act(() => {
    render(<NewInput changeArr = {func} arr = {arr} index = {index} />, container)
  })
  expect(container.querySelector("label").classList.contains("label")).toEqual(true)
})