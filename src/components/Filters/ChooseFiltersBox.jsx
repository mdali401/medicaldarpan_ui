import React from 'react'
import AvailableFilters from './AvailableFilters'
import './ChooseFiltersBox.css'

const ChooseFiltersBox = ({title, filterOptions,selectedFilters, handleSelectFilterItem, handleRemoveFilterItem }) => {
  return (
    <div className='filtersbox_div'>
        <div className='filter_title'>
          {title}
        </div>
        <AvailableFilters 
          filterOptions={filterOptions} 
          selectedFilters={selectedFilters} 
          handleSelectFilterItem={handleSelectFilterItem}
          handleRemoveFilterItem={handleRemoveFilterItem}/>
    </div>
  )
}

export default ChooseFiltersBox