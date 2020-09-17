import React, { PureComponent } from 'react';
import './CourseForm.scss';

type State = {
  course: any
}
type Props = {
  course?: any,
  onClickSubmit: Function,
  onClickCancel: Function
}

class CourseForm extends PureComponent<Props, State> {
  state = {
    course: {
      name: '',
      description: ''
    }
  }

  static getDerivedStateFromProps(nextProps: Props, prevState: State) {
    return {
      course: nextProps.course
    }
  }

  render() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="title"
            className="col-sm-1 col-form-label">
            Title
          </label>
          <div className="col-sm-4">
            <input type="text"
              className="form-control"
              id="title"
              value={this.state.course?.name} />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="description"
            className="col-sm-1 col-form-label">
            Description
          </label>
          <div className="col-sm-4">
            <textarea className="form-control"
              id="description">
              {this.state.course?.description}
            </textarea>
          </div>
        </div>
      </form>
    );
  }
}

export default CourseForm;
