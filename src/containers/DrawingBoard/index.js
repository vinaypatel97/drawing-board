import React, { Component } from 'react'
import './DrawingBoard.css';
import DrawingPad from '../../js/drawingBoard';
import pen from '../../images/pen.png';
import dot from '../../images/dot.png';
import eraser from '../../images/erase.png'
import highlighter from '../../images/highlight.png';

export default class Index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            penColor: 'black',
            hightlightColor: 'rgba(0,0,0,0.5)',
            selectedOption: 1,
            selectedPx: 'small',
            placeHolderColor: 'black'
        }

        this.drawingPad = null;
        this.canvas = null;
    }

    componentDidMount() {
        localStorage.setItem("isHighlighter", "false");

        const canvas = document.getElementById('drawing-pad');
        this.canvas = canvas;
        function resizeCanvas() {
            const ratio = Math.max(window.devicePixelRatio || 1, 1);
            canvas.width = canvas.offsetWidth * ratio;
            canvas.height = canvas.offsetHeight * ratio;
            canvas.getContext("2d").scale(ratio, ratio);
        }

        window.onresize = resizeCanvas;
        resizeCanvas();

        const drawingPad = new DrawingPad(canvas, {
            backgroundColor: 'rgb(255, 255, 255)',
            minWidth: 1,
            maxWidth: 1,
            dotSize: 1
        });

        this.drawingPad = drawingPad;

    }

    startDrawing = (index) => {

        localStorage.setItem("isHighlighter", "false");
        const { penColor, hightlightColor } = this.state;
        this.setState({ selectedOption: index, selectedPx: 'small' });
        this.drawingPad.changeBrushColor(penColor, hightlightColor);
        const ctx = this.canvas.getContext('2d');
        ctx.globalCompositeOperation = 'source-over';
        const data = this.drawingPad.toData();
        if (data) {
            const lastNode = data.length > 0 && data[data.length - 1];
            if (lastNode && lastNode.isHighLighter) {
                data.pop();
                this.drawingPad.fromData(data);
            }
        }
        window.setTimeout(() => this.updatePx('small'));

    }

    startErase = (index) => {
        localStorage.setItem("isHighlighter", "false");
        this.setState({ selectedOption: index, selectedPx: null });
        this.drawingPad.changeBrushColor('white');
        var data = this.drawingPad.toData();
        this.drawingPad.updateBrushWidth(10, 10, 10);
        if (data) {
            const lastNode = data.length > 0 && data[data.length - 1];
            if (lastNode && lastNode.isHighLighter) {
                data.pop();
                this.drawingPad.fromData(data);
            }
        }
        var ctx = this.canvas.getContext('2d');
        ctx.globalCompositeOperation = 'destination-out';
    }

    startHighlighting = (index) => {
        const { penColor, hightlightColor } = this.state;
        this.setState({ selectedOption: index, selectedPx: null });
        this.drawingPad.updateBrushWidth(5, 5, 5);
        this.drawingPad.changeBrushColor(penColor, hightlightColor);
        localStorage.setItem("isHighlighter", "true");
        var ctx = this.canvas.getContext('2d');
        ctx.globalCompositeOperation = 'source-over';
    }

    onChangeColor = (e, type) => {
        const val = e.target.value;
        if (type === 'penColor') {
            this.setState({ penColor: val });
            this.drawingPad.changeBrushColor(val);
        } else if (type === 'highLighter') {
            const op50 = this.convertHex(val, 50);
            this.setState({ hightlightColor: op50, placeHolderColor: val });
            this.drawingPad.changeBrushColor(null, op50);
        }
    }

    convertHex = (hexCode, opacity) => {
        var hex = hexCode.replace('#', '');

        if (hex.length === 3) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }

        var r = parseInt(hex.substring(0, 2), 16),
            g = parseInt(hex.substring(2, 4), 16),
            b = parseInt(hex.substring(4, 6), 16);

        return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
    }

    getCss = (index) => {
        const { selectedOption, selectedPx } = this.state;
        if (typeof index === 'string') {
            return selectedPx === index ? 'selected' : 'notSelected';
        }
        return selectedOption === index ? 'selected' : 'notSelected';
    }

    updatePx = (type) => {
        const { selectedOption } = this.state;
        if (selectedOption !== 1) return;
        this.setState({ selectedPx: type });
        const width = this.getBrushWidth(type);
        this.drawingPad.updateBrushWidth(width, width, width);
    }

    getBrushWidth = (type) => {
        switch (type) {
            case 'small':
                return 1;
            case 'medium':
                return 3;
            case 'large':
                return 5
            default:
                return null
        }
    }

    render() {

        const { penColor, placeHolderColor } = this.state;

        return (
            <div>
                <h1 className="mainColor">Drawing Board</h1>
                <div className="wrapper">
                    <div className="leftPane">
                        <img src={pen} className={`padding10 large cursorP margin10 ${this.getCss(1)}`} alt="img" onClick={() => this.startDrawing(1)} />
                        <div>
                            <img src={dot} className={`small margin10 cursorP ${this.getCss('small')}`} alt="img" onClick={() => this.updatePx('small')} />
                            <img src={dot} className={`medium margin10 marginB6 cursorP ${this.getCss('medium')}`} alt="img" onClick={() => this.updatePx('medium')} />
                            <img src={dot} className={`large margin10 marginB4 cursorP ${this.getCss('large')}`} alt="img" onClick={() => this.updatePx('large')} />
                        </div>
                        <div>
                            <span>Pen Color : </span><input type="color" id="favcolor" name="favcolor" className={`margin10 cursorP`} value={penColor} onChange={(e) => this.onChangeColor(e, 'penColor')}></input>
                        </div>
                        <img src={eraser} id="erase" className={`padding10 margin10 large cursorP ${this.getCss(2)}`} alt="img" onClick={() => this.startErase(2)} />
                        <div>
                            <img src={highlighter} id="highlight" className={`padding10 margin10 large cursorP ${this.getCss(3)}`} alt="img" onClick={() => this.startHighlighting(3)} />
                        </div>
                        <div>
                            <span>HL Color : </span><input type="color" id="favcolor" name="favcolor" className={`margin10 cursorP`} value={placeHolderColor} onChange={(e) => this.onChangeColor(e, 'highLighter')}></input>
                        </div>
                    </div>
                    <div className="middlePane">
                        <canvas id="drawing-pad" className="drawingPad" width="1000" height="1000"></canvas>
                    </div>
                </div>
            </div>
        )
    }
}
