import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { animateScroll } from 'react-scroll';
import './header.scss';

export default props => {
  const {path, setPath} = props;
  const isTabletorMobile = useMediaQuery({ maxWidth: 1020 });
  const history = useHistory();
  const [pageImg, setPageImg] = useState('');
  const [burger, setBurger] = useState(false);
  const [content, setContent] = useState(false);

  useEffect(() => setPath(history.location.pathname), [])
  useEffect(() => animateScroll.scrollToTop({ duration: 100 }), [path]);
  useEffect(() => getPageImg(), [path])

  const getPageImg = () => {
    switch (path) {
      case '/':
        setPageImg('img/BroadcastingShotBannerImage.jpeg')
        break;
      case '/widkt':
        setPageImg('img/StudioMicrophone.jpg')
        break;
      case '/aop':
        setPageImg('img/LectureRecordingShot.jpeg')
        break;
      case '/demos':
        setPageImg('img/CameraLens.jpg')
        break;
      case '/about':
        setPageImg('img/our-story.jpg')
        break;
      case '/contact':
        setPageImg('img/contact.jpg')
        break;
      case '/pdfs':
        setPageImg('')
        break;
      case '/endorsements':
        setPageImg('')
        break;
      default:
        break;
    }
  };

  const navPush = nav => {
    setPath(nav);
    history.push(nav);
    setBurger(false);
  }

  return <>
    <header>
      <div className='wrapper'>
        <div className='logo-container'>
          <img src='img/logo-full-light.png' alt='Logo: ep5 - Educational Broadcasting Foundation' onClick={() => navPush('/')}/>
        </div>
        {isTabletorMobile ? <button onClick={() => setBurger(!burger)}><i className='fas fa-bars' /></button> : ''}
        <nav className={'nav' + (isTabletorMobile ? (burger ? '' : ' hidden') : '')}>
          {isTabletorMobile ? <div className='menu-head'>
            <h2>Menu</h2>
            <button onClick={() => setBurger(!burger)}><i className='fas fa-times'></i></button>
          </div> : ''}
          <ol>
            <li onClick={() => navPush('/')}>Home</li>
            <li onClick={() => navPush('/widkt')}>WIDKT!</li>
            <li onClick={() => navPush('/aop')}>Art of Programming</li>
            <li className='dropdown'>
              <span onClick={() => setContent(!content)}>Content</span>
              <ol className={'content-drop' + (isTabletorMobile ? (content ? '' : ' hidden') : '')}>
                <li onClick={() => navPush('/demos')}>Demos</li>
                <li onClick={() => navPush('/pdfs')}>PDFs</li>
              </ol>
            </li>
            <li onClick={() => navPush('/about')}>About</li>
            <li onClick={() => navPush('/contact')}>Contact</li>
          </ol>
        </nav>
      </div>
    </header>
    {((path !== '/pdfs') && (path !== '/endorsements')) ? <div className={'page-image' + (path === '/' ? ' home' : '')}>
      <img src={pageImg} />
      {path === '/' ? <div className='home-title'>
        <h2>Since 1988</h2>
        <h1>Producing Informational and Educational Content for the Public</h1>
        <center><button onClick={() => navPush('/contact')}>Contact Us</button></center>
      </div> : ''}
    </div> : ''}
  </>
}
