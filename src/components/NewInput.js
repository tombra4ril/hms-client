import React from 'react'

const NewInput = ({changeArr, arr, index}) => {

   // function to get a new med
   const getMed = (event, index) => {
    event.preventDefault()
    let med = event.target.value
    changeArr(previous => {
      let [...all] = previous
      all[index] = med
      return all
    })
  }

  // function removes a medication
  const removeMed = (event, index) => {
    event.preventDefault()
    changeArr(previous => {
      let [...all] = previous
      all.splice(index, 1)
      return all
    })
  }

  return (
    <>
      <label className="label"></label>
      <div className="med-add flex-element flex-just-sp-between">
        <input onChange={event => getMed(event, index)} className="input more" type="text" value={arr[index]} />
        <span onClick={event => removeMed(event, index)} className="remove material-icons">close</span>
      </div>
    </>
  )
}

export default NewInput