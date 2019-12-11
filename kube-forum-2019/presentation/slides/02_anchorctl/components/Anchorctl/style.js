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
        transform: scale(${props => props.scale > 2.7 ? 2.7 : props.scale});
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

export const SetupImageWrapper = styled.img`
    position: absolute;
    z-index: 11;
    grid-area: image;
    width: 340px;
    bottom: ${props => props.selected ? 395 : 390}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(15px 0 10px #FBE83D) drop-shadow(-15px 0 10px #FBE83D);`
          : `none`};
    
`
export const LookupImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 370 : 364}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(40px 0 10px #FBE83D) drop-shadow(-30px 0 10px #FBE83D);`
          : `none`};
`;

export const AssertImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 300 : 295}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(20px 0 10px #FBE83D) drop-shadow(-20px 0 10px #FBE83D);`
          : `none`};
`;

export const TeardownImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 300 : 295}px;
    filter: ${props =>
        props.selected
          ? `drop-shadow(30px 0 10px #FBE83D) drop-shadow(-30px 0 10px #FBE83D);`
          : `none`};
`;

export const BackgroundImageWrapper = styled.img`
    position: absolute;
    z-index: 2;
    width: 340px;
    bottom: ${props => props.selected ? 368 : 368}px;
`;