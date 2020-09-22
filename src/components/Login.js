import { Checkbox, FormControlLabel} from '@material-ui/core';
import React from 'react';
import {useState} from 'react';
import config from '../config';
import Firebase from 'firebase';

    
const Login = () => { 
  let [isLoading,setIsLoading] = useState(true);
//Initializing Firebase
if(!Firebase.apps.length)
{
Firebase.initializeApp(config);
}

   const [email,setEmail] = useState('');
    const [interview,setInterview] = useState(false);
    const [survey,setSurvey] = useState(false);
    const [text,setText] = useState('');
   

    const handleInterviewChange = (event) => {
      setIsLoading(true);
      if(event.target.checked)
      setInterview(true);
      else
      setInterview(false);
      
      };
      const handleSurveyChange = (event) => {
        setIsLoading(true);
        if(event.target.checked)
        setSurvey(true);
        else
        setSurvey(false);
      };

      const onSubmit =e=>{
        e.preventDefault();


       //Data Object to be inserted
        const newData = {
          id:Math.floor(Math.random()*100000000),
          text,
          email,
          interview,
          survey
        }


        //Validations
        if(newData.text === '')
        return alert('Bitte geben Sie Ihren Namen an.'); 
        if(newData.email ==='')
        return alert('Bitte fügen Sie Ihre E-Mail hinzu');
        if(newData.email !== "undefined"){
          let lastAtPos = newData.email.lastIndexOf('@');
          let lastDotPos = newData.email.lastIndexOf('.');
          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && newData.email.indexOf('@@') === -1 && lastDotPos > 2 && (newData.email.length - lastDotPos) > 2)) {
            return alert('Bitte fügen Sie eine E-Mail im richtigen Format hinzu');
           }
         
           //Debugging
        console.log(text);
        console.log(email);
        console.log(survey);
        console.log(interview);
        
        //Adding data in Firebase
        Firebase.database().ref(`Participants/${newData.id}`).set({
         Name: newData.text,
         Email:newData.email,
         interview:newData.interview,
         survey:newData.survey,
         
        })

        setIsLoading(false);
        

        //Resetting all the fields
        setText('');
        setEmail('');
        setSurvey(false);
        setInterview(false);   
        
        

        
      }
    }


    






    return (
        <div>
          <div className = "mainHeading">
               <h3>Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein</h3>
               {isLoading? null : <p className = "p">Danke für Ihre Teilnahme! Wir werden uns in Kürze bei Ihnen melden.</p>}
               </div>
      <form onSubmit = {onSubmit} id= "create-form-control" >
        <div className="form-control">
          <div className = "textbox" >
          <input id='name' type="text"  value = {text}  placeholder="David Johns" onChange = {(e)=>setText(e.target.value)}/>
          <br></br>
          <input id='email' type="text" value = {email}  placeholder="123@abc.com" onChange = {(e)=>setEmail(e.target.value)} />
          </div>
        
          <div className = 'checkBoxdiv'>
          <FormControlLabel
            control={<Checkbox name="news_letter" />}
            label="News Letter"
          />
          <FormControlLabel
            control={<Checkbox name="surveys" checked = {survey} onClick = {handleSurveyChange} />}
            label="Interessiert an einer schnellen Umfrage (dauert 2 Minuten)"
          />
          <FormControlLabel
            control={<Checkbox name="interviews" checked = {interview} onClick = {handleInterviewChange}/>}
            label="Interessiert an einem Interview (dauert 15 Minuten)"
          />
          </div>
        
          <button className = "btn" >Senden </button>
        
        </div>
      
        
      </form> 
        </div>
    )
}

export default Login;
