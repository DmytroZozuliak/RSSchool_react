import React, { Component } from 'react';
import MyInput from '../UI/MyInput';

interface State {
  term: string;
}

export default class InputSearch extends Component<Record<string, never>, State> {
  state = {
    term: localStorage.getItem('goodsSearchBar') || '',
  };

  componentWillUnmount(): void {
    localStorage.setItem('goodsSearchBar', this.state.term);
  }

  handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <MyInput
        type="search"
        placeholder="search..."
        value={this.state.term}
        onChange={this.handleChangeSearch}
      />
    );
  }
}
