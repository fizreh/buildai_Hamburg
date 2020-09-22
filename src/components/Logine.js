import React, { Component } from 'react'
import { Checkbox, FormControlLabel} from '@material-ui/core';

export default class Login extends Component {
    constructor(props) {
     
        this.state = {
          survey: true,
          interview:true,
          name,
          email
        };
      }

      OnNameChange = () =>{
          this.state.name = e.target.value;
      }
      OnEmailChange = () =>{
          this.state.email = e.target.value;
      }
      

    render() {
        return (
            <div>
          <div className = "mainHeading">
               <h3>Bitte geben Sie Ihren Namen und Ihre E-Mail-Adresse ein</h3>
               </div>
      <form onSubmit = "" id= "create-form-control" >
        <div className="form-control">
          <div className = "textbox">
          <input id='inputText' type="text"  value = {text}  placeholder="Enter your name..." onChange = {handleEmailChange}/>
          <br></br>
          <input id='mainInput' type="text" value = {email}  placeholder="Enter your email..." onChange = {handleNameChange} />
          </div>
        
          <div className = 'checkBoxdiv'>
          <FormControlLabel
            control={<Checkbox name="news_letter" />}
            label="News Letter"
          />
          <FormControlLabel
            control={<Checkbox name="surveys" checked = {survey} onClick = {handleSurveyChange} />}
            label="Ready for a quick survey ( takes 2 min approx)"
          />
          <FormControlLabel
            control={<Checkbox name="interviews" ecked = {interview} onClick = {handleInterviewChange} />}
            label="Ready for a short Interview (takes 15 minutes)"
          />
          </div>
        
          <button className = "btn" >Enter Your Details </button>
        
        </div>
        
      </form> 
        </div>
            
        )
    }
}
