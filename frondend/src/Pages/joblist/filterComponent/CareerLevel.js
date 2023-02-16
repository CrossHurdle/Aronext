import React from 'react'

const CareerLevel = () => {
    const careerlevelList=[{label:'Beginner'},{label:'intermediate'},{label:'Expert'},]
  return (
    <div>
     {careerlevelList.map(ele => (
        <div key={ele.label}>
          <input type="checkbox" /> <label htmlFor="">{ele.label}</label>
        </div>
      ))}
    </div>
  )
}

export default CareerLevel
