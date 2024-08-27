import "../styles/Page.css";

const Page = ( props ) => {

    const { title, subtitles, text } = props;

    return (
        <div className="page">
            <div className="spacing" >&nbsp;</div>
            <div className="column-container">
                <div className="left-column">
                    <h2>{title}</h2>
                </div>
                <div className="right-column">
                    {text.map((paragraph, index) => (
                        <div key={index}>
                            {subtitles && subtitles[index] && <p className="subtitle">{subtitles[index]}</p>}
                            <p>{paragraph}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="spacing" >&nbsp;</div>
        </div>
    )
}

export default Page