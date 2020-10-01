import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoList
    }
  }
  toggleItem = (taskId) => {
    this.setState({
      todoList: this.state.todoList.map((task) =>{
        if(taskId === task.id) {
          return{
            ...task,
            completed: !task.completed
          };
        }
        return task
      })
    });
  };
  addNewTask = taskText => {
    const newTask = {
      task: taskText,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      todoList: [...this.state.todoList, newTask]
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      todoList: this.state.todoList.filter(task => !task.completed)
    })
  }

  render() {
    return (
      <div>
        <h2>"TO DO" List</h2>
        <TodoList todoList={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
        <TodoForm addNewTask={this.addNewTask} />
      </div>
    );
  }
}

export default App;
