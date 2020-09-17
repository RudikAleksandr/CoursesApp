import React, { Component } from 'react';
import { CoursesItem, CoursesList, CoursesSectionActions } from '../components';
import coursesJSON from './courses.json';

type State = {
  courses: Array<any>
}

class Courses extends Component<{}, State> {
  courses = coursesJSON.courses;
  state = {
    courses: this.courses
  }

  handleChangeSearchText = (value: string): void => {
    this.setState({
      courses: this.courses.filter((course) => course.name.includes(value))
    })
  }

  handleClickDelete = (id: number): void => {
    this.courses = this.courses.filter((course) => course.id !== id);
    this.setState({ courses: this.courses });
  }

  handleClickLoadMore = (): void => {

  }

  render() {
    return (
      <section>
        <CoursesSectionActions onChangeSearchText={this.handleChangeSearchText} />
         <CoursesList onClickLoadMore={this.handleClickLoadMore}>
            {this.state.courses.map((course: any) => (
              <CoursesItem key={course.id}
                course={course}
                onClickDelete={this.handleClickDelete}/>
            ))}
         </CoursesList>
      </section>
    );
  }
}

export default Courses;
