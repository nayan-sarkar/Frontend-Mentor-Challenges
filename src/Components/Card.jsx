function Card({projectImage,projectTitle,liveUrl,githubUrl,style}){
    return (
        <div className={`card ${style}`}>
                <img src={projectImage} className="image" />
                <div className="text">
                    <h2>{projectTitle}</h2>
                    <div className="icons">
                        {liveUrl && <a href={liveUrl} target="_blank"><img src="icons/link.svg" /></a>}
                        <a href={githubUrl} target="_blank"><img src="icons/github.svg" /></a>
                    </div>
                </div>
        </div>
    );
}

export default Card;