import "../../styles/Page.css";
import "../../styles/pages/RingSizeChart.css";

const RingSize = () => {

    const title = 'Ring size chart'

    return (
        <div className="page">
            <div className="spacing" >&nbsp;</div>
            <div className="chart-container">
                <div className="chart-lead-container">
                    <h2 className="chart-lead">{title}</h2>
                    <div className="spacing" >&nbsp;</div>
                </div>
                <div className="chart-image-container">
                    <img className="image" src="/images/RING_SIZE_CONVERSION_CHART.webp" />
                </div>
            </div>
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default RingSize