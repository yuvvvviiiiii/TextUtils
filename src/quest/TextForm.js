import React, {useState} from 'react'
 
export default function TextForm(props) {
  
  const handleUpClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case!", "success")
  }
 
  const handlelowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case!", "success")
  }

  const handleOnChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
    
  }

  const handleOnClick = () => {
    let newText = " ";
    setText(newText)
    props.showAlert("TextBox cleared!", "success")
  }

  const handleExtraSpaces = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success")
  }

  const handleCopy = ()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to Clipboard!", "success")
  }
  const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className ="my-3">
        
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="7"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length - 1} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text: "Enter something in the textbox above to it preview here!"}</p>
    </div>
    </>
  )
}
