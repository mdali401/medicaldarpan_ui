import React, {useState} from 'react'
import { CgSearch } from "react-icons/cg";
import './SearchProducts.css'

const SearchProducts = ({setSearchText}) => {
  const [inputText, setInputText] = useState('')

  return (
    <div className='search_div'>
        <form onSubmit={(e) => {e.preventDefault(); setSearchText(inputText)}}>
            <div className='searchicon'><CgSearch /></div>
            <input 
                type='text' 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}/>
            <button type='submit'>Search</button>
        </form>

    </div>
  )
}

export default SearchProducts