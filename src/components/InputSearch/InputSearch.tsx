import React, { Component } from 'react';
import Search from '../../assets/svg/search.svg';
import styles from './inputSearch.module.scss';

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
      <div className={styles.search}>
        <img src={Search} alt="icon" width={20} height={20} />
        <input
          type="search"
          placeholder="search..."
          value={this.state.term}
          onChange={this.handleChangeSearch}
        />
      </div>
    );
  }
}