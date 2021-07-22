import React from 'react';
import { useHistory } from 'react-router-dom';
import './widkt.scss';

export default props => {
  const {setPath} = props;
  const history = useHistory();

  const navPush = nav => {
    setPath(nav);
    history.push(nav)
  }

  return <main className='widkt-container'>
    <article className='intro-container'>
      <h1>Wow! I Didn't Know That!</h1>
      <div className='txt-img-wrapper'>
        <div>
          <h3>Conversations About Science</h3>
          <p>
            The public radio series <span className='italic'>Wow! I Didn't Know That! (WIDKT!)</span> uses unusual and intriguing topics from science and tells them in ways that are both entertaining and easy to understand. However, the series is not merely a collection of amusing and bizarre facts from science — <span className='bold'>each story has an important underlying statement to make</span>. Each topic equal opportunity to be represented in the series, giving each a fair chance at discussion. After all, those who view news or listen to media expect a higher level of integrity and maturity, and that's what our series proposes to give them.
          </p>
          <div className='break'></div>
          <p>
            Although <span className='italic'>WIDKT!</span> has a news-magazine format, the program does not actually do news reporting. Thus, <span className='italic'>WIDKT!</span> is not time-sensitive, as news is by definition. The benefit of this for both underwriter and broadcaster is that it can be aired on any date and as often as the radio station needs. This aspect of <span className='italic'>WIDKT!</span> is important because radio stations are not found at any point to rebroadcast older content, such as last month’s news.
          </p>
        </div>
        <div className='img-container'>
          <img src='img/WomanRecordingFromHome.jpg' alt='Woman recording on microphone from home' />
        </div>
      </div>
    </article>
    <div className='cyan-back'>
      <article className='topics-container'>
        <h2>Some Talking Points</h2>
        <section>
          <img src='icon/TimeTravelIcon.png' alt='Art of hourglass depicting passage of time' />
          <h3>Why time travel will always be science fiction.</h3>
          <p>
            Time travel is a lovely topic for sci-fi, but there are many problems with the concept in the real world. Various hypotheses exist regarding time travel, but they are unlikely to overcome the restraints set by what is currently known about physics.
          </p>
        </section>
        <section>
          <img src='icon/BlackHoleIcon.png' alt='Art of black hole' />
          <h3>What will keep massive black holes at the centers of galaxies from eventually devouring everything?</h3>
          <p>
            Unfortunately, nothing. Gravity seems impossible to stop, affecting whatever it can. Although it is merely a matter of time when, a question to ask is when that time is.
          </p>
        </section>
        <section>
          <img src='icon/MicrobesIcon.png' alt='Art of microbes' />
          <h3>This is, has been, and always will be the Age of Microbes.</h3>
          <p>
            Very persuasive arguments have been made that the simpler the lifeform, the easier it is for that lifeform to exist and thrive. It has the greatest tolerance to extreme environments, and is even able to survive substances meant to specifically kill them. No matter how much Lysol you spray, at least some microbes will always survive, just as they have since being the first living things on Earth.
          </p>
        </section>
        <section>
          <img src='icon/HumanVSBacteriaIcon.png' alt='Art of human on left and bateria on right' />
          <h3>The war between humans and bacteria is not going well. What is the current outlook for the future?</h3>
          <p>
            Humans and bacteria both evolve, but bacteria evolve at an astoundingly faster rate. Thus, when antibiotics are able to kill 99.9% of the bacteria present, the strongest 0.1% which remain evolve and expand, eventually rendering the antibiotic ineffective. And inventing a new antibiotic is rather difficult — the last new one dates back to 1987.
          </p>
        </section>
        <section>
          <img src='icon/PhysicsIcon.png' alt={'Art of a Newton\'s cradle'} />
          <h3>Why is empty space actually nothing of the sort?</h3>
          <p>
            According to quantum mechanics, there exists virtual particles which can pop into and immediately out of existence. These particles cannot be seen, measured, or controlled, yet they exist in supposedly empty space.
          </p>
        </section>
        <section>
          <img src='icon/PeopleIcon.png' alt='Art of three people/figures' />
          <h3><span className='italic'>WIDKT!</span> Demo Reel</h3>
          <p>
            The opening story of this condensed episode presents a spirited defense of wind turbines as an alleged menace to birds. Then, on a more serious level, we examine what Enrico Fermi asked about ET and what the answer might be. Next, why reliance on stealth technology may not be such a good idea, after all. This is followed by a lively explanation of that dreadful social embarrassment, borborygmi.
          </p>
        </section>
      </article>
    </div>
    <article className='insights-container'>
      <h2>Insights</h2>
      <section>
        <h3>Production</h3>
        <p>
          We estimate that completion of production of the full series will require approximately sixteen months. This will provide sufficient time for fine-tuning and refining each episode. In order to ensure the very best and most consistent quality across the entire 52 episodes, we’ll complete production of the series before releasing it for broadcast. Production cost for the full-year series will be right in line with the current public radio averages.
        </p>
      </section>
      <div className='wrapper'>
        <h3>Reviews</h3>
        <section>
          <p>
            "There wasn't anything I didn't like. I thought it was very well done. It has just the right mix of whimsy and seriousness. I particularly liked the segment on teaching science and the Socratic method. And I liked all the different voices. It definitely has the public radio vibe to it."
          </p>
          <p className='test-name'>- Marie de Roos</p>
        </section>
        <section>
          <p>
            "You all keep it interesting with your inflections. I generally focus much more consistently with the written word, but the way you made this holds my attention well. The humor helped, as well. Bonus points for making the physicist a 'she'."
          </p>
          <p className='test-name'>- Susie LaBrie</p>
        </section>
        <section>
          <p>
            "It is interesting. Diverse topics. Your voices are clear and articulate. I really like that you identity yourselves. A thought - to create more individuality, theme musical piece for each voice."
          </p>
          <p className='test-name'>- Helen Steh</p>
        </section>
      </div>
    </article>
    <article className='learn-more-container'>
      <section>
        <h3>Want to Learn More?</h3>
        <center><button onClick={() => navPush('/contact')}>Contact Us</button></center>
      </section>
    </article>
  </main>
}
