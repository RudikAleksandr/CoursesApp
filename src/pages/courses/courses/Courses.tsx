import React, { Component } from 'react';
import { CoursesItem, CoursesList, CoursesSectionActions } from '../components';

class Courses extends Component {
  courses = [{
    id: "1",
    name: 'name 1'
  }, {
    id: "2",
    name: 'name 2'
  }]

  handleChangeSearchText = (value: string): void => {

  }

  handleClickEdit = (id: string): void => {

  }

  handleClickDelete = (id: string): void => {

  }

  handleClickLoadMore = (): void => {

  }

  render() {
    return (
      <section>
        <CoursesSectionActions onChangeSearchText={this.handleChangeSearchText} /> 
         <CoursesList onClickLoadMore={this.handleClickLoadMore}>
            {this.courses.map((course: any) => {
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
