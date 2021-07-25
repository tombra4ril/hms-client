import React from "react"

const ViewPort = () => {
  const [width, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return width
}

export default ViewPort