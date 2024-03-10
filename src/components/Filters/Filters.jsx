import './Filters.scss'
import Switch from '../Switch/Switch'
import { useDispatch, useSelector } from 'react-redux'
import { filterCountry, filterType } from '../../redux/propertiesSlice'
import { useState } from 'react'

export default function Filters() {

  const [click, setClick] = useState(1)
  const selectedFilterType = useSelector(state => state.properties.filterType);


  const dispatch = useDispatch()

  const handleClick = (e, btnId) => {
    dispatch(filterCountry(e.target.value))
    setClick(btnId)
  }

  const handleChange = (e) => {
    dispatch(filterType(e.target.value))
  }






  return (
    <div className='filters'>
      <div className='filters-right'>
        <ul className='filters-right-li'>
          <li>
            <button className={click === 1 ? "filters-right-li-btn-active" : ""} onClick={(e) => handleClick(e, 1)} value="All" name="All">All stays</button>
          </li>
          <li>
            <button className={click === 2 ? "filters-right-li-btn-active" : ""} onClick={(e) => handleClick(e, 2)} value="Norway" name="Norway">Norway</button>
          </li>
          <li>
            <button className={click === 3 ? "filters-right-li-btn-active" : ""} onClick={(e) => handleClick(e, 3)} value="Finland" name="Finland">Finland</button>
          </li>
          <li>
            <button className={click === 4 ? "filters-right-li-btn-active" : ""} onClick={(e) => handleClick(e, 4)} value="Sweden" name="Sweden">Sweden</button>
          </li>
          <li>
            <button className={click === 5 ? "filters-right-li-btn-active" : ""} onClick={(e) => handleClick(e, 5)} value="Switzerland" name="Switzerland">Switzerland</button>
          </li>
        </ul>
      </div>

      <div className='filters-left'>
        <Switch />
        <select onChange={e => handleChange(e)} value={selectedFilterType} className='filters-left-select'>
          <option value="All">Property type</option>
          <option value="1">1 bedroom</option>
          <option value="2">2 bedroom</option>
        </select>
      </div>

    </div>
  )
}
