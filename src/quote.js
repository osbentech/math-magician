import React from 'react';
import Header from './header';
import './quote.css';

function Quote() {
  return (
    <div>
      <Header />
      <main>
        <h2>Hey|| BEN here|| officially welcoming you to my page</h2>
        <ul className="qNames">
          <li>extraodinary is where brain meets magic (Benjamin Osegbo)</li>
          <li>It is better to fail in originality than to succeed in imitation.</li>
          <li>The road to success and the road to failure are almost exactly the same</li>
        </ul>
      </main>
    </div>
  );
}
export default Quote;
