import { useReducer, useCallback } from 'react'

const initialState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  statusCode: null,
  identifier: null,
}

const httpReducer = (currentHttpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      }
    case 'RESPONSE':
      return {
        ...currentHttpState,
        loading: false,
        data: action.responseData,
        statusCode: action.statusCode,
        extra: action.extra,
      }
    case 'ERROR':
      return { loading: false, error: action.errorMessage }
    case 'CLEAR':
      return initialState
    default:
      throw new Error('Should not be reached!')
  }
}

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState)

  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), [])

  const sendRequest = useCallback((url, method, body, headers = {}, reqExtra, reqIdentifier) => {
    headers['Content-Type'] = 'application/json'
    headers['Access-Control-Allow-Origin'] = '*'
    let status
    dispatchHttp({ type: 'SEND', identifier: reqIdentifier })
    fetch(url, {
      method: method,
      body: body,
      headers: headers,
    })
      .then(response => {
        status = response.status
        return response.json()
      })
      .then(responseData => {
        dispatchHttp({
          type: 'RESPONSE',
          responseData: responseData,
          statusCode: status,
          extra: reqExtra,
        })
      })
      .catch(error => {
        dispatchHttp({ type: 'ERROR', errorMessage: error.message })
      })
  }, [])
  return {
    isLoading: httpState.loading,
    data: httpState.data,
    error: httpState.error,
    sendRequest: sendRequest,
    statusCode: httpState.statusCode,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear,
  }
}

export default useHttp
