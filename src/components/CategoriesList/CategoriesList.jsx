import { Component } from "react";

export default class CategoriesList extends Component {
  state = {
    inputValue: "",
    checkedValue: null,
  };

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();

    this.props.addCategory({ id, title: this.state.inputValue });
  };

  handleCheck = (e) => {
    this.setState({ checkedValue: e.target.value });
  };

  render() {
    const { inputValue, checkedValue } = this.state;
    const { categories } = this.props;
    return (
      <>
        <h1>CategoriesList</h1>;
        {categories.map(({ id, title }) => {
          console.log(id, checkedValue);
          return (
            <label>
              <p> {title}</p>
              <input
                onChange={this.handleCheck}
                type="radio"
                value={id}
                name="category"
                checked={id === +checkedValue}
              />
            </label>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="новая категория..."
            onChange={this.handleChange}
            value={inputValue}
          />
          <button type="submit">Add</button>
        </form>
      </>
    );
  }
}
