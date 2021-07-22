import React from 'react';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './home.scss';

export default props => {
  const {setPath} = props;
  const isTabletorMobile = useMediaQuery({ maxWidth: 767.98 });
  const history = useHistory();

  const navPush = nav => {
    setPath(nav);
    history.push(nav);
  }

  return <main className='home-container'>
    <article className={'icon-container' + (isTabletorMobile ? ' flex-col' : ' flex-row')}>
      <div className='flex-col'>
        <img src='icon/VolunteerIcon.png' alt='Art of hand' />
        <h3>Volunteer</h3>
        <p>We draw on the skills and commitment of both volunteers and radio and television production professionals to create interesting and engaging educational content.</p>
      </div>
      <div className='flex-col'>
        <img src='icon/SponsorIcon.png' alt='Art of hand presenting a moneybag' />
        <h3>Sponsor</h3>
        <p>Advertising potential may be limited on public broadcasting, but the Internet reaches a far broader audience and offers ample scope for representing the sponsor's interests.</p>
      </div>
      <div className='flex-col'>
        <img src='icon/DonorIcon.png' alt='Art of hand presenting a present box' />
        <h3>Donate</h3>
        <p>Individual donations are appreciated because they help with funding projects.</p>
      </div>
    </article>
    <div className='cyan-back'>
      <article className={'radio-container' + (isTabletorMobile ? ' flex-col' : '')}>
        <h2>An Innovative Public Radio Series</h2>
        <section className='txt-img-wrapper'>
          <div>
            <h3>Introduction to <span className='italic'>Wow! I Didn't Know That! (WIDKT!)</span></h3>
            <p>
              Our series <span className='italic'>WIDKT!</span> will select an unusual and intriguing topic from one of many branches in science, capture the heart of the story, and tell it in a way that listeners will easily understand. Within the format of half an hour, each story will be developed in fine detail while also being made appealing. An increase in budget would allow for the format to possibly be doubled to a full hour where there will be substantially greater involvement in each story told, which means more research, writing, and editing costs.
            </p>
            <div className='break'></div>
            <p>
              These stories will not come from Wikipedia or any other media sources on the Internet. They will not be repackaged press releases from high-tech manufacturers or national laboratories. Rather, these stories will be written and, in some instances, told by real scientists and engineers working with the science and technology described.
            </p>
            <center><button onClick={() => navPush('/widkt')}>Learn More</button></center>
          </div>
          <div className='img-container'>
            <img src='img/ExperiencedScientists.jpg' alt='Experienced scientists' />
          </div>
        </section>
      </article>
    </div>
    <article className='banner-container'>
      <div className='page-banner'>
        <img src='img/earth.jpg' />
        <div className='banner-text'>
          <h1>We are passionate about education being one of the most important functions of civilization.</h1>
        </div>
      </div>
    </article>
    <article className='coding-container'>
      <h2>Our Vision for Teaching Coding</h2>
      <section>
        <h3>Learning with <span className='italic'>The Art of Programming</span></h3>
        <p>
          For those who do not or simply cannot devote four years to a Computer Science course at university, we offer a sophisticated and extremely effective way of education via presentation by a skilled actor depciting an experience teacher in the classroom. Using a unique combination of proven teaching techniques and proprietary methods, we have developed a program that takes a "cookbook" approach to teaching coding. Our goal with <span className='italic'>The Art of Programming</span> is to present modern, high-quality educational material in the manner of the best of public television — engaging, expressive, and enthusiastic.
        </p>
      </section>
      <section className='txt-img-wrapper'>
        <div>
          <h3>An Emphasis on How the Viewer Will Learn</h3>
          <p>
            Unlike hardcopy books which need multiple editions to make updates and corrections, our video series will be completely current, up-to-date, and consistent with the latest releases of the programming language and the tools used in its application to real and interesting problems. The examples used in explaining the principles will take the form of reusable modules that do useful tasks and which can be "plugged in" to the programs that the viewer creates on their own. Another important point is that the best way of learning is from a really good teacher, in the classroom, one-on-one. How can you possibly achieve this on the Internet? We've found a way that comes very close. It's not perfect, but it does work.
          </p>
          <center><button onClick={() => navPush('/aop')}>Learn More</button></center>
        </div>
        <div className='img-container'>
          <img src='img/StudyingWithOnlineVideoLesson.jpg' alt='Filming a man giving a lecture' />
        </div>
      </section>
    </article>
    <div className='cyan-back'>
      <article className='closing-container'>
        <div className={'wrapper' + (isTabletorMobile ? ' flex-col' : ' flex-row')}>
          <div className={isTabletorMobile ? '' : 'col-2'}>
            <h3>
              We are passionate about education being one of the most important functions of civilization. However, education has yet to fully exploit the advantages offered by the Internet. With the Internet's ability to reach almost everyone, at any time and in any place, it opens doors that people previously only dreamt of.
            </h3>
          </div>
          <div className={isTabletorMobile ? '' : 'col-2'}>
            <h3>
              Our mission is to continue creating high-quality Internet instruction by using our innovative, reliable, and cost-efficient techniques. Our management team has experience in getting the most out of limited resources. We never cut corners; only inefficiencies.
            </h3>
          </div>
        </div>
      </article>
    </div>
    <article className='sponsors-container'>
      <h2>Sponsors</h2>
      <section>
        <img className='microsoft' src='img/Microsoft.png' alt='Microsoft logo' />
        <img className='izotope' src='img/iZotope.png' alt='Izotope logo' />
      </section>
    </article>
  </main>
}
