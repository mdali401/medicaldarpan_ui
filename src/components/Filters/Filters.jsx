import React from 'react'
import ChooseFiltersBox from './ChooseFiltersBox'
import './Filters.css'

const Filters = ({selectedFilters, handleSelectFilterItem, handleRemoveFilterItem}) => {
  const diferentFiltersOptions = [
    {
      title: 'Related Category',
      availableOptions: [
        'Paracetamol Tablets', 
        'Paracetamol Syrup', 
        'Paracetamol Powder', 
        'Aceclofenac', 
        'Megaladrate', 
        'Mefenamic Paracetamol Syrup', ]
    },
    {
      title: 'Related Brands',
      availableOptions: [
        'Cipmol Paracetamol', 
        'Pandal Paracetamol Tablets', 
        'Cobiflam', 
        'Crocin Tablets', 
        'Calpol Paracetamol Tablets', 
        'Sumo Tablet', ]
    },
    {
      title: 'Business Type',
      availableOptions: [
        'Wholesaler', 
        'Manufacturer', 
        'Retailer', 
        'Exporter', ]
    },
    {
      title: 'Strength',
      availableOptions: [
        '500 mg', 
        '650 mg', ]
    },
    {
      title: 'Prescription/Non prescription',
      availableOptions: [
        'Intas Pharmaceutical Ltd', 
        'Alkem Laboratories Ltd', ]
    },
  ]

  return (
    <div className='filtersboxes_div'>
      {diferentFiltersOptions.map(item => {
        return <ChooseFiltersBox 
                  key={item.title} 
                  title={item.title} 
                  filterOptions={item.availableOptions} 
                  selectedFilters={selectedFilters} 
                  handleSelectFilterItem={handleSelectFilterItem}
                  handleRemoveFilterItem={handleRemoveFilterItem} />
        })
      }
  
    </div>
  )
}

export default Filters