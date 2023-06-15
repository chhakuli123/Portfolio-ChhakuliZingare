export const Card = ({ name, imgUrl, info, live, github }) => {
    return (
        <div className='project-card'>
            <div className='img-container'>
                <img
                    className='card-img'
                    src={imgUrl}
                    alt=''
                />
            </div>
            <div className='card-info'>
                <h1 className='app-name'>{name}</h1>
                <span className='app-intro'>
                    {info}
                </span>
                <br />
                <div className='buttons'>
                    <a target="_blank" rel="noreferrer" href={live} className='card-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 btn-svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>

                    </a>
                    <a target="_blank" rel="noreferrer" href={github} className='card-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 btn-svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}