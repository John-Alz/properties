import { useDispatch } from 'react-redux';
import './Switch.scss'
import { filterHost } from '../../redux/propertiesSlice';
import { useState } from 'react';

export default function Switch() {

  const [click, setClick] = useState(false)

  const dispatch = useDispatch()

  const handleChange = () => {
    const newValue = !click;
    setClick(newValue)
    dispatch(filterHost(newValue ? "true" : "All"))
    // if (newValue) {
    //   dispatch(filterHost("true"))
    // } else {
    //   dispatch(filterHost("All"))
    // }
  }

  return (
    <div className="switch">
      <input
        type="checkbox"
        id="switch"
        checked={click}
        value={click}
        onChange={handleChange}
        className="switch-input"
      />
      <label className="switch-label">Superhost</label>
    </div>
  );
}

