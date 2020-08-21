
const LoggerWare = store => next => action => {
    console.log('LoggerWare dispatching', action, store.getState());
    let result = next(action)
    console.log('LoggerWare next state', result, store.getState());
    return result
}

export default LoggerWare;