import React from 'react';
import { TwitterTimelineEmbed,  TwitterFollowButton } from 'react-twitter-embed';

function Twitter() {
    return (
        <div className="containerBlue">
            <h1>Catch up with us on twitter</h1>
            <TwitterFollowButton
                screenName={'saurabhnemade'}
            />
             <TwitterTimelineEmbed
                sourceType="profile"
                screenName="saurabhnemade"
                options={{height: 1000}}
            />
        </div>
    )
}

export default Twitter
