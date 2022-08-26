
import {useReducer} from "react"

//UseReducer Hook, aynı useState gibi state yönetimi için kullanılan bir hook'tur. Daha geniş state yönetimi için kullanılır.
//Eğer bir component içerisinde birden fazla birbiri ile alakalı state var ise state 
//parçalarındaki değişiklik useReducer hook kullanılarak tek bir action'nın dispatch 
//edilmesi ile gerçeklşetirilebilir. Bu sayede gereksiz re-render işlemlerinden 
//kurtulmuş olur. 
const initialState = {
    data : "",
    loading : false,
    error : "",
}
const reducer = (state, action) => {
    switch (action.type){
        case "FETCH_START":
            return {...state, data : "", loading : true, error : "",}
        case "FETCH_SUCCESS":
            return {...state, loading : false, data : action.payload}
        case "FETCH_ERROR":
            return {...state, loading : false, error : action.payload}
        default:
            return state; 
    }
}

const UseReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    // const {data, loading, error} = state;

    const fetchDog = () => {
        dispatch({type : "FETCH_START"})

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                dispatch({type : "FETCH_SUCCESS", payload:data.message})
            })
            .catch((err) => {
                dispatch({type : "FETCH_ERROR", payload:"Error fetching data"})
            })

    }


    return(
    <div>
        <button onClick={fetchDog} disabled={state.loading}>Fetch Dog</button>
        {state.data && (
            <div>
                <img src={state.data} alt="RandomDog" />
            </div>
        )}
        {state.error && <p>{state.error}</p>}
    </div>
    )
}
export default UseReducerHook;