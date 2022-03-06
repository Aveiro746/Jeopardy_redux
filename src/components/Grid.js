import { useEffect } from "react";
import { connect } from "react-redux";
import {Questions} from "./Questions"
import {fetchApi} from "../actions/actions"


const Grid = (props) => {
    useEffect(()=>{
        props.fetchApi()
    },[])
    return(
        <div>
    <div class="board">
        <div class="row categories">
            <div class="tile">Category 1</div>
            <div class="tile">Category 2</div>
            <div class="tile">Category 3</div>
            <div class="tile">Category 4</div>
            <div class="tile">Category 5</div>
        </div>
        <div class="row clues">
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
        </div>
        <div class="row clues">
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
        </div>
        <div class="row clues">
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
        </div>
        <div class="row clues">
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
        </div>
        <div class="row clues">
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
            <div class="tile">
                <div class="question-value">{props.jeopardy.value}</div>
            </div>
        </div>
    </div>
</div>
    )
}

export default connect(null , fetchApi)(Grid);