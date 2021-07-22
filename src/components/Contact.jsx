import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './contact.scss';

export default () => {
  const isTabletorMobile = useMediaQuery({ maxWidth: 767.98 });
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return <main className='contact-container'>
    <article className='info-container'>
      <h1>Contact Us</h1>
      <section className={'wrapper' + (isTabletorMobile ? ' flex-col' : ' flex-row')}>
        <div className={(isTabletorMobile ? '' : 'col-3') + ' flex-col'}>
          <i className='fas fa-map-marker-alt' />
          <h3>Address/PO Box</h3>
          <p>1000 Rte 386, Scottsville, New York 14546</p>
        </div>
        <div className={(isTabletorMobile ? '' : 'col-3') + ' flex-col'}>
          <i className='fas fa-mobile-alt' />
          <h3>Phone Number</h3>
          <p>(585) 889-4026</p>
        </div>
        <div className={(isTabletorMobile ? '' : 'col-3') + ' flex-col'}>
          <i className='far fa-envelope' />
          <h3>Our Email</h3>
          <p>info@ep5.org</p>
        </div>
      </section>
    </article>
    <article className='form-container'>
      <h3>Send us a message</h3>
      <p>Your comments and questions will be responded to as promptly as possible.</p>
      <form>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />
        <label>Subject</label>
        <input value={subject} onChange={e => setSubject(e.target.value)} />
        <label>Message</label>
        <textarea wrap='soft' rows='10' value={message} onChange={e => setMessage(e.target.value)} />
      </form>
      <center><button>Submit</button></center>
    </article>
  </main>
}
