import GlobeIcon from '../images/globe-icon.png'

export default function Header() {
    return (
        <div className="header-container">
            <img src={GlobeIcon} alt="globeIcon" className='header--globeIcon' />
            <h5 className='header--heading'>My Travel Journal</h5>
        </div>
    )
}