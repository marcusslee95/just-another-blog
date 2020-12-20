import React, {Component} from 'react';

class EverythingElse extends Component {
    state = {
    }

    render () {
        const introText = (
            <p
            style=
            {{
                textAlign: "left"
            }}
            >
            I have lots of thoughts! As I'm sure you do too!<br/>
            I find that writing them down is useful in several ways.<br/>
            Namely, the activity of writing down your thoughts takes 
            all the thoughts swirling in your head – in all it's mess -  
            and gives it structure / organization.<br/>
            This effect seems to be more pronounced when writing for an audience.<br/>
            It also gives you a fun record to look back at.<br/>
            The logic being you change over time. That change includes your thoughts.<br/>
            Record your thoughts across a lifetime and you get to see how they progressed 
            - in all their twists and turns - throughout your lifetime.<br/>
            <br/>
            So really, what I'm saying is... just being perfectly honest with you, this might 
            be more of an activity for me than for you.😅<br/>
            But hope you get something out of it too! Because unless we lived the exact same lives, <br/>
            I'm pretty sure our different experiences 
            would lead to us having different thoughts that were molded by those experiences.<br/>
            <br/>
            So let's get it started! Shall we?<br/>
            On the right you can pick either the chronological or topical option 
            to start browsing through my head (or what was once in it at least).<br/>
            Just promise me you won't get lost in there OK? 😆
            </p>
        );

        return (
        <div
        style=
            {{
                color: 'white'
            }}
        >
            {introText}
        </div>
        );
        
    }

}
export default EverythingElse;

