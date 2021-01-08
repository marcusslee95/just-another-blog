import React, {Component} from 'react';
import cssClass from '../SoftwareEngineering/SoftwareEngineering.module.css';
import axios from 'axios';

class EverythingElse extends Component {
    state = {
        SoftwareEngineeringArticlesByDate: {},
        WhichOptionIsChosen: "",
        textbody: (
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
        ),
        listDependentOnWhichOptionIsChosen: null,
        SoftwareEngineeringArticlesByTopic: {}
    }

    componentDidMount () {
        axios.get( 'http://localhost:4000/getEverythingElseArticlesByDate' )
            .then( response => {
                console.log( response.data );
                this.setState({SoftwareEngineeringArticlesByDate: response.data});
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
        axios.get( 'http://localhost:4000/getEverythingElseArticlesByTopic' )
            .then( response => {
                // console.log( response.data );
                // alert(response.data )
                this.setState({SoftwareEngineeringArticlesByTopic: response.data,
                });
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    whatHappensWhenClickByTopicHeader(){
        //B4: make the initial content list which shows by topic topics - only first level
        //generate the content list 
        const arrOfTopicsFirstLvl = Object.keys(this.state.SoftwareEngineeringArticlesByTopic);
        console.log(arrOfTopicsFirstLvl);
        const listItems = arrOfTopicsFirstLvl.map(
            (topic, i) => {
            return <li key={i}

            onClick={() => {
                //B4: show all articles related to that topic
                const objectRepresentingThatTopic = this.state.SoftwareEngineeringArticlesByTopic[topic]
                // console.log(objectRepresentingThatTopic);
                const arrOfSubtopics = Object.keys(objectRepresentingThatTopic)
                // console.log(arrOfSubtopics);
                let sweArticlesRelatedToThisTopic = [];
                arrOfSubtopics.forEach(
                    (subtopic, index) => {
                        const arrOfArticlesForThisSubtopic = objectRepresentingThatTopic[subtopic]
                        arrOfArticlesForThisSubtopic.forEach(
                            (article, indieeee) => {
                                const articleFormatThatReactCanRecognizeItsHTMLOtherwiseJustReadsAsNormalString = 
                                <div key={article.substring(1, 20)} dangerouslySetInnerHTML={{ __html: article}} />
                            sweArticlesRelatedToThisTopic.push(articleFormatThatReactCanRecognizeItsHTMLOtherwiseJustReadsAsNormalString)     
                        });
                });
                // console.log(sweArticlesRelatedToThisTopic);
                this.setState({textbody: sweArticlesRelatedToThisTopic});
                //AFTER: show all articles related to that topic

                //B4: change content list to show subtopicss of topic you just clicked
                //APPROACH:
                //1. for all the topics other than the one that was clicked, just use previous value
                //2. only for topic that was clicked instead of using previous value, create value that has subtopics too
                    //2a. we can know which topic was the clicked topic if we loop through all the list items and compare their key to current li key
                    //2b. now that we can identify clicked topic, when reach it in the loop create 2nd level ul that contains all the subtopics of that topic as lis
                // let changedContentList = [...listItems]
                let changedContentList = []
                listItems.forEach(
                    (topic, ind) => {
                        if (i === ind){//we're at the topic that we clicked 
                        const subtopicsAsHTMLListItems = arrOfSubtopics.map((subtopic, indexxx) => {
                                return <li key={indexxx}
                                onClick={() => {
                                    // alert(subtopic)
                                    //B4: show all articles related to that subtopic
                                    const sweArticlesRelatedToThisSubtopic = [];
                                    const arrOfArtInSubtopic = objectRepresentingThatTopic[subtopic]
                                    arrOfArtInSubtopic.forEach(
                                        (article, indieeeexxxxxx) => {
                                            const articleFormatThatReactCanRecognizeItsHTMLOtherwiseJustReadsAsNormalString = 
                                            <div key={article.substring(1, 20)} dangerouslySetInnerHTML={{ __html: article}} />
                                            // sweArticlesRelatedToThisSubtopic.push(article)
                                            sweArticlesRelatedToThisSubtopic.push(articleFormatThatReactCanRecognizeItsHTMLOtherwiseJustReadsAsNormalString)     
                                    });
                                    this.setState({textbody: sweArticlesRelatedToThisSubtopic});
                                    //AFTER: show all articles related to that subtopic
                                }}
                                    >{subtopic}</li>
                            }
                        )
                            let rv = (                                       
                                    <li key={topic}>{topic}
                                    <ul>
                                        {subtopicsAsHTMLListItems}
                                    </ul>
                                    </li>                                            
                                );
                            changedContentList.push(rv) 
                        }
                        else {
                            changedContentList.push(listItems[ind])    
                        }
                });
                console.log(changedContentList);
                // this.setState({listDependentOnWhichOptionIsChosen: <li>gfxgg</li>});
                this.setState({listDependentOnWhichOptionIsChosen: (
                    <ul>
                        {changedContentList}
                    </ul>
                    ),
                    //B4: highlight By Topic List Header
                    WhichOptionIsChosen: "byTopic"
                    //AFTER: highlight By Topic List Header
                });
                //AFTER: change content list to show subtopicss of topic you just clicked
            }}

            >{topic}</li>
        });
        console.log(listItems);
        //AFTER: make the initial content list which shows by topic topics - only first level
        this.setState({
            listDependentOnWhichOptionIsChosen:  (
                <ul>
                    {listItems}
                </ul>
                ),
                ExistsToAvoidInfiniteRerender2: true
        });
    }

    whatHappensWhenClickByDateHeader(){
        //1. show all the articles by....  making them displayable in html aka. an array of divs
        const arrOfArticles = Object.values(this.state.SoftwareEngineeringArticlesByDate);
        console.log(arrOfArticles);
        let sweArticlesAsHTMLElements = []
        arrOfArticles.forEach(
            (arrOfArticlesForOneYear, i) => {
            arrOfArticlesForOneYear.forEach(
                (article, i) => {
                    sweArticlesAsHTMLElements.push(<div key={article.substring(1, 20)} dangerouslySetInnerHTML={{ __html: article}} />)
            });
        });
        // textBody = sweArticlesAsHTMLElements;
        this.setState({textbody: sweArticlesAsHTMLElements});

            //2. generate the content list 
        const arrOfYears = Object.keys(this.state.SoftwareEngineeringArticlesByDate);
        console.log(arrOfYears);
        const listItems = arrOfYears.map(
            (year, i) => {
            return <li key={i}
            onClick={() => {
                // alert("Placeholder for showing articles of year " + year);
                const copyOfSoftwareEngineeringArticlesForThatYear = [...this.state.SoftwareEngineeringArticlesByDate[year]]
                console.log(copyOfSoftwareEngineeringArticlesForThatYear);
                const sweArticlesAsHTMLElements2 = 
                copyOfSoftwareEngineeringArticlesForThatYear.map(
                    (article2, i) => {
                    return <div key={i} dangerouslySetInnerHTML={{ __html: article2}} />
                });
                console.log(sweArticlesAsHTMLElements2);
                // textBody = sweArticlesAsHTMLElements2;
                this.setState({textbody: sweArticlesAsHTMLElements2});
                // console.log(textBody);
            }}
            >{year}</li>
        });
        this.setState({listDependentOnWhichOptionIsChosen:  (
        <ul>
            {listItems}
        </ul>
        ),
        ExistsToAvoidInfiniteRerender: true
        });
    }

    render () {       

        return (
        <div
        style=
            {{
                color: 'white'
            }}
        >
            <div name="articlesOrIntroTextAndContentList"
            style=
            {{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "flex-start"
            }}
            >
                <div name="articlesOrIntroText"
                style=
                {{
                    order: 1,
                    width: 600,
                    marginRight: 100
                }}
                >
                    {this.state.textbody}
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
                        onClick={() => {
                            this.whatHappensWhenClickByTopicHeader()
                            this.setState({WhichOptionIsChosen: "byTopic"})
                        }
                        }
                        className={this.state.WhichOptionIsChosen === "byTopic" ? cssClass.active : null}
                        >By Topic</li>
                        <li
                        style=
                        {{
                            
                        }}
                        onClick={() => {
                            this.whatHappensWhenClickByDateHeader()
                            this.setState({WhichOptionIsChosen: "byDate"})
                        }
                        }
                        className={this.state.WhichOptionIsChosen === "byDate" ? cssClass.active : null}
                        >By Date</li>
                    </ul>
                    {this.state.listDependentOnWhichOptionIsChosen}
                </div>  
            </div>
        </div>
        );

    }

}
export default EverythingElse;

