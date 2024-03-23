import { Verified } from '@mui/icons-material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './videoRow.css'

function VideoRow({ image, title, channel, desc, views, time, imgg ,verified}) {
    return (
        <>
            {/* <h1>Video row</h1> */}
            <div className="videoRow">
                <img className='img-logo' src={image} alt="" />
                <div className="videoRow-text">
                    <p className='title'>{title}</p>
                    <p className='timeline'>
                        {views} . {time}
                    </p>
                    <p className='profile'>
                        {<img className='s-logo' src={imgg} alt="" />} {channel} {<CheckCircleIcon />}
                    </p>
                    <p className='desc'>
                        {desc}
                    </p>
                </div>
            </div>

        </>

    )
}

export default VideoRow;