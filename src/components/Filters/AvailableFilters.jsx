import React from 'react'
import './AvailableFilters.css'
import FilterItem from './FilterItem'

const AvailableFilters = ({filterOptions, selectedFilters, handleSelectFilterItem, handleRemoveFilterItem}) => {

  return (
    <div className='filterslist_div'>
        {filterOptions.map((item, index) => {
              let isSelected = false
              if(selectedFilters.indexOf(item) > -1)
                isSelected = true
              return <div key={index+item} onClick={(e) => handleSelectFilterItem(item)}>
                        <FilterItem 
                          isSelected={isSelected} 
                          name={item} 
                          handleRemoveFilterItem={handleRemoveFilterItem} />
                      </div>
            })
        }
             
    </div>
  )
}

export default AvailableFilters