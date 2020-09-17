import React, { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import './CoursesItem.scss';

type Props = {
  course: any,
  onClickDelete: Function
}   

function CoursesItem(props: Props) {
  const handleClickDelete = (event: MouseEvent): void => {
    props.onClickDelete(props.course.id);
  }

  return (
    <article className="courses-item container-fluid">
      <div className="row">
        <h2 className="courses-item__title col-md-12 col-lg-6">
          <a href="" 
            className="courses-item__title-link">
            { props.course.name.toUpperCase() }
          </a>
          {props.course.isTopRated ? <span className="courses-item__star-icon">☆</span> : ''}
        </h2>
        <div className="courses-item__date-time col-md-12 col-lg-3">
          <time className="courses-item__time">{ props.course.length }</time>
          <time className="courses-item__date">{ props.course.date }</time>
        </div>
      </div>
      <div className="row">
        <p className="courses-item__description col-sm-12 col-md-9 col-lg-9">{ props.course.description }</p>
        <div className="courses-item__actions col-sm-12 col-md-3 col-lg-3">
          <Link to={`/course/${props.course.id}`}
            className="courses-item__edit-btn btn">
              Edit
          </Link>
          <button className="courses-item__delete-btn btn" 
            onClick={handleClickDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  ); 
}

export default CoursesItem;
