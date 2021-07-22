import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './footer.scss';

export default props => {
  const {setPath} = props;
  const isTabletorMobile = useMediaQuery({ maxWidth: 767.98 });
  const history = useHistory();

  const navPush = nav => {
    setPath(nav);
    history.push(nav);
  }

  return <>
    <footer>
      <div className='infobox-container wrapper'>
        <section>
          <div className='infobox-wrapper'>
            <div className='infobox'>
              <h2>Contact</h2>
              <p>
                1000 Rte 386, Scottsville
                <br/>
                New York 14546
              </p>
              <p>(585) 889-4026</p>
              <p>info@ep5.org</p>
            </div>
            <div className='infobox'>
              <h2>Connect</h2>
              <a onClick={() => navPush('/about')}>About</a>
              <a onClick={() => navPush('/contact')}>Contact</a>
              <a onClick={() => navPush('/endorsements')}>Endorsements</a>
            </div>
            <div className='wrapper'>
              <h2>Pages</h2>
              <div className='wrapper'>
                <div className='infobox'>
                  <a onClick={() => navPush('/widkt')}>WIDKT!</a>
                  <a onClick={() => navPush('/aop')}>Art of Programming</a>
                </div>
                <div className='infobox'>
                  <a onClick={() => navPush('/demos')}>Demos</a>
                  <a onClick={() => navPush('/pdfs')}>PDFs</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='divider'></div>
      <div className='logo-container wrapper'>
        <section className={isTabletorMobile ? '' : 'flex-row'}>
          <img src='img/logo-full-light.png' alt='Logo: ep5 - Educational Broadcasting Foundation'/>
          <div className='divider'></div>
          <p>External links are provided for reference purposes. ep5 is not responsible for the content of external Internet sites.</p>
        </section>
      </div>
      <div className='copyright-container wrapper'>
        <section>
          <p>Copyright © 1988-{new Date().getFullYear()} ep5 Broadcasting Foundation. All Rights Reserved.</p>
        </section>
      </div>
    </footer>
  </>
}
