import React from 'react';
import { FacebookProvider, Feed } from 'react-facebook';

function JustFm() {
    return (
        <FacebookProvider appId="123456789">
        <Feed link="https://www.facebook.com">
          {({ handleClick }) => (
            <button type="button" onClick={handleClick}>Share on Feed</button>
          )}
        </Feed>
      </FacebookProvider> 
    )
}

export default JustFm
