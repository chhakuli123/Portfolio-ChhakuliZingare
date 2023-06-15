export function Blog({ title, headerUrl, date, url }) {
    return (
        <a
            className='project-card blog'
            href={url}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div className='img-container'>
                <img
                    className='blog-img'
                    src={headerUrl}
                    alt='blog-header'
                />
            </div>
            <div className='card-info'>
                <h1 className='app-name'>
                    {title}
                </h1>
                <div className='app-intro'>
                    <p>{date}</p>
                    <p className='reads'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            width='1em'
                            height='1em'
                            fill='currentColor'
                            className='blogs-clock'
                        >
                            <path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z'></path>
                            <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z'></path>
                        </svg>
                        3 min read
                    </p>
                </div>
            </div>
        </a>
    );
}