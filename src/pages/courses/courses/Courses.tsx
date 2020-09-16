import React, { Component } from 'react';
import { CoursesItem, CoursesList, CoursesSectionActions } from '../components';
import coursesJSON from './courses.json';

class Courses extends Component {
  courses = coursesJSON.courses;
  state = {
    courses: this.courses
  }

  handleChangeSearchText = (value: string): void => {
    this.setState({
      courses: this.courses.filter((course) => course.name.includes(value))
    })
  }

  handleClickEdit = (id: string): void => {

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
            {this.state.courses.map((course: any) => {
                return <CoursesItem key={course.id}
                  course={course}
                  onClickEdit={this.handleClickEdit} 
                  onClickDelete={this.handleClickDelete}
                />
            })}
         </CoursesList>
      </section>
    ); 
  }
}

export default Courses;
