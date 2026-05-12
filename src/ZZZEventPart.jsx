
import "./ZZZEventPart.css"

import eventUpperPart from './assets/images/eventupper.png'
import eventLowerPart from './assets/images/eventlowerpart.png'

function EventCarousel() {
    return (
        <>  
            <div className="event-sidebar">
                <div className="event-upper">
                    <img src={eventUpperPart}>
                    </img>
                </div>

                <div className="event-gap">
                    <div className="event-carousel-content">
                
                    </div>
                </div>

                <div className="event-lower-part">
                    <img src={eventLowerPart}>
                    </img>
                </div>
            </div>

            
        </>
    );
}

export default EventCarousel