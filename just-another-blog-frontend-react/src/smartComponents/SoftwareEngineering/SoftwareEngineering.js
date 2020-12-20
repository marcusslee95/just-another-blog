import React, {Component} from 'react';

class SoftwareEngineering extends Component {
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
            So… more interested in becoming a master at Googling and 
            copy pasting code from StackOverflow than everything else, huh?<br/>
            Well I don't blame you! All joking aside I'm glad you came 😀<br/>
            <br/>
            With a new front end framework seemingly popping up every other year,<br/>
            the classic "internships asking for ___ years of experience but 
            to get experience I need an internship" conundrum,<br/>
            job postings listing required qualifications that seem to 
            better describe an entire business unit than an actual person,<br/>
            and supply skyrocketing with astronomical increases in 
            aspiring Computer Science majors and Boot Camp grads…<br/>
            The world of software engineering seems as competitive and 
            hard to navigate as it has ever been.<br/>
            It might feel a bit daunting to do it alone 
            (I know it was and still is for me).<br/>
            <br/>
            Now if I were to tell you I'd be your best navigator, I'd be lying through my teeth.<br/>
            But what I can do is share with you what I've learned along the way, 
            having been in the industry for a couple years now.<br/>
            <br/>
            And of course if I'm saying stuff you know is bogus... call me out on it!<br/>
            I'd like to think of us more as vertices connected with a bidirectional edge in a graph 
            than a parent node connected to a child node in a tree.<br/>
            You get my flow?😏<br/>
            <br/>
            On the right-hand side you'll see a list of topics of which some you might be interested in.<br/>
            Click on a topic to see all the posts that fall under it.<br/>
            If you can't make up your mind, just click the by-date option 
            to start with my most recent posts!<br/>
            <br/>
            Hope you find something you like!
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
export default SoftwareEngineering;

