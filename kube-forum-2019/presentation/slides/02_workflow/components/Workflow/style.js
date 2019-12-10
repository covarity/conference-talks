import styled from 'styled-components'

export const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        'diagram'
        'label';
    grid-template-rows: 700px 250px;
    grid-row-gap: 10px; 
    @media only screen and (min-width: 1200px) {
        grid-template-rows: 700px 150px;
    }
    /* padding-bottom: 127px; */

`;
export const LabelWrapper = styled.div`
    grid-area: label;
    display: ${props => props.selected ? `flex` : `none`};
    flex-direction: column;
    position: relative;
    text-align: left;
    color: white;
    
    .header {
        font-size: 35px;
        font-weight: bold;
        margin-bottom: 30px;
    }
    .description p {
        font-size: 30px;
        color: white;
        font-style: italic;
    }
    .description code {
        font-size: 22px;
        color: white;
        background: #80808070;
    }
    
`;
export const DiagramWrapper = styled.div`
    grid-area: diagram;
    transform: scale(${props => props.scale > 1.5 ? 1.5 : props.scale});
    @media only screen and (min-width: 1200px) {
        transform: scale(${props => props.scale > 2.3 ? 2.3 : props.scale});
    }
    
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-family: Avenir Next, sans-serif;

    }
`;
export const DiagramLabel = styled.div`
    display: flex;

`;

export const GitHubImageWrapper = styled.img`
    position: absolute;
    z-index: 11;
    grid-area: image;
    width: 340px;
    bottom: ${props => props.selected ? 405 : 400}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(15px 0 10px #FBE83D) drop-shadow(-15px 0 10px #FBE83D);`
          : `none`};
    
`
export const TektonTriggerImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 395 : 390}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(40px 0 10px #FBE83D) drop-shadow(-30px 0 10px #FBE83D);`
          : `none`};
`;

export const PipelineRunImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 350 : 345}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(20px 0 10px #FBE83D) drop-shadow(-20px 0 10px #FBE83D);`
          : `none`};
`;

export const GeneratePolicyImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 275 : 270}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(20px 0 10px #FBE83D) drop-shadow(-30px 0 10px #FBE83D);`
          : `none`};
`;

export const UnitTestsImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 220 : 220}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(45px 0 10px #FBE83D) drop-shadow(-20px 0 10px #FBE83D);`
          : `none`};
`;

export const IntegrationTestsImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 260 : 255}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(20px 0 10px #FBE83D) drop-shadow(-40px 0 10px #FBE83D);`
          : `none`};
`;

export const BackgroundImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 220 : 220}px;
`;