import React, { MouseEvent, ReactNode } from 'react';
import './CoursesList.scss';

type Props = {
  children: ReactNode,
  onClickLoadMore: Function
}

function CoursesList(props: Props) {
  const handleClickLoadMore = (event: MouseEvent): void => {
    props.onClickLoadMore();
  }

  return (
    <div className="courses-list">
      {props.children}
      <button className="courses-list__load-btn btn"
        onClick={handleClickLoadMore}
      >
        Load more
      </button>
    </div>
  ); 
}

export default CoursesList;
