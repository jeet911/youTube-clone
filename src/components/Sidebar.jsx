import './sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SlideshowOutlinedIcon from '@mui/icons-material/SlideshowOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <>
        
            <div className="sidebar">
                {/* <h1>I am sidebar</h1> */}
                <SidebarRow title="Home" Icon={HomeOutlinedIcon} />
                <SidebarRow title="Shorts" Icon={SlideshowOutlinedIcon} />
                <SidebarRow title="Subscriptions" Icon={SubscriptionsOutlinedIcon} />
                <hr />
                <div className="you-flex">
                    <h2 className="you-title" >You</h2>
                    < KeyboardArrowRightOutlinedIcon className="row-icon" />
                </div>
                {/* <SidebarRow title="You" Icon={KeyboardArrowRightOutlinedIcon} /> */}
                <SidebarRow title="Your Channel" Icon={AccountBoxOutlinedIcon} />
                <SidebarRow title="History" Icon={HistoryOutlinedIcon} />
                <SidebarRow title="Your videos" Icon={SlideshowOutlinedIcon} />
                <SidebarRow title="Watch later" Icon={ScheduleOutlinedIcon} />
                <SidebarRow title="Show more" Icon={ExpandMoreSharpIcon} />
            </div>
        </>
    )
}
export default Sidebar;