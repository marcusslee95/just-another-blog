import React, {useState} from 'react';
// import cssClass from './Logo.module.css'
import axios from 'axios';

const SubmitForm = (props) => {
    const [UserWrittenArticle, setUserWrittenArticle] = useState("");
    // const [testString, setTestString] = useState("testString");
    let submitText = (
        <h4>
            Upload the file of the article you wrote here and then click the submit button to submit it!
        </h4>
    );

    let uploadButton = (
        <input type="file" name="avadakadabra"
        onChange={(e) => {
            console.log(e.target.files);
            console.log(e.target.files[0]);
            const uploadedFile = e.target.files[0];
            const data = new FormData();
            data.append('article', uploadedFile);
            // axios.post("http://localhost:4000/uploadFileAPI", data,  {headers: {
            //           'Content-Type': 'multipart/form-data'
            //         }})
            // .then(res => { // then print response status
            //     console.log(res.statusText)
            // });
            setUserWrittenArticle(data);
        }}
        />
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
            axios.post("http://localhost:4000/uploadFileAPI", UserWrittenArticle,  {headers: {
                      'Content-Type': 'multipart/form-data'
                    }})
            .then(res => {
                console.log(res.statusText)
            });
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
