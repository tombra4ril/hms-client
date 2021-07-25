import {parseExpiresIn} from "../ParseJwt"

describe("Unit Testing", () => {
  // Performing unit testing
  it("Testing for Seconds", () => {
    let type = "seconds"
    // for seconds
    let seconds = 30
    let seconds_1 = 5
    let seconds_2 = 1

    expect(parseExpiresIn(seconds, type)).toBe(25000)
    expect(parseExpiresIn(seconds_1, type)).toBe(4000)
    expect(parseExpiresIn(seconds_2, type)).toBe(500)
  })

  it("Testing for Minutes", () => {
    let type = "minutes"
      // for minutes
      let minutes_1 = 5 
      let minutes_2 = 1 

    expect(parseExpiresIn(minutes_1, type)).toBe(240000)
    expect(parseExpiresIn(minutes_2, type)).toBe(30000)
  })

  it("Testing for Hours", () => {
    let type = "hours"
      // for minutes
      let hours = 1 

    expect(parseExpiresIn(hours, type)).toBe(3300000)
  })
})