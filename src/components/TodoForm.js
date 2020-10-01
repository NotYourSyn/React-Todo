import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
        }
    }

    handleChange = e => {
        this.setState({
          newTodo: e.target.value
        });
      };

      handleSubmit = e => {
          e.preventDefault();
          this.props.addNewTask(this.state.newTodo);
          this.setState({ newTodo: '' })

      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='newTodo' value={this.state.newTodo} onChange={this.handleChange} />
                    <button className='btn'>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;