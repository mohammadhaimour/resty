const initialState = {
    data: {},
    reqMethod: '',
    url: '',
    body: '',
    history: ''
}

export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case "SET_DATA":
            return {
                ...state,
                data: payload,
            };

        case "SET_METHOD":
            return {
                ...state,
                reqMethod: payload,
            };
        case "SET_URL":
            return {
                ...state,
                url: payload,
            };
        case "SET_BODY":
            return {
                ...state,
                body: payload,
            };
        case "SET_HISTORY":
            return {
                ...state,
                history: payload,
            };

    }

}

export const setData = (data) => {
    return {
        type: 'SET_DATA',
        payload: data
    }

}
export const setReqMethod = (method) => {
    return {
        type: 'SET_METHOD',
        payload: method
    }

}
export const setURL = (url) => {
    return {
        type: 'SET_URL',
        payload: url
    }

}

export const setBody = (body) => {
    return {
        type: 'SET_BODY',
        payload: body
    }


}

export const setHistory = (data) => {
    return {
        type: 'SET_HISTORY',
        payload: data
    }


}

