import React from 'react';
import "./style.css";

function FacebookPage() {
    return (
        <div style={{width: 1000}}>
            <div class="fb-page" 
                data-href="https://web.facebook.com/thejustfm"
                data-tabs="timeline,events,messages"
                data-width="990" 
                data-hide-cover="false"
                data-show-facepile="false">
            </div>
        </div>
    )
}

export default FacebookPage
