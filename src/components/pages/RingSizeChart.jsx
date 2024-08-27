import ring_size_chart from "../../RING_SIZE_CONVERSION_CHART.webp";
import "../../styles/Page.css";

const RingSize = () => {

    const title = 'Ring size chart'

    return (
        <div className="page">
            <div className="spacing" >&nbsp;</div>
            <div className="column-container">
                <div className="left-column">
                    <h2>{title}</h2>
                </div>
                <div className="right-column">
                    <img className="image" src={ring_size_chart}/>
                </div>
            </div>
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default RingSize