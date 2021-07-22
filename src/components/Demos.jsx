import React from 'react';
import './demos.scss';

export default () => {
  return <main className='demos-container'>
    <article className='episode-container'>
      <h1>Demo Reels</h1>
      <section className='txt-img-wrapper'>
        <div>
          <h3>An Episode of <span className='italic'>WIDKT!</span></h3>
          <p>
            To provide a sense of what "Wow! I Didn't Know That!" will sound like, this demo reel is a condensed version of the first episode of the series. It consists of several features typical of what we'll present each week.
          </p>
          <div className='break'></div>
          <p>
            The goal was to combine modest levels of wit, whimsy, humor, and imagination with genuine scientific rigor to explain fascinating scientific ideas, questions, and news, all without dumbing anything down or talking down to the audience. The stories in this abbreviated episode merely touch on the variety of topics we'll examine.
          </p>
        </div>
        <div className='img-container'>
          <iframe src="https://www.youtube.com/embed/ZJoHNSZByO8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </section>
    </article>
    <div className='cyan-back'>
      <article className='pottery-container'>
        <section className='txt-img-wrapper'>
          <div>
            <h3>The Art of Pottery</h3>
            <p>
              This video shows two potters instructing people for a proposed instructional series on the practical ceramic arts. One of them is Jim Kozlowski, a master of pottery and the owner of Wizard of Clay, who has been making practical and artistic works in clay for over half a century. The other is Mitchell Messina, a sculptor of note who exhibits nationally, and is a professor of art for college. The goal of the series was to demonstrate the fundamentals of working with clay and firing it in kilns to form a variety of handmade pieces of art.
            </p>
          </div>
          <div className='img-container'>
            <iframe src="https://www.youtube.com/embed/qlqeDeHGeUU?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </section>
      </article>
    </div>
  </main>
}
