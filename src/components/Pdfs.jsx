import React from 'react';
import './pdfs.scss';

export default () => {
  let pdfs = {
    'Category 1': [
      {
        'name': 'PDF Link 1',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 2',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 3',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 4',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 5',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 6',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 7',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 8',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
    ],
    'Category 2': [
      {
        'name': 'PDF Link 1',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 2',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 3',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 4',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 5',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 6',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 7',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 8',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
    ],
    'Category 3': [
      {
        'name': 'PDF Link 1',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 2',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 3',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 4',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 5',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 6',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 7',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
      {
        'name': 'PDF Link 8',
        'text': 'DownloadPDFHere.pdf',
        'link': '#'
      },
    ],
  };
  let pdfRender = [];
  for (let key in pdfs) {
    let category = pdfs[key];
    let categoryItems = [];
    for (let i = 0; i < category.length; i++) {
      let item = category[i];
      categoryItems.push(<li>
        <p>{item['name']} - <a href={item['link']}>{item['text']}</a></p>
      </li>)
    }
    pdfRender.push(<section>
      <h3>{key}</h3>
      <ul>
        {categoryItems}
      </ul>
    </section>)
  }

  return <main className='pdfs-container'>
    <article>
      <h1>PDFs</h1>
      {pdfRender}
    </article>
  </main>
}
