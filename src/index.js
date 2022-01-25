import React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function CalcField(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      <TextField
        key="field"
        value={props.value}
        disabled
        variant="outlined"
        sx={{
          width: "300px"
        }}
      />
    </Box>
  );
}

function BeforeField(props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}
    >
      <TextField
        disabled
        value={props.value}
        variant="standard"
        sx={{
          width: "300px",
          m: 1
        }}
      />
    </Box>
  );
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: "",
      beforeField: ""
    };
  }

  renderButton(key) {
    return (
      <Button
        variant="outlined"
        color="primary"
        key={key}
        sx={{
          m: 1
        }}
        onClick={() => this.addKey(key)}
      >
        {key}
      </Button>
    );
  }

  addKey(key) {
    this.setState({
      field: this.state.field + key
    });
  }

  renderAcButton() {
    return (
      <Button
        variant="contained"
        color="primary"
        key="AC"
        sx={{
          m: 1
        }}
        onClick={() => this.allClear()}
      >
        AC
      </Button>
    );
  }

  allClear() {
    this.setState({
      field: "",
      beforeField: this.state.field
    });
  }

  renderCalcButton() {
    return (
      <Button
        variant="contained"
        color="primary"
        key="="
        sx={{
          m: 1
        }}
        onClick={() => this.calc()}
      >
        =
      </Button>
    );
  }

  calc() {
    this.setState({
      field: Function("return (" + this.state.field + ")")(),
      beforeField: this.state.field
    });
  }

  render() {
    return (
      <Box
        sx={{
          width: "400px"
        }}
      >
        <BeforeField value={this.state.beforeField} />
        <CalcField value={this.state.field} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            m: 1
          }}
        >
          {this.renderButton("(")}
          {this.renderButton(")")}
          {this.renderButton("%")}
          {this.renderAcButton()}
          {this.renderButton("7")}
          {this.renderButton("8")}
          {this.renderButton("9")}
          {this.renderButton("/")}
          {this.renderButton("4")}
          {this.renderButton("5")}
          {this.renderButton("6")}
          {this.renderButton("*")}
          {this.renderButton("1")}
          {this.renderButton("2")}
          {this.renderButton("3")}
          {this.renderButton("-")}
          {this.renderButton("0")}
          {this.renderButton(".")}
          {this.renderCalcButton()}
          {this.renderButton("+")}
        </Box>
      </Box>
    );
  }
}

ReactDOM.render(<Calculator />, document.querySelector("#app"));
