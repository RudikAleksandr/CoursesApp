import React, { Component, ChangeEvent, MouseEvent } from 'react';
import './CoursesSectionActions.scss';

type Props = {
  onChangeSearchText: Function
}
type State = { 
  searchText: string 
}

class CoursesSectionActions extends Component<Props, State> {
  state = {
    searchText: ''
  }

  handleChangeSearchText = ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
    this.props.onChangeSearchText(value);
    this.setState({ searchText: value });
  }

  handleClickAdd = (event: MouseEvent): void => {

  }

  render() {
    return (
      <div className="courses-section-actions container-fluid">
        <div className="courses-section-actions__row row">
          <div className="courses-section-actions__search col-10 col-sm-8 col-md-8 col-lg-6">
            <input type="text"
              className="courses-section-actions__search-input"
              placeholder="Text to search"
              value={this.state.searchText}
              onChange={this.handleChangeSearchText} />
          </div>
          <div className="courses-section-actions__add-course col col-sm-4 col-md col-lg">
            <button 
              className="courses-section-actions__add-course-btn btn"
              onClick={this.handleClickAdd}>
              + Add course
            </button>
          </div>
        </div>
      </div>
    ); 
  }
}

export default CoursesSectionActions;
