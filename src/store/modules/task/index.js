import { mockList } from '../../../services/mocker.js'
export default {
  namespaced: true,
  state: {
    taskList: [
      ...mockList
    ],
    modelTask: {
      task: '',
      assigners: [],
      status: '',
      priority: '',
      completed: false
    }
  },
  getters: {
    onHoldTasks: (state) => {
      return state.taskList.filter((item) => {
        return !item.completed
      })
    },
    completedTasks: (state) => {
      return state.taskList.filter((item) => {
        return item.completed
      })
    }
  },
  mutations: {
    SET_TASK_LIST: (state, tasks) => {
      state.taskList = [ ...tasks ]
    },
    ADD_NEW_TASK: (state, task) => {
      state.taskList = [ ...state.taskList, task ]
    }
  },
  actions: {
    addNewTask: (context, task) => {
      context.commit('ADD_NEW_TASK', task)
    }
  }
}
