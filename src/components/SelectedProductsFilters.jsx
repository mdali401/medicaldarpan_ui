import React from 'react'
import FilterItem from './Filters/FilterItem'
import './SelectedProductsFilters.css'

const SelectedProductsFilters = ({searchText, selectedFilters, handleRemoveFilterItem, setSelectedFilters}) => {
  return (
    <div className='selected_product_filters_div'>
        <p>{searchText} <span> (128 products)</span></p>
        {selectedFilters.map(item => {
          return <FilterItem key={item} name={item} isSelected={true} handleRemoveFilterItem={handleRemoveFilterItem}/>
        })}
        {selectedFilters.length > 0 && <button id='removeall' 
                                          onClick={() => setSelectedFilters([])}>
                                            Remove all
                                        </button>}
    </div>
  )
}

export default SelectedProductsFilters