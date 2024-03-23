import './videocard.css'
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

function Videocard({time,views,image1,image2,channelname,title}) {
    return (
        <>
            <div className="video-card">
                <img className="card-img" src={image1} alt="" />
                <div className="card-flex">
                    <div className="channel-logo-flex">
                        <img className='logo' src={image2} alt="" />
                        <p className="title">{title}</p>
                        <MoreVertSharpIcon />
                    </div>
                    <div className="card-content">
                        <p className="channel-name">{channelname}</p>
                        <div className="time-flex">
                            <p className="views">{views}</p>
                            <p className="time">{time}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Videocard;