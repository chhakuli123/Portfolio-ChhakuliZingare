import './footer.css';

export const Footer = () => {
    return (
        <footer id="connect" className='footer'>
            <div className='faint-heading center'>&lt; Connect /&gt;</div>
            <div className='social-links'>
                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://github.com/chhakuli123'
                >
                    <i className='fab fa-github'></i>
                </a>

                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://twitter.com/ChhakuliZingare'
                >
                    <i className='fab fa-twitter'></i>
                </a>

                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.instagram.com/chhakuli_zingare/'
                >
                    <i className='fab fa-instagram'></i>
                </a>
                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://www.linkedin.com/in/chhakuli-zingare-322986234/'
                >
                    <i className='fab fa-linkedin'></i>
                </a>

                <a
                    className='social'
                    rel='noreferrer'
                    target='_blank'
                    href='https://hashnode.com/@chhakuli'
                >
                    <i className='fas fa-at'></i>
                </a>
            </div>
        </footer>
    );
};