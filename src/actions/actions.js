// ASYNC Actions
import axios from "axios"

//Fetch_Fail, Fetch_Start

export const FETCH_START = "FETCH_START"
export const FETCH_FAIL = "FETCH_FAIL"
export const QUESTIONS_FETCH_COMPLETE = "QUESTIONS_FETCH_COMPLETE"//and values //and answers
export const CATEGORY_FETCH_COMPLETE = "CATEGORY_FETCH_COMPLETE"


//Sync Actions

// "https://jservice.io//api/category?id=<categoryID>"
// fetch Video games  1892 
//fetch Tv Cartoons 1348
//fetch American History 780
export const fetchApi = () => (dispatch)=>{
    //async 
    dispatch(FETCH_START)

    axios.get("https://jservice.io/api/random")
    .then((response)=>{
        console.log(response)
        dispatch(QUESTIONS_FETCH_COMPLETE, response.data[0])
    })
    .catch(error => dispatch(FETCH_FAIL, error.message))
}
