import React, {Component} from 'react';
import axios from 'axios';
// Second Random comment I inserted for get to notice a difference for the front end in order to show commit message on github
import cssClass from './SoftwareEngineering.module.css';

class SoftwareEngineering extends Component {
    state = {
        SoftwareEngineeringArticlesByDate: {},
        // SoftwareEngineeringArticles: [],
        // SoftwareEngineeringArticles: ""
        WhichOptionIsChosen: "",
        textbody: (
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
        ),
        listDependentOnWhichOptionIsChosen: null,
            // <ul>
            //     <li>Backend-Development
            //         <ul>
            //             <li>APIs</li>
            //             <li>Databases</li>
            //         </ul>
            //     </li>
            //     <li>Frontend-Development</li>
            //     <li>Finding-A-Job</li>
            // </ul>            
        ExistsToAvoidInfiniteRerender: false,
        SoftwareEngineeringArticlesByTopic: {}
        // ClickedAListItem: false
    }

    componentDidMount () {
        axios.get( 'http://localhost:4000/getSoftwareEngineeringArticlesByDate' )
            .then( response => {
                console.log( response.data );
                this.setState({SoftwareEngineeringArticlesByDate: response.data});
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
        axios.get( 'http://localhost:4000/getSoftwareEngineeringArticlesByTopic' )
            .then( response => {
                // console.log( response.data );
                // alert(response.data )
                //B4: make the initial content list which shows by topic topics - only first level
                    //generate the content list 
                const arrOfTopicsFirstLvl = Object.keys(response.data);
                console.log(arrOfTopicsFirstLvl);
                const listItems = arrOfTopicsFirstLvl.map(
                    (topic, i) => {
                    return <li key={i}

                    onClick={() => {
                        //B4: show all articles related to that topic
                        const objectRepresentingThatTopic = response.data[topic]
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
                                            <li>{topic}
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
                            )
                        });
                        //AFTER: change content list to show subtopicss of topic you just clicked
                    }}

                    >{topic}</li>
                });
                console.log(listItems);
                //AFTER: make the initial content list which shows by topic topics - only first level
                this.setState({SoftwareEngineeringArticlesByTopic: response.data,
                    listDependentOnWhichOptionIsChosen:  (
                        <ul>
                            {listItems}
                        </ul>
                        )
                });
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    render () {
        //     listDependentOnWhichOptionIsChosen = (
        //     <ul>
        //         <li>Backend-Development
        //             <ul>
        //                 <li>APIs</li>
        //                 <li>Databases</li>
        //             </ul>
        //         </li>
        //         <li>Frontend-Development</li>
        //         <li>Finding-A-Job</li>
        //     </ul>
        //     );
        // }
        // else if (this.state.WhichOptionIsChosen === "byDate" ){
        //     //1. show all the articles by....  making them displayable in html aka. an array of divs
        //     const arrOfArticles = Object.values(this.state.SoftwareEngineeringArticlesByDate);
        //     console.log(arrOfArticles);
        //     let sweArticlesAsHTMLElements = []
        //     arrOfArticles.map(
        //         (arrOfArticlesForOneYear, i) => {
        //         arrOfArticlesForOneYear.map(
        //             (article, i) => {
        //                 sweArticlesAsHTMLElements.push(<div key={article.substring(1, 20)} dangerouslySetInnerHTML={{ __html: article}} />)
        //         });
        //     });
        //     // textBody = sweArticlesAsHTMLElements;
        //     this.setState({textbody: sweArticlesAsHTMLElements});

        //     //2. generate the content list 
        //     const arrOfYears = Object.keys(this.state.SoftwareEngineeringArticlesByDate);
        //     console.log(arrOfYears);
        //     const listItems = arrOfYears.map(
        //         (year, i) => {
        //         return <li key={i}
        //         onClick={() => {
        //             // alert("Placeholder for showing articles of year " + year);
        //             const copyOfSoftwareEngineeringArticlesForThatYear = [...this.state.SoftwareEngineeringArticlesByDate[year]]
        //             console.log(copyOfSoftwareEngineeringArticlesForThatYear);
        //             const sweArticlesAsHTMLElements2 = 
        //             copyOfSoftwareEngineeringArticlesForThatYear.map(
        //                 (article2, i) => {
        //                 return <div key={i} dangerouslySetInnerHTML={{ __html: article2}} />
        //             });
        //             console.log(sweArticlesAsHTMLElements2);
        //             // textBody = sweArticlesAsHTMLElements2;
        //             this.setState({textbody: sweArticlesAsHTMLElements2});
        //             // console.log(textBody);
        //         }}
        //         >{year}</li>
        //     });
        //     listDependentOnWhichOptionIsChosen = (
        //         <ul>
        //             {listItems}
        //         </ul>
        //         );
        // }
        // else if (this.state.WhichOptionIsChosen === "byTopic"){
        //     // const copyOfSoftwareEngineeringArticles = [...this.state.SoftwareEngineeringArticles]
        //     // const sweArticlesAsHTMLElements = copyOfSoftwareEngineeringArticles.map(
        //     //     (article, i) => {
        //     //     return <div key={i} dangerouslySetInnerHTML={{ __html: article}} />
        //     // });
        //     // textBody = sweArticlesAsHTMLElements;
        //     listDependentOnWhichOptionIsChosen = (
        //     // <p>
        //     //     default to topics
        //     // </p>
        //     <ul>
        //         <li>Backend-Development
        //             <ul>
        //                 <li>APIs</li>
        //                 <li>Databases</li>
        //             </ul>
        //         </li>
        //         <li>Frontend-Development</li>
        //         <li>Finding-A-Job</li>
        //     </ul>
        //     );
        // }
        if (this.state.WhichOptionIsChosen === "byDate" && 
        this.state.ExistsToAvoidInfiniteRerender === false){
                //1. show all the articles by....  making them displayable in html aka. an array of divs
            const arrOfArticles = Object.values(this.state.SoftwareEngineeringArticlesByDate);
            console.log(arrOfArticles);
            let sweArticlesAsHTMLElements = []
            arrOfArticles.map(
                (arrOfArticlesForOneYear, i) => {
                arrOfArticlesForOneYear.map(
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
                    {this.state.listDependentOnWhichOptionIsChosen}
                </div>  
            </div>
        </div>
        );

    }

}
export default SoftwareEngineering;

