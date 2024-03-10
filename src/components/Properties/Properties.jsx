// import { useState } from 'react'
import './Properties.scss'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allProperties } from '../../redux/propertiesSlice'
import Card from '../Card/Card'
export default function Properties() {

    // const [data, setData] = useState(null)
    const properties = useSelector((state) => state.properties.properties)
    const filteredCountry = useSelector((state) => state.properties.selectedCountry)
    const filteredType = useSelector((state) => state.properties.selectedType)
    const filteredHost = useSelector((state) => state.properties.selectedHost)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/property-listing-data.json')
            .then(response => response.json())
            .then(data => dispatch(allProperties(data)))
    }, [dispatch])

    const filtro = properties.filter((item) => {
        return ((filteredCountry === "All" || item.location === filteredCountry) &&
            (filteredType === "All" || item.capacity.bedroom === Number(filteredType)) &&
            (filteredHost === "All" || item.superhost === true))
    })
    console.log(filtro);

    return (
        <div className='properties'>
            <h1>Over 200 stays</h1>
            <div className='properties-container'>
                {
                    filtro && filtro.map((property) => {
                        return (
                            <>
                                <div key={property.id}>
                                    <Card image={property.image} title={property.title} description={property.description} bedroom={property.capacity.bedroom} people={property.capacity.people} price={property.price} rating={property.rating} superhost={property.superhost} />
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
