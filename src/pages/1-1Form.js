import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Slider } from "@material-ui/core";
import "./../css/slider.css";
import "./../css/sidebar.css";


const useStyles = makeStyles(theme => ({
    formStyle: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -30%)',
      width: '30%',
      height: '80%',
      overflowX: 'auto',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
    slider: {
        width: '60%',
        marginLeft: '20%',
        marginRight: '20%',
        },
  }));

export default function OneOnOneForm() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const [sentimentValue, setSentimentValue] = useState(50);
  const [checkboxes1, setCheckboxes1] = useState([
    { label: '', checked: false },
    // { label: 'actions_items_for_manager', checked: false },
  ]);
  const [checkboxes2, setCheckboxes2] = useState([
    { label: '', checked: false },
    // { label: 'actions_items_for_manager', checked: false },
  ]);
  
  const [state, setState] = React.useState({
    wins: '',
    concerns: '',
    sentiment: '',
    constructive_selfFeedback: '',
    constructive_FeedbackForManager: '',
    positive_selfFeedback: '',
    positive_FeedbackForManager: '',
  });

  const handleWinsChange = (e) => {
    setState({ ...state, wins: e.target.value });
  };

  const handleConcernsChange = (e) => {
    setState({ ...state, concerns: e.target.value });
  };

  const handleSentimentChange = (e,value) => {
    setSentimentValue({ ...sentimentValue, sentiment: value });
  };

  const handleCSFChange = (e) => {
    setState({ ...state, constructive_selfFeedback: e.target.value });
  };

  const handleCFMChange = (e) => {
    setState({ ...state, constructive_FeedbackForManager: e.target.value });
  };

  const handlePSFChange = (e) => {
    setState({ ...state, positive_selfFeedback: e.target.value });
  };

  const handlePFMChange = (e) => {
    setState({ ...state, positive_FeedbackForManager: e.target.value });
  };
//   First Check Box
  const handleCheckboxChange1 = (index) => (e) => {
    const newCheckboxes = [...checkboxes1];
    newCheckboxes[index].checked = e.target.checked;
    setCheckboxes1(newCheckboxes);
  };

  const handleAddCheckbox1 = () => {
    const newCheckboxes = [...checkboxes1, { label: '', checked: false }];
    setCheckboxes1(newCheckboxes);
  };

  const handleRemoveCheckbox1 = (index) => () => {
    const newCheckboxes = [...checkboxes1];
    newCheckboxes.splice(index, 1);
    setCheckboxes1(newCheckboxes);
  };

  const handleLabelChange1 = (index) => (e) => {
    const newCheckboxes = [...checkboxes1];
    newCheckboxes[index].label = e.target.value;
    setCheckboxes1(newCheckboxes);
  };

// Second Checkbox

  const handleCheckboxChange2 = (index) => (e) => {
    const newCheckboxes = [...checkboxes2];
    newCheckboxes[index].checked = e.target.checked;
    setCheckboxes2(newCheckboxes);
  };

  const handleAddCheckbox2 = () => {
    const newCheckboxes = [...checkboxes2, { label: '', checked: false }];
    setCheckboxes2(newCheckboxes);
  };

  const handleRemoveCheckbox2 = (index) => () => {
    const newCheckboxes = [...checkboxes2];
    newCheckboxes.splice(index, 1);
    setCheckboxes2(newCheckboxes);
  };

  const handleLabelChange2 = (index) => (e) => {
    const newCheckboxes = [...checkboxes2];
    newCheckboxes[index].label = e.target.value;
    setCheckboxes2(newCheckboxes);
  };
  



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      wins: state.wins,
      concerns: state.concerns,
      sentiment: sentimentValue.sentiment,
      constructive_selfFeedback: state.constructive_selfFeedback,
      constructive_FeedbackForManager: state.constructive_FeedbackForManager,
      positive_selfFeedback: state.positive_selfFeedback,
      positive_FeedbackForManager: state.positive_FeedbackForManager,
      actions_items_for_team_member: checkboxes1.filter(c => c).map(c => ({
        label: c.label,
        checked: c.checked
      })),
      actions_items_for_Manager: checkboxes2.filter(d => d).map(d => ({
        label: d.label,
        checked: d.checked
      })),
      
    };
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);
    // store data locally
    fetch('http://localhost:8000/submit-form/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (response.ok) {
          console.log('Form data submitted successfully');
          setIsOpen(false);
        } else {
          console.error('Error submitting form data');
        }
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
      });

      
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  if (!isOpen) {
    return null; // return null if form is closed
  }

  
    return (
        <>
        {/* <page> */}
        {/* css in sidebar.css */}
      <Paper  className='Paper'>
      <div >
        <br/>
        <form onSubmit={handleSubmit}>
        
          <label>
          <h2>Wins:</h2>
            <br />
            <textarea value={state.name} onChange={handleWinsChange}> add Wins</textarea>
            
          </label>
          <br />
          <br/>
          
          <label>
          <h2>Concerns:</h2>
            <br />
            <textarea value={state.concerns} onChange={handleConcernsChange}> add Concerns</textarea>
          </label>
          <br /><br/>
          <label>
          <h2>Sentiment:</h2>
                <br />
                <Slider
                  className={classes.slider}
                  value={sentimentValue.sentiment}
                  onChange={handleSentimentChange}
                  aria-labelledby="sentiment-slider"
                  step={10}
                  marks
                  min={0}
                  max={100}
                />
              </label>
        <br /><br/>
          
          <label>
          <h2>Constructive Self Feedback:</h2>
            <br />
            <textarea value={state.constructive_selfFeedback} onChange={handleCSFChange}> add Concerns</textarea>
            {/* <input type="text" value={state.constructive_selfFeedback} onChange={handleCSFChange} /> */}
          </label>
          <br /><br/>
          
          <label>
          <h2>Constructive Feedback For Manager:</h2>
            <br />
            <textarea value={state.constructive_FeedbackForManager} onChange={handleCFMChange}> add Concerns</textarea>
            {/* <input type="text" value={state.constructive_FeedbackForManager} onChange={handleCFMChange} /> */}
          </label>
          <br /><br/>
          
          <label>
            <h2>Positive Self Feedback:</h2>
            <br />
            <textarea value={state.positive_selfFeedback} onChange={handlePSFChange}> add Concerns</textarea>
            {/* <input type="text" value={state.positive_selfFeedback} onChange={handlePSFChange} /> */}
          </label>
          <br /><br/>
          
          <label>
          <h2>Positive Feedback For Manager:</h2>
            <br />
            <textarea value={state.positive_FeedbackForManager} onChange={handlePFMChange}> add Concerns</textarea>
            {/* <input type="text" value={state.positive_FeedbackForManager} onChange={handlePFMChange} /> */}
          </label>
          <br /><br/>
          <h2>Action Items For Team Member:</h2>
          {checkboxes1.map((checkbox, index) => (
              <label key={index}>
                <br />
                <div className='checkbox-container'>
                <input
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={handleCheckboxChange1(index)}
                />
                <textarea value={checkbox.label} onChange={handleLabelChange1(index)}> add Concerns</textarea>
                
                <button class="button-88-red" type="button" onClick={handleRemoveCheckbox1(index)}>
                  Remove
                </button></div>
              </label>
            ))}
            <button class="button-33" type="button" onClick={handleAddCheckbox1}>
              Add Items
            </button>
            <br /><br/>

            <h2>Action Items For Manager:</h2>
          {checkboxes2.map((checkbox, index) => (
              <label key={index}>
                <br />
                <div className='checkbox-container'>
                <input
                  type="checkbox"
                  checked={checkbox.checked}
                  onChange={handleCheckboxChange2(index)}
                />
                <textarea value={checkbox.label} onChange={handleLabelChange2(index)}> add Concerns</textarea>
                
                <button class="button-88-red" type="button" onClick={handleRemoveCheckbox2(index)}>
                  Remove
                </button></div>
              </label>
            ))}
            
            <button class="button-33" type="button" onClick={handleAddCheckbox2}>
              Add Items
            </button>            
          <br /><br/>
          <div className='form-button'>
          <button class="button-88" type="submit"style={{ display: "inline-block", marginRight: "10px" }}>Submit</button>         

          <button class="button-88-red" type="button" onClick={handleClose}style={{ display: "inline-block" }}>Exit</button>
          </div>
        </form>
      </div>
      </Paper>
      {/* </page> */}
      </>
    );
  }
  