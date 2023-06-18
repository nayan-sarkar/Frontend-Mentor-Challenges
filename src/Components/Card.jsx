function Card({projectImage,projectTitle,liveUrl,githubUrl}){
    return (
        <div className="card">
                <img src={projectImage} className="image" />
                <div className="text">
                    <h2>{projectTitle}</h2>
                    <div className="icons">
                        <a href={liveUrl} target="_blank"><img src="icons/link.svg" /></a>
                        <a href={githubUrl} target="_blank"><img src="icons/github.svg" /></a>
                    </div>
                </div>
        </div>
    );
}

export default Card;