import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import './searchpage.css'


function SearchPage() {
    return (
        <>
            <div className="search-page">
                {/* <h1>Search Page</h1> */}
                <ChannelRow
                    channel="CodeWithHarry"
                    name="@CodeWithHarry "
                    subs=" 5.7M subscribers"
                    verified
                    desc="Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn."
                />
                <hr />
                <VideoRow
                    title="B.Tech - Stand up Comedy By Harsh Gujral"
                    image="https://i.ytimg.com/vi/havARbP7Fyk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbo2JtB6_TGpwBn0Hbw4x_ksxlqg"
                    channel="Harsh"
                    imgg="https://yt3.ggpht.com/ytc/AIdro_nG9mqfPOuez5qZo8Vp-EJg1AGe9adBc-lI7tlmIg=s68-c-k-c0x00ffffff-no-rj"
                    views="5M views"
                    time="2 months ago"
                    desc="MY ELEVENTH STANDUP COMEDY VIDEO IS HERE! DO SHARE YOUR EXPERIENCES OF YOUR ENGINEERING AND ..." 
                    />
                
                <VideoRow
                    title="The Great Indian Kapil Show| Official Trailer| Kapil Sharma| 30 March, Saturdays 8pm | Netflix"
                    image="https://i.ytimg.com/vi/bftjfqS3v6k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlVarjc-bq4gtkuLeTZ-vLvzhmFw"
                    channel="Netflix India"
                    imgg="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj"
                    views="32K views"
                    time="1 hour ago"
                    desc="India ho ya Mongolia, hasi ka meter rahega humesha high kyunki aa gaya hai The Great Indian Kapil Show ka trailer..."
                />
                <VideoRow
                    title="POPEYE THE SAILOR MAN: Live Action Movie – Full Teaser Trailer – Will Smith"
                    image="https://i.ytimg.com/vi/GjLYsSDiXFs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcN3Hv2va-ZGU_iJuNDWR_uCQKiA"
                    channel="Foxstar media"
                    imgg="https://yt3.ggpht.com/ytc/AIdro_nxoVwj_W3MVap6tNJza95_-20YfO9GDVUz5CLsrw=s68-c-k-c0x00ffffff-no-rj"
                    views="5.2M views"
                    time="10 months ago"
                    desc="Watch the teaser trailer for the Popeye live action movie 2024! Paramount Studio has revealed the popeye the sailor man for this ..."
                />
                <VideoRow
                    title="Neuralink Patient Plays Chess WITH HIS MIND"
                    image="https://i.ytimg.com/vi/VdnUifkPKGs/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIE4oQDAP&rs=AOn4CLC-EVyHocgPWi3yAb_mfpfiJH9yDA"
                    channel="CodeWithHarry"
                    imgg="https://yt3.googleusercontent.com/ytc/AIdro_krnyU9zev1u94JYs4opG8p1sYE3HQ9oButitIb7A=s176-c-k-c0x00ffffff-no-rj-mo"
                    views="123K views"
                    time="11 hour ago"
                    desc="Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn."
                />
                <VideoRow
                    title="Creator to Creator: Spider-Man | The Full Conversation"
                    image="https://i.ytimg.com/vi/cv03K-qNQYI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb7zLr-BjHWtYGUJh0mDO33PVuQQ"
                    channel="Marvel Entertainment"
                    imgg="https://yt3.ggpht.com/ugAmG9LeliJJoiyacIecdiq_ZgRNdmjCIohaN5x3QEOmWB9dNUsKuCU8ngLs3JUauHZ4-boVkA=s68-c-k-c0x00ffffff-no-rj"
                    views="19K views"
                    time="1 day ago"
                    desc="Welcome to the very extended edition of Creator to Creator: Spider-Man, featuring the creators of "
                />
                <VideoRow
                    title="The Great Indian Kapil Show| Official Trailer| Kapil Sharma| 30 March, Saturdays 8pm | Netflix"
                    image="https://i.ytimg.com/vi/bftjfqS3v6k/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAlVarjc-bq4gtkuLeTZ-vLvzhmFw"
                    channel="Netflix India"
                    imgg="https://yt3.ggpht.com/zgMN9BuSQByG1SrpmLwcNB3MQhjDhS_pl9H1h7TaRievMfS4UpU7Z36j77z5_hnIW4N8uFX3NA=s68-c-k-c0x00ffffff-no-rj"
                    views="32K views"
                    time="1 hour ago"
                    desc="India ho ya Mongolia, hasi ka meter rahega humesha high kyunki aa gaya hai The Great Indian Kapil Show ka trailer..."
                />
                <VideoRow
                    title="POPEYE THE SAILOR MAN: Live Action Movie – Full Teaser Trailer – Will Smith"
                    image="https://i.ytimg.com/vi/GjLYsSDiXFs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAcN3Hv2va-ZGU_iJuNDWR_uCQKiA"
                    channel="Foxstar media"
                    imgg="https://yt3.ggpht.com/ytc/AIdro_nxoVwj_W3MVap6tNJza95_-20YfO9GDVUz5CLsrw=s68-c-k-c0x00ffffff-no-rj"
                    views="5.2M views"
                    time="10 months ago"
                    desc="Watch the teaser trailer for the Popeye live action movie 2024! Paramount Studio has revealed the popeye the sailor man for this ..."
                />
                 <VideoRow
                    title="Creator to Creator: Spider-Man | The Full Conversation"
                    image="https://i.ytimg.com/vi/cv03K-qNQYI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb7zLr-BjHWtYGUJh0mDO33PVuQQ"
                    channel="Marvel Entertainment"
                    imgg="https://yt3.ggpht.com/ugAmG9LeliJJoiyacIecdiq_ZgRNdmjCIohaN5x3QEOmWB9dNUsKuCU8ngLs3JUauHZ4-boVkA=s68-c-k-c0x00ffffff-no-rj"
                    views="19K views"
                    time="1 day ago"
                    desc="Welcome to the very extended edition of Creator to Creator: Spider-Man, featuring the creators of "
                />
            </div>
        </>
    )
}

export default SearchPage;