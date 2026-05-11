import './ZZZUpperPart.css'
import polychromeZZZ from './assets/images/polychromeimage.png'
import denniesZZZ from './assets/images/denniesicon.png'
import batteryZZZ from './assets/images/batteryicon.png'
import promeiaIcon from './assets/images/promeiaicon.png'

function ZZZUpperPart() {
    return (
        <>
            <div className="upper-container-boarder"></div>

            <div className='upper-container-items'>
                <div className="left-part-items">
                    <div className='profile'>

                        <div className='profile-avatar'>
                            <img src={promeiaIcon}></img>
                        </div>

                        <div className='profile-info'>
                            <p className='profile-name'>ThisIsNotRay</p>
                            <div className='level-bar-container'>
                                <div className='level-bar-fill'>
                                    <p>MAX/MAX</p>
                                </div>
                            </div>
                        </div>

                        <div className='profile-level'>
                            <p className='level-number'>60</p>
                            <p className='level-label'>LEVEL</p>
                        </div>
                    </div>
                </div>

                <div className='right-part-items'>
                    <div className='battery-div'>
                        <p>240/240</p>
                        <img src={batteryZZZ}></img>
                    </div>
                    <div className='dennies-div'>
                        <p>00000000</p>
                        <img src={denniesZZZ}></img>
                    </div>
                    <div className='polychrome-div'>
                        <p>00000000</p>
                        <img src={polychromeZZZ}></img>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ZZZUpperPart