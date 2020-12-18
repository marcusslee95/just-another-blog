import React, {Component} from 'react';
import SubmitForm from './SubmitForm';

class UserWritingArticle extends Component {
    state = {
    }

    render () {
        let mainText = (
            <h2
            style=
            {{
                textAlign: "center"
            }}
            >
            Thought it would be ccol if we could have user-generated content too!<br/>
            Though I probably won't be able to publish everything that gets sent in,<br/>
            I'll make sure to go over each one :-) so fire away!</h2>
        );

        let emptySpace = (
            <div
            style=
            {{
                height: 150
            }}
            ></div>
        );

        return (
        <div
        style=
            {{
                color: 'white'
            }}
        >
            {mainText}
            {emptySpace}
            <SubmitForm/>
        </div>
        );
        
    }

}
export default UserWritingArticle;

