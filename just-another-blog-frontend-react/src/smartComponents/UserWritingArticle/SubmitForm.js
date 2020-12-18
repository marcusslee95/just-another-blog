import React from 'react';
// import cssClass from './Logo.module.css'

const SubmitForm = (props) => {
    let submitText = (
        <h4>
            Upload the file of the article you wrote here and then click the submit button to submit it!
        </h4>
    );

    let uploadButton = (
        <button
        onClick={() => {
            alert("Mocking user uploading a file");
        }}
        >Upload File</button>
    );

    let emptySpace = (
        <div
        style=
        {{
            height: 50
        }}
        ></div>
    );

    let submitButton = (
        <button
        onClick={() => {
            alert("Mocking user sending article");
        }}
        >Submit</button>
    );


    return (
        // <div className={cssClass.TheLogo}>
        <div
        style=
        {{
            textAlign: "center"
        }}
        >
            {submitText}
            {uploadButton}
            {emptySpace}
            {submitButton}
        </div>
    );
}

export default SubmitForm;
