import React from 'react';
import './style.css';
import { TwitterTimelineEmbed,  TwitterFollowButton } from 'react-twitter-embed';

function Twitter() {
    return (
        <div className="containerBlue">
            
            <TwitterFollowButton
                screenName={'FaithMinistry2'}
            />
             <TwitterTimelineEmbed
                sourceType="profile"
                screenName="FaithMinistry2"
                options={{height:400}}
            />
        </div>
    )
}

export default Twitter
