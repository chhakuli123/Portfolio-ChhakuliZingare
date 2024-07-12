import './footer.css';

import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FiAtSign } from 'react-icons/fi';

const SocialLink = ({ href, Icon }) => (
  <a
    className='social'
    rel='noreferrer'
    target='_blank'
    href={href}
  >
    <Icon size={24} />
  </a>
);

export const Footer = () => {
  return (
    <footer id="connect" className='footer'>
      <div className='faint-heading center'>&lt; Connect /&gt;</div>
      <div className='social-links'>
        <SocialLink href='https://github.com/chhakuli123' Icon={FaGithub} />
        <SocialLink href='https://www.linkedin.com/in/chhakuli-zingare-322986234/' Icon={FaLinkedin} />
        <SocialLink href='https://twitter.com/ChhakuliZingare' Icon={FaTwitter} />
        <SocialLink href='https://hashnode.com/@chhakuli' Icon={FiAtSign} />
        <SocialLink href='https://www.instagram.com/chhakulizingare/' Icon={FaInstagram} />
      </div>
    </footer>
  );
};