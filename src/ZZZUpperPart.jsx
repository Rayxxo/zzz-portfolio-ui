import './ZZZUpperPart.css'
import polychromeZZZ from './assets/images/polychromeimage.png'
import denniesZZZ from './assets/images/denniesicon.png'
import batteryZZZ from './assets/images/batteryicon.png'

function ZZZUpperPart() {
    return (
        <>
            <div className="upper-container-boarder"></div>

            <div className='upper-container-items'>
                <div className="left-part-items">
                    <p>Return button</p>
                    <p>Profile</p>
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