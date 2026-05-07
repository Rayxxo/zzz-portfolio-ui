import './ZZZListItemsUI.css'
import Githubpng from './assets/images/githubwhite.png'
import LinkedInwhite from './assets/images/linkedinwhite.png'
import Youtubewhite from './assets/images/youtubewhite.png'
import WEIII from './assets/images/weiii.png'
import weiisound from './assets/sounds/weiii-daitaku-helios.mp3'
function ListItemsUI() {

    const playWEII = () => {
        const audio = new Audio(weiisound);
        audio.volume = 0.3;
        audio.play();
    };

    return(
        <>
            <div className="bottom-bar-boarder"></div>
            <div className='bottom-bar-boarder-2'></div>
            <div className="list-item-container">
                <div className="github-item">
                    <img src={Githubpng}></img>
                    <p>Github</p>
                </div>

                <div className='linebetween'></div>

                <div className="linkedin-item">
                    <img src={LinkedInwhite}></img>
                    <p>LinkedIn</p>
                </div>

                <div className='linebetween'></div>

                <div className="youtube-item">
                    <img src={Youtubewhite}></img>
                    <p>Youtube</p>
                </div>

                 <div className='linebetween'></div>

                <div className="daitaku-helios">
                    <button onClick={playWEII}>
                        <img src={WEIII}></img>
                        <p>WEEIIIII</p>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ListItemsUI