import React from 'react';

import Masonry from 'react-masonry-component';

import './Events.css';

function Events(props: any): any {
  return (
    <div className="grid">
      <div className="grid-sizer" />
      <Masonry>
        <div className="grid-item">
          <div className="dim" />
          <div className="cardEventDetails">
            <div className="eventImg">
              <img alt="img" src="" />
            </div>
            <div className="eventName">
              <h2 className="cardEventName">Event Name</h2>
            </div>
          </div>
          <div className="cardEventRatings">
            <p>1000+ Following | 3000+ Votes</p>
            <button>+ Follow</button>
          </div>
          <img
            alt="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg"
          />
        </div>
        <div className="grid-item">
          <div className="dim" />
          <div className="cardEventDetails">
            <div className="eventImg">
              <img alt="img" src="" />
            </div>
            <div className="eventName">
              <h2 className="cardEventName">Event Name</h2>
            </div>
          </div>
          <div className="cardEventRatings">
            <p>1000+ Following | 3000+ Votes</p>
            <button>+ Follow</button>
          </div>
          <img
            alt="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/submerged.jpg"
          />
        </div>
        <div className="grid-item">
          <div className="dim" />
          <div className="cardEventDetails">
            <div className="eventImg">
              <img alt="img" src="" />
            </div>
            <div className="eventName">
              <h2 className="cardEventName">Event Name</h2>
            </div>
          </div>
          <div className="cardEventRatings">
            <p>1000+ Following | 3000+ Votes</p>
            <button>+ Follow</button>
          </div>
          <img
            alt="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/look-out.jpg"
          />
        </div>
        <div className="grid-item">
          <div className="dim" />
          <div className="cardEventDetails">
            <div className="eventImg">
              <img alt="img" src="" />
            </div>
            <div className="eventName">
              <h2 className="cardEventName">Event Name</h2>
            </div>
          </div>
          <div className="cardEventRatings">
            <p>1000+ Following | 3000+ Votes</p>
            <button>+ Follow</button>
          </div>
          <img
            alt="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg"
          />
        </div>
        <div className="grid-item">
          <div className="dim" />
          <div className="cardEventDetails">
            <div className="eventImg">
              <img alt="img" src="" />
            </div>
            <div className="eventName">
              <h2 className="cardEventName">Event Name</h2>
            </div>
          </div>
          <div className="cardEventRatings">
            <p>1000+ Following | 3000+ Votes</p>
            <button>+ Follow</button>
          </div>
          <img
            alt="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg"
          />
        </div>
        <div className="grid-item">
          <div className="dim" />
          <div className="cardEventDetails">
            <div className="eventImg">
              <img alt="img" src="" />
            </div>
            <div className="eventName">
              <h2 className="cardEventName">Event Name</h2>
            </div>
          </div>
          <div className="cardEventRatings">
            <p>1000+ Following | 3000+ Votes</p>
            <button>+ Follow</button>
          </div>
          <img
            alt="img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg"
          />
        </div>
      </Masonry>
    </div>
  );
}

export default Events;
