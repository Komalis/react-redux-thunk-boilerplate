import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

export function loadState()
{
    /*
        If you want your store to have default values, do the logic here...
     */
    return {};
}

export function saveState()
{
    /*
        If you want to save things somewhere, do the logic here...
     */
}

const initialStore = loadState();

export default createStore(
    reducers,
    initialStore,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f // Activate reactdevtools
    )
);