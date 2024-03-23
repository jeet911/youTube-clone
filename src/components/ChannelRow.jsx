import './channelrow.css'

function ChannelRow({ channel, subs, desc, name }) {
    return (
        <>
            {/* <h1>channel row</h1> */}
            <div className="channelrow-flex">
                <img src="https://yt3.googleusercontent.com/ytc/AIdro_krnyU9zev1u94JYs4opG8p1sYE3HQ9oButitIb7A=s176-c-k-c0x00ffffff-no-rj-mo" alt="" />
                <div className="channel-text">
                    <h2>{channel}</h2>
                    <p>{name}.{subs}</p>
                    <p>{desc}</p>
                </div>
                <button className='btn-subs'>Subscribe</button>
            </div>


        </>

    )
}

export default ChannelRow;