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
    this.setState((oldState) => ({
      inputText: oldState.inputText,
      todos: oldState.todos.map((todo, i) =>
        i === index ? { ...todo, checked: !todo.checked } : todo
      ),
    }));
  }

  onRemoveClick(index) {
    this.setState((oldState) => ({
      inputText: oldState.inputText,
      todos: oldState.todos.filter((todo, i) => i !== index),
    }));
  }

  onEdittext(index) {
    this.setState((oldState) => ({
      inputText: oldState.inputText,
      todos: oldState.todos.map((todo, i) =>
        i === index ? { ...todo, edit: !todo.edit } : todo
      ),
    }));
  }
  onEdittextitem(index, textvalue) {
    this.setState((oldState) => ({
      inputText: oldState.inputText,
      todos: oldState.todos.map((todo, i) =>
        i === index ? { ...todo, text: textvalue } : todo
      ),
    }));
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
        {this.state.inputText.length < 1 ? (
          <button disabled className={classes.disabledbutton}>
            Add
          </button>
        ) : (
          <button onClick={this.OnClickButton} className={classes.addbutton}>
            Add
          </button>
        )}

        <ul style={{ listStyleType: "none" }}>
          {this.state.todos.map((todo, index) => {
            return (
              <Todoitem
                key={todo.id}
                text={todo.text}
                onCheckbox={this.onCheckBox}
                index={index}
                edit={todo.edit}
                onRemoveClick={this.onRemoveClick}
                onEdittext={this.onEdittext}
                onEdittextitem={this.onEdittextitem}
              />
            );
          })}
        </ul>
      </>
    );
  }
}

export default TodoList;
