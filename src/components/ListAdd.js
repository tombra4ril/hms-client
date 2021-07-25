import React, {useState} from 'react'
import "./styles/ListAdd.scss"

const ListAdd = ({name, onContentShow}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  // function to call parent clicking handler
  const parentShowContent = index => {
    // change background of the heading clicked
    setActiveIndex(index)

    // call parent function to show content
    onContentShow(index)
  }
  
  // list of titles and icons to use
  const titles = [`${name} List`, `Add ${name}`]
  const icons = ["list", "add_task"]

  return (
    [...Array(titles.length)].map((_, index) => (
      <div key={index} className={activeIndex === index? "section-content-head active": "section-content-head"} onClick={() => parentShowContent(index)}>
        <span className="section-content-child first-child material-icons">{icons[index]}</span>
        <span className="section-content-child">{titles[index]}</span>
      </div>
    ))
  )
  // return (
  //   <div key={index} className={activeIndex === index? "section-content-head active": "section-content-head"} >
  //     <span className="section-content-child first-child material-icons">{icons[index]}</span>
  //     <span className="section-content-child">{titles[index]}</span>
  //   </div>
  // )
}

export default ListAdd