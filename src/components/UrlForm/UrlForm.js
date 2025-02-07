import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title && this.state.urlToShorten) {
      this.setState({ errorMessage: "" });
      this.props.addNewUrl(this.state);
    } else {
      this.setState({
        errorMessage: "Please fill out both input fields before submitting",
      });
    }
    
    this.clearInputs();
  }

  clearInputs = () => {
    this.setState({title: '', urlToShorten: ''});
  }

  render() {
    return (
      <div>
        {this.state.errorMessage && <h1 className='error-message'>{this.state.errorMessage}</h1>}
        <form>
          <input
            type="text"
            placeholder="Title..."
            name="title"
            value={this.state.title}
            onChange={(e) => this.handleNameChange(e)}
          />

          <input
            type="text"
            placeholder="URL to Shorten..."
            name="urlToShorten"
            value={this.state.urlToShorten}
            onChange={(e) => this.handleNameChange(e)}
          />

          <button onClick={(e) => this.handleSubmit(e)}>Shorten Please!</button>
        </form>
      </div>
    );
  }
}

export default UrlForm;
