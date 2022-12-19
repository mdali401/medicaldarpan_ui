import React, {useState} from 'react'
import CurrentPagePath from './CurrentPagePath'
import SearchProducts from './SearchProducts'
import SelectedProductsFilters from './SelectedProductsFilters'
import Filters from './Filters/Filters'
import DisplayProducts from './Products/DisplayProducts'
import './Body.css'

const Body = () => {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [searchText, setSearchText] = useState('Paracetamol')

  const handleSelectFilterItem = (filter) => {
    if(!filter)
        return
    if(selectedFilters.indexOf(filter) > -1)
        return
    
    setSelectedFilters(oldSelectedFilters => [...oldSelectedFilters, filter])
  }

  const handleRemoveFilterItem = (filter) => {
    if(!filter)
        return
    if(selectedFilters.indexOf(filter) < 0)
        return
    
    const newSelectedFilters = selectedFilters.filter(item => item != filter)
    setSelectedFilters(newSelectedFilters)
  }

  return (
    <div className='body_div'>
        <CurrentPagePath />
        <SearchProducts setSearchText={setSearchText}/>
        <SelectedProductsFilters
            searchText={searchText}
            selectedFilters={selectedFilters} 
            handleSelectFilterItem={handleSelectFilterItem}
            handleRemoveFilterItem={handleRemoveFilterItem}
            setSelectedFilters={setSelectedFilters}/>
        <div className='filters_products_div'>
            <Filters 
                selectedFilters={selectedFilters} 
                handleSelectFilterItem={handleSelectFilterItem}
                handleRemoveFilterItem={handleRemoveFilterItem}/>
            <DisplayProducts />
        </div>
    </div>
  )
}

export default Body