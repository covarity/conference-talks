import React, { Component } from "react";
import Setup from "./images/setup.png";
import Lookup from "./images/lookup.png";
import Assert from "./images/assert.png";
import Teardown from "./images/teardown.png";
import Background from "./images/anchorctl.png";
import {
  Wrapper,
  LabelWrapper,
  DiagramWrapper,
  DiagramLabel,
  SetupImageWrapper,
  LookupImageWrapper,
  AssertImageWrapper,
  TeardownImageWrapper,
  BackgroundImageWrapper,
} from "./style";
import { Markdown } from "spectacle";

const Label = props => (
  <LabelWrapper
    key={`label-${props.label.index}`}
    selected={props.index === props.label.index}
  >
    <div className="header">{props.label.header}</div>
    <div className="description">
      <Markdown>{props.label.description}</Markdown>
    </div>
  </LabelWrapper>
);

class Anchorctl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      items: [
        {
          index: 0,
        },
        {
          index: 1,
        },
        {
          index: 2,
        },
        {
          index: 3,
        },
      ],
      width: 0,
      height: 0,
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  handleKeyPress(e) {
    if (e.key === "ArrowUp") {
      this.setState(prevState => ({
        index: prevState.index < 3 ? prevState.index + 1 : 0,
      }));
    } else if (e.key === "ArrowDown") {
      this.setState(prevState => ({
        index: prevState.index > 0 ? prevState.index - 1 : 3,
      }));
    }
  }
  handleHover(index) {
    // this.setState({ index: index});
  }
  updateWindowDimensions() {
    // console.log((window.innerWidth / window.innerHeight) * (395/526))
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
      scale: (window.innerWidth / window.innerHeight) * (526 / 395) * 1.1,
    });
  }
  componentDidMount() {
    this.updateWindowDimensions();
    document.addEventListener("keydown", this.handleKeyPress, false);
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  render() {
    const labelView = this.props.labels.map(label => (
      <Label
        key={`label-${label.index}`}
        index={this.state.index}
        label={label}
      />
    ));
    return (
      <Wrapper>
        <DiagramWrapper scale={this.state.scale}>
          <SetupImageWrapper
            src={Setup}
            onMouseOver={() => this.handleHover(0)}
            selected={this.state.index === 0}
          />
          <LookupImageWrapper
            src={Lookup}
            onMouseOver={() => this.handleHover(1)}
            selected={this.state.index === 1}
          />
          <AssertImageWrapper
            src={Assert}
            onMouseOver={() => this.handleHover(2)}
            selected={this.state.index === 2}
          />
          <TeardownImageWrapper
            src={Teardown}
            onMouseOver={() => this.handleHover(3)}
            selected={this.state.index === 3}
          />
          <BackgroundImageWrapper
            src={Background}
            onMouseOver={() => this.handleHover(4)}
          />
          <BackgroundImageWrapper src={Background} />
        </DiagramWrapper>
        <DiagramLabel>{labelView}</DiagramLabel>
      </Wrapper>
    );
  }
}

export default Anchorctl;
