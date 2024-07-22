import LocationIcon from '../images/location-icon.png'

export default function Card(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} alt="cardImg" className='card--image'/>
            <div className='card--details'>

                <div className="card--location">
                    <img src={LocationIcon} alt="locationIcon" className='location-icon' />
                    <h5 className='location'>{props.location}</h5>
                    <h5 className='google-url'>{props.googleMapsUrl}</h5>
                </div>
                <h1 className='title'>{props.title}</h1>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}