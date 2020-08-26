import React from "react";
import Todoitem from "./TodoItem";
import classes from "./TodoList.module.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      todos: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.OnClickButton = this.OnClickButton.bind(this);
    this.onCheckBox = this.onCheckBox.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onEdittext = this.onEdittext.bind(this);
    this.onEdittextitem = this.onEdittextitem.bind(this);
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value });
  }
  OnClickButton() {
    this.setState((oldState) => {
      const key =
        oldState.todos.length === 0
          ? 1
          : oldState.todos[oldState.todos.length - 1].id + 1;
      return {
        inputText: "",
        todos: [
          ...oldState.todos,
          { text: this.state.inputText, id: key, checked: false, edit: false },
        ],
      };
    });
  }

  onCheckBox(index) {
    const newtodos = this.state.todos.slice();
    newtodos[index].checked = !newtodos[index].checked;
    this.setState({ todos: newtodos });
  }
  onRemoveClick(index) {
    const newtodos = this.state.todos.slice();
    let filtertodo = newtodos.filter((todo, i) => {
      return i !== index;
    });
    this.setState({ todos: filtertodo });
  }
  onEdittext(index) {
    const newtodos = this.state.todos.slice();
    newtodos[index].edit = !newtodos[index].edit;
    this.setState({ todos: newtodos });
  }
  onEdittextitem(index, textvalue) {
    const newtodos = this.state.todos.slice();
    newtodos[index].text = textvalue;
    this.setState({ todos: newtodos });
  }

  render() {
    return (
      <>
        <input
          className={classes.maininput}
          value={this.state.inputText}
          onChange={this.handleChange}
          size="35"
        />
        <button onClick={this.OnClickButton} className={classes.addbutton}>
          Add
        </button>
        <ul style={{ listStyleType: "none" }}>
          {this.state.todos.map((todo, index) => {
            return (
              <div>
                <Todoitem
                  text={todo.text}
                  key={todo.id}
                  onCheckbox={this.onCheckBox}
                  index={index}
                  edit={todo.edit}
                  onRemoveClick={this.onRemoveClick}
                  onEdittext={this.onEdittext}
                  onEdittextitem={this.onEdittextitem}
                />
              </div>
            );
          })}
        </ul>
      </>
    );
  }
}

export default TodoList;
