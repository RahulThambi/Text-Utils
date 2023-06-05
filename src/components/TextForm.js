import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUpClick = () =>{     //This is an arrow function
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to uppercase!","success");
  }

  const handleLoClick = () =>{     //This is an arrow function
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowercase!","success");

  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Successfully speaking!","success");

  }

  const handleClearClick = () =>{     //This is an arrow function
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared successfully!","success");

  }

  const handleOnChange = (event) =>{    //This is an arrow function
    setText(event.target.value);  //update text to whatever currently is in the text box
  }

  //below the default value of text is set to null
  const [text, setText] = useState('');  //creating a state, we use this since react doesn't allows us to update a variables value easilt as text="new text";
  // text="new value of state" //wrong way to change state
  //setText("new Text");      //correct way to change state
  
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'#212529',color:props.mode==='dark'?'white':'black'}}id='myBox' rows="8"></textarea>  {/*this onChange function is a must or else we wont be able to type in the textbox*/}
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
      <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}