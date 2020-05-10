import React, { Component, } from 'react';
import './App.css';
import marked from 'marked'
import { sampleText } from './sampleText'

class App extends Component {
  state = {
    text:sampleText
  }

  handelChange = event => {
    const text = event.target.value
    this.setState({ text })
  }

  renderText = text => marked(text, { sanitize: true })

  render(){
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>
          <textarea
          onChange={this.handelChange}
            value={this.state.text}
            rows='35' 
            className='form-control'/>
          </div>
          <div className='col-sm-6'>
            <div dangerouslySetInnerHTML={{ __html: this.renderText(this.state.text) }} />
          </div>
        </div>
        
          
        
      </div>  
    
      
    );
  }
}

export default App;
