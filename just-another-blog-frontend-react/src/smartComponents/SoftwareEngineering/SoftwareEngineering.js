import React, {Component} from 'react';
import axios from 'axios';
// Random comment I inserted for get to notice a difference for the front end in order to show commit message on github
import cssClass from './SoftwareEngineering.module.css';

class SoftwareEngineering extends Component {
    state = {
        SoftwareEngineeringArticles: [],
        // SoftwareEngineeringArticles: ""
        WhichOptionIsChosen: "byTopic"
    }

    componentDidMount () {
        axios.get( 'http://localhost:4000/getSoftwareEngineeringArticles' )
            .then( response => {
                console.log( response.data );
                this.setState({SoftwareEngineeringArticles: response.data});
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
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

        const copyOfSoftwareEngineeringArticles = [...this.state.SoftwareEngineeringArticles]
        const sweArticlesAsHTMLElements = copyOfSoftwareEngineeringArticles.map(
            (article, i) => {
            return <div key={i} dangerouslySetInnerHTML={{ __html: article}} />
        });

        let listDependentOnWhichOptionIsChosen = null;
        if (this.state.WhichOptionIsChosen === "byTopic"){
            listDependentOnWhichOptionIsChosen = (
            <p>
                default to topics
            </p>
            );
        }
        else if (this.state.WhichOptionIsChosen === "byDate"){
            listDependentOnWhichOptionIsChosen = (
            <p>
                Switch to Date
            </p>
            );
        }
            
       

        return (
        <div
        style=
            {{
                color: 'white'
            }}
        >
            {/* {this.state.SoftwareEngineeringArticles} */}
            {/* <div dangerouslySetInnerHTML={{ __html: this.state.SoftwareEngineeringArticles[1]}} /> */}
            <div name="articlesAndContentList"
            style=
            {{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }}
            >
                <div name="articles"
                style=
                {{
                    order: 1,
                    width: 600,
                    marginRight: 100
                }}
                >
                    {sweArticlesAsHTMLElements}
                </div>

                <div name="contentList"
                style=
                {{
                    order: 2
                }}
                >
                    <ul className={cssClass.contentListHeaders}
                    >
                        <li
                        style=
                        {{
                            marginRight: 30,
                        }}
                        onClick={() => this.setState({WhichOptionIsChosen: "byTopic"})}
                        className={this.state.WhichOptionIsChosen === "byTopic" ? cssClass.active : null}
                        >By Topic</li>
                        <li
                        style=
                        {{
                            
                        }}
                        onClick={() => this.setState({WhichOptionIsChosen: "byDate"})}
                        className={this.state.WhichOptionIsChosen === "byDate" ? cssClass.active : null}
                        >By Date</li>
                    </ul>
                    {listDependentOnWhichOptionIsChosen}
                    {/* <ul>
                        <li
                        style=
                        {{
                            display: "inline"
                        }}
                        >Backend</li>
                        <li
                        style=
                        {{
                            display: "inline"
                        }}
                        >Frontend</li>
                    </ul> */}
                </div>  
            </div>
            {/* {this.state.SoftwareEngineeringArticles[1]}
            {this.state.SoftwareEngineeringArticles[0]} */}
            {introText}
        </div>
        );

    }

}
export default SoftwareEngineering;

