import React from 'react';
import { useHistory } from 'react-router-dom';
import './aop.scss';

export default props => {
  const {setPath} = props;
  const history = useHistory();

  const navPush = nav => {
    setPath(nav);
    history.push(nav)
  }

  return <main className='aop-container'>
    <article className='intro-container'>
      <h1>Art of Programming</h1>
      <section>
        <h3>The Premise</h3>
        <p>
          The world-wide growth in interest in software development skills makes this the ideal time for a video series which will teach the viewer computer programming. With an emphasis on actually writing functional and useful code, the series will forego the academic rigor of a university computer science degree program and concentrate on creating real-world applications.
        </p>
      </section>
      <section>
        <h3>Broadcasting and Television</h3>
        <p>
          Public television originated as a means of education as well as a source of entertainment. In recent years, public television now offers numerous instructional programs dealing with various subjects and activities. And at the same time, the number of people interested in learning computer programming has grown. We feel as though we can contribute to the increasing demand in education for computer progamming with this educational series.
        </p>
      </section>
    </article>
    <div className='cyan-back'>
      <article className='solution-container'>
        <section className='txt-img-wrapper'>
          <div>
            <h3>A Solution We Provide</h3>
            <p>
              We believe that success in creating this educational series requires understanding the audience extremely well. At ep5, we draw on our own experiences in self-taught Java, C#, and other languages in making the promise that something of high-value is offered to the millions of Americans with an interest in coding. Plenty of other countries similarly see the value in teaching programming literacy.
            </p>
            <div className='break'></div>
            <p>
              Picture a lesson presented by a skilled actor depicting an experienced teacher in the classroom. She speaks clearly and at a moderate pace, never stumbling over her words. There is no harshness in her voice and she is easy to understand. Presenting the course content with style, charm, enthusiasm, and charisma, she is considerate of her audience. This is what the presenter of our program will strive to do.
            </p>
          </div>
          <div className='img-container'>
            <img src='img/FemaleVlogging.jpeg' alt='Woman recording in front of camera' />
          </div>
        </section>
        <section>
          <h3>The Difference We Can Make</h3>
          <p>
            The question may occur to you, what can we offer in this series that may not be available anywhere else? In conventional schools, various constraints such as time and budget may limit how much can be taught. We can offer an effective alternative to classroom education. In addition to the thousands of people embarking on a Computer Science program at university and additional thousands taking formal training courses, many people with an interest in programming undertake to learn it on their own. People who decide to self-study programming utilize the vast number of YouTube tutorials and books about Java programming. We feel that we can help expand the amount of resources available to people.
          </p>
        </section>
      </article>
    </div>
    <article className='goals-container'>
      <section>
        <h3>Working With the Experts</h3>
        <p>
          In this project, The ep5 Educational Broadcasting Foundation will work with expert Java specialists to develop a simple and replicable methodology of effective self-learning of software development. Specific teaching practices will be proven through real-world testing and validation. We will then demonstrate these techniques in practice, in the form of this public television series.
        </p>
      </section>
      <section>
        <h3>The Ultimate Goal</h3>
        <p>
          Our intent is to provide a very high-quality, free-of-cost alternative to conventional online training. We believe the concept of computer-based training has great value and potential, and that realizing this potential can be done using our methods.
          <div className='break'></div>
          The series design includes a clever and cost-effective advertising campaign aimed at public schools and libraries in underserved and underbanked communities. It will encourage students and readers to watch the series and learn a useful and usable skill. This educational content will be made as widely available as our resources will allow, at no cost to the schools, libraries, and other public institutions.
        </p>
      </section>
    </article>
    <article className='learn-more-container'>
      <section>
        <h3>Interested in more details?</h3>
        <center><button onClick={() => navPush('/contact')}>Contact Us</button></center>
      </section>
    </article>
  </main>
}
