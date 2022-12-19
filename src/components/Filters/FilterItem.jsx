import React from 'react'
import { AiOutlineClose } from "react-icons/ai";
import './FilterItem.css'

const FilterItem = ({isSelected, name, handleRemoveFilterItem}) => {
  return (
    <div className={isSelected ? 'filter_item selected' : 'filter_item'}>
        <p>{name}</p>
        <p className='remove' onClick={() => handleRemoveFilterItem(name)}>{isSelected? <AiOutlineClose /> : ''}</p>
    </div>
  )
}

export default FilterItem