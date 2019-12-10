import React, { Component } from 'react'
import GitHub from './images/github.png';
import TektonTrigger from './images/tekton-trigger.png'
import PipelineRun from './images/pipelinerun.png'
import GeneratePolicy from './images/generate-policy.png'
import UnitTests from './images/unit-tests.png'
import IntegrationTests from './images/integration-tests.png'
import Background from './images/background.png';
import { 
    Wrapper,
    LabelWrapper,
    DiagramWrapper,
    DiagramLabel,
    GitHubImageWrapper,
    TektonTriggerImageWrapper,
    PipelineRunImageWrapper,
    GeneratePolicyImageWrapper,
    UnitTestsImageWrapper,
    IntegrationTestsImageWrapper,
    BackgroundImageWrapper

 } from './style';
import { Markdown } from 'spectacle';

const Label = (props) => <LabelWrapper key={`label-${props.label.index}`} selected={props.index===props.label.index}><div className="header">{props.label.header}</div><div className="description"><Markdown>{props.label.description}</Markdown></div></LabelWrapper>

class Workflow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            items: [
                {
                    index: 0
                },
                {
                    index: 1
                },
                {
                    index: 2
                },
                {
                    index: 3
                },
                {
                    index: 4
                },
                {
                    index: 5
                }
                
            ],
            width: 0,
            height: 0,
        };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }
    handleKeyPress(e) {
        if (e.key === 'ArrowUp') {
            this.setState(prevState => ({ index: (prevState.index < 6 ? prevState.index + 1 : 0)}))
        } else if (e.key === 'ArrowDown') {
            this.setState(prevState => ({ index: (prevState.index > 0 ? prevState.index - 1 : 5)}))
        }
    }
    handleHover(index) {
        // this.setState({ index: index});
    }
    updateWindowDimensions() {
        // console.log((window.innerWidth / window.innerHeight) * (395/526))
        this.setState({ width: window.innerWidth, height: window.innerHeight, scale: (window.innerWidth / window.innerHeight) * (526/395) * (0.90)})
    }
    componentDidMount() {
        this.updateWindowDimensions()
        document.addEventListener('keydown',this.handleKeyPress, false);
        window.addEventListener('resize', this.updateWindowDimensions)
    }
    componentWillUnmount() {
        document.removeEventListener('keydown',this.handleKeyPress, false);
        window.removeEventListener('resize', this.updateWindowDimensions)
    }
    render() {
        const labelView = this.props.labels.map(label => <Label key={`label-${label.index}`} index={this.state.index} label={label} />)
        return (<Wrapper >
            <DiagramWrapper scale={this.state.scale}>
                <GitHubImageWrapper src={GitHub} onMouseOver={() => this.handleHover(0)} selected={this.state.index===0}/>
                <TektonTriggerImageWrapper src={TektonTrigger} onMouseOver={() => this.handleHover(1)} selected={this.state.index===1}/>
                <PipelineRunImageWrapper src={PipelineRun} onMouseOver={() => this.handleHover(2)} selected={this.state.index===2}/>
                <GeneratePolicyImageWrapper src={GeneratePolicy} onMouseOver={() => this.handleHover(3)} selected={this.state.index===3}/>
                <UnitTestsImageWrapper src={UnitTests} onMouseOver={() => this.handleHover(4)} selected={this.state.index===4}/>
                <IntegrationTestsImageWrapper src={IntegrationTests} onMouseOver={() => this.handleHover(5)} selected={this.state.index===5}/>
                <BackgroundImageWrapper src={Background} />
            </DiagramWrapper>
            <DiagramLabel>
            {labelView}
            </DiagramLabel>
        </Wrapper>)
    }
}

export default Workflow;