import {
  ADD_OPERATION_LOG,
  DELETE_ALL_OPERATION_LOGS
} from '../actions'

const oparationLogs = (state = [], action) => {
  switch (action.type) {
    case ADD_OPERATION_LOG:
      const oparationLog = {
        description: action.description,
        oparatedAt: action.oparatedAt
      }
      return [oparationLog, ...state]
    case DELETE_ALL_OPERATION_LOGS:
      return []
    default:
      return state
  }
}

export default oparationLogs
