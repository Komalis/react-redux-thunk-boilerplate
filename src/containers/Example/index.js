import React, {Component} from 'react';
import {connect} from "react-redux";
import {addLine, delLine} from "../../modules/example";

class Example extends Component {
    render() {
        const { lines } = this.props;
        const { addLine, delLine } = this.props;

        let line = "";

        let lineList = [];

        lines.forEach((line) =>
        {
            lineList.push(<li>{line.text} <button onClick={() =>
            {
                delLine(line.id);
            }}>X</button></li>);
        });

        return (
            <div>
                <input id="line" name="line" ref={(e) => line = e} type="text"/> <button onClick={() =>
                {
                    addLine(line.value);
                }}>Ajouter</button>
                <br/>
                <ul>
                    {lineList}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>
{
    return {
        lines : state.example.lines
    };
};

const mapDispatchToProps = (dispatch) =>
{
    return {
        addLine : (line) => dispatch(addLine(line)),
        delLine : (line) => dispatch(delLine(line))
    };
};

export const ExampleContainer = connect(mapStateToProps, mapDispatchToProps)(Example);