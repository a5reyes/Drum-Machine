import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }

  changeHandler = (event) => {
    this.setState({
      display: event.target.value
    });
  };

  clickHandler = (datum) => {
    this.setState({
      display: datum
    });
    const audio = document.querySelector(`[title="${datum}"]`);
    if (audio) {
      audio.play();
    }
  };

  keyPressHandler = (event) => {
    const key = event.key.toUpperCase(); 
    const button = document.querySelector(`button[data-key="${key}"]`);
    if (button) {
      const datum = button.querySelector("audio").title;
      this.clickHandler(datum);
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyPressHandler);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyPressHandler);
  }

  render() {
    return (
      <div id="drum-machine">
        <h2>Drum Machine</h2>
        <div id="display">{this.state.display}</div>
        <div id="drum-pads">
          <button className="drum-pad" id="Q" data-key="Q" onClick={() => this.clickHandler("Heater 1")}>Q
            <audio className="clip" id="Q" title="Heater 1" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"></audio>
          </button>
          <button className="drum-pad" id="W" data-key="W" onClick={() => this.clickHandler("Heater 2")}>W
            <audio className="clip" id="W" title="Heater 2" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"></audio>
          </button>
          <button className="drum-pad" id="E" data-key="E" onClick={() => this.clickHandler("Heater 3")}>E
            <audio className="clip" id="E" title="Heater 3" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"></audio>
          </button>
          <br />
          <button className="drum-pad" id="A" data-key="A" onClick={() => this.clickHandler("Heater 4")}>A
            <audio className="clip" id="A" title="Heater 4" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"></audio>
          </button>
          <button className="drum-pad" id="S" data-key="S" onClick={() => this.clickHandler("Clap")}>S
            <audio className="clip" id="S" title="Clap" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"></audio>
          </button>
          <button className="drum-pad" id="D" data-key="D" onClick={() => this.clickHandler("Open-HH")}>D
            <audio className="clip" id="D" title="Open-HH" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"></audio>
          </button>
          <br />
          <button className="drum-pad" id="Z" data-key="Z" onClick={() => this.clickHandler("Kick-n'-Hat")}>Z
            <audio className="clip" id="Z" title="Kick-n'-Hat" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"></audio>
          </button>
          <button className="drum-pad" id="X" data-key="X" onClick={() => this.clickHandler("Kick")}>X
            <audio className="clip" id="X" title="Kick" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"></audio>
          </button>
          <button className="drum-pad" id="C" data-key="C" onClick={() => this.clickHandler("Closed-HH")}>C
            <audio className="clip" id="C" title="Closed-HH" src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"></audio>
          </button>
          <br />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
