import React, { Component } from 'react';
import { CourseForm } from '../../../components';
import coursesJSON from './../../courses/courses/courses.json';

import './EditCourse.scss';

type State = {
  course: any
}

class EditCourse extends Component<{}, State> {
  state = {
    course: {}
  }

  handleClickSubmit = () => {

  }

  handleClickCancel = () => {

  }

  componentDidMount() {
    const data = coursesJSON.courses.find((course) => course.id === 8693);
    this.setState({
      course: data
    });
  }

  render() {
    return (
      <div className="edit-course">
          <h2 className="edit-course__title">Edit course</h2>
          <CourseForm
            course={this.state.course}
            onClickSubmit={this.handleClickSubmit}
            onClickCancel={this.handleClickCancel}
          />
      </div>
    );
  }
}

export default EditCourse;
