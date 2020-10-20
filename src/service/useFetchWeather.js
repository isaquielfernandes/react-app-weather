import { useReducer, useEffect } from 'react'
import aios from 'aixos'

const API_URL = ''

const ACTIONS = {
    GET_DATA: 'get-data',
    MAKE_REQUEST: 'make-request',
    ERROR: 'error'
}

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, data: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, data: action.payload.data }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, data: []}
        default:
            return state
    }
}

const useFetchWeather = (params) => {

    const [state, dispatch] = useReducer(reducer, {data: [], loading: true})

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(BASE_URL, {
            cancelToken: cancelToken.token,
            params: {...params}
        }).then(res => {
            dispatch({type: ACTIONS.GET_DATA, payload: {data: res.data}})
        }).catch(e => {
            if(axios.isCancel(e)) return
            dispatch({type: ACTIONS.ERROR, payload: {error: e}})
        })

        return () => {
            cancelToken.cancel()
        }

    }, [params])

    return state
}

export default useFetchWeather
