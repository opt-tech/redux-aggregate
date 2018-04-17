import { Store, todos, counter } from '../store'

function mapTodosCountToCounter(store) {
  const { setTodoCount } = counter.creators
  return store.subscribeAction( // unsubscriber
    todos.types.addTodo,
    action => {
      const length = store.getState().todos.items.length
      store.dispatch(setTodoCount(length))
    }
  )
}

export function runService(store: Store) {
  mapTodosCountToCounter(store)
}
