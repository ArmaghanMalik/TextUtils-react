import React, {useState} from 'react'


export default function Textform(props) {
const handleClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success");
}
const [emails, setEmails] = useState([]);

const extractEmails = () => {
    let newEmails=text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
    setEmails(newEmails || []);
}

const handleExtraSpaces =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed","success");
  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!","success"); 
  }

const handlelowClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case","success");
}
const handleOnChange = (event)=>{
    // console.log("ONCHANGE");
    setText(event.target.value);
}

    const [text, setText] = useState('');

  return (
    <>
        <div className = "containeer" style={{color: props.mode==='dark'?'white':'#061f44'}}>
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#061f44'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick = {handleClick}> Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick = {handlelowClick}> Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick = {extractEmails}> Extract Emails</button>
            <button className="btn btn-primary mx-2" onClick = {handleExtraSpaces}> Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick = {handleCopy}> Copy Text</button>

            
        </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#061f44'}}>
        <h2> Your text Summary</h2>
        <p> {text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Email</h2>
        <p>{emails.length > 0 ? emails.join(', ') : 'No emails found'}</p>

        </div>
     
     </>  

  )
}

