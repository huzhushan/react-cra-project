const defaultState = {
  list: [
    {
      id: 1,
      title: "javascript",
      status: 1
    },
    {
      id: 2,
      title: "html5+css3",
      status: 0
    }
  ]
};

const reducer = (state = defaultState, {type, value}) => {
  const newState = JSON.parse(JSON.stringify(state))

  switch(type) {
    case 'SWITCH_STATUS':
      const target = newState.list.find(item => item.id === value.id)

      target.status = target.status === 1 ? 0 : 1;
      break;
    case 'DELETE_TASK':
      newState.list = newState.list.filter(item => item.id !== value)
      break; 
    case 'ADD_TASK':
      newState.list.push({
        id: Date.now(),
        title: value,
        status: 0
      })
      break; 
    default:
      break;
  }

  return newState;
}

export default reducer;