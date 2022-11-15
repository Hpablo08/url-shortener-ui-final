import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';
import { postUrls } from '../../apiCalls';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: [],
    };
  }

  componentDidMount = async () => {
    this.fetchUrl();
  };
  fetchUrl = async () => {
    try {
      const urlList = await getUrls();
      const data = await urlList.json();
      console.log(data);
      this.setState({ urls: data.urls });
    } catch {
      this.setState({
        error: "error getting urls",
      });
      console.log(this.state.error);
    }
  };
  addNewUrl = (newUrl) => {
    console.log(newUrl);
    postUrls(newUrl)
      .then((data) => this.setState({ urls: [...this.state.urls, data] }))
      .catch((error) => {
        this.setState({
          error: `Oops! That's a ${error.message}. Something went wrong adding your URL. Make sure you filled in all input fields!`,
        });
      });
  };

  render() {
    return (
      <main className="App">
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addNewUrl={this.addNewUrl} />
        </header>

        <UrlContainer urls={this.state.urls} />
      </main>
    );
  }
}

export default App;
