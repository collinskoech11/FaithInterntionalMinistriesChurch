import React from 'react';
import { TwitterTimelineEmbed,  TwitterFollowButton } from 'react-twitter-embed';

function Twitter() {
    return (
        <div className="containerBlue">
            <h1>Catch up with us on twitter</h1>
            <TwitterFollowButton
                screenName={'FaithMinistry2'}
            />
             <TwitterTimelineEmbed
                sourceType="profile"
                screenName="FaithMinistry2"
                options={{height:1000}}
            />
        </div>
    )
}

export default Twitter
