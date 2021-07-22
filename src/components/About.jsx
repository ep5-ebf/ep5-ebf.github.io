import React from 'react';
import './about.scss';

export default () => {
  return <main className='about-container'>
    <article className='intro-container'>
      <h1>About Us</h1>
      <section className='txt-img-wrapper'>
        <div>
          <h3>Who We Are</h3>
          <p>
            The ep5 Educational Broadcasting Foundation is a New York nonprofit charitable institution established to produce educational content for public radio and television. We are at present privately funded and rely upon volunteers for almost all functions. For several years, ep5 produced a public radio series entitled "Ninety Second Science". We released episodes at the rate of one per weekday, until production funding ended a few years ago.
          </p>
        </div>
        <div className='img-container'>
          <img src='img/CollaborativeWorkInTVStudio.jpg' />
        </div>
      </section>
    </article>
    <div className='cyan-back'>
      <article>
        <h2>Our Story</h2>
        <section>
          <div>
            <h3>What We Are</h3>
            <p>
              ep5 was incorporated in New York in 1988 under the state's Not-For-Profit Corporation Law. We are registered with the Attorney-General's Charities Bureau, ID 44-09-89. ep5 qualifies under Internal Revenue Code §501(c)(3) as tax-exempt, and we are authorized to issue deductible receipts for donations.
            </p>
          </div>
          <div>
            <h3>What We Do</h3>
            <p>
              Our corporate purpose is simple. There is a heavy emphasis upon education and how people receive it. Not including college and university costs, well over two thirds of a trillion dollars a year are spend in America on education alone. We are attempting to make a contribution, which improves education through the media of radio and television, in whatever form they take.
            </p>
            <div className='break'></div>
            <p>
              Public broadcasting should do more than merely entertain. That suffices for commercial radio and television, but educational broadcasting has the potential for more. This is why we exist. It’s that simple.
            </p>
          </div>
        </section>
      </article>
    </div>
  </main>
}
