import React, { PureComponent } from 'react';
import './App.css';

class App extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      input: '/* add your jsx here */',
      output: "",
      error: ""
    }
  }
  update(e) {
    let code = e.target.value;
    console.log(code);
    try {
      console.log(window.Babel
        .transform(code, { presets: ["es2015", "react"] })
        .code)
      this.setState({
        output: window.Babel
          .transform(code, { presets: ["es2015", "react"] })
          .code,
        error: ""
      })
    } catch (error) {
      this.setState({ error: error.message })
    }
  }
  render() {
    console.log("output",this.state.output, typeof this.state.output);
    return (
      <div className="App">
        <header className="header">
          {this.state.error}
        </header>
        <div className="container">
          <textarea
            onChange={this.update.bind(this)}
            defaultValue={this.state.input}
          >
          </textarea>
          <pre>
            {this.state.output}
          </pre>
        </div>
      </div>
    );
  }

}

export default App;
