import uuid from "uuid-v4";

/*
    Example module from the boilerplate.
    It shows how to create or delete an element from an array.
 */

const LINE_ADD = "LINE_ADD";
const LINE_DEL = "LINE_DEL";

export default function reducer(state = {lines : []}, action = {})
{
    switch(action.type)
    {
        case LINE_ADD:
            let newLines = state.lines.slice();
            newLines.push({id : uuid(), text : action.text});
            state = Object.assign({}, state,
            {
                lines : newLines
            });
            return state;
        case LINE_DEL:
            state = Object.assign({}, state,
            {
                lines : state.lines.filter(line => line.id !== action.id)
            });
            return state;
        default:
            return state;
    }
}

export function addLine(text)
{
    return {
        type : LINE_ADD,
        text
    }
}

export function delLine(id)
{
    return {
        type : LINE_DEL,
        id
    }
}