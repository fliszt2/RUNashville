import React from 'react';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isChecked: false,
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this);
  }

  toggleCheckboxChange() {
  const handleCheckboxChange = this.props.handleCheckBoxChange;
  const label = this.props.label;

  this.setState({
    isChecked: !isChecked
  });

  handleCheckBoxChange(label);
}

render() {

  const label = this.props.label;
  const isChecked = this.state.isChecked;

  return (

    <div className="checkbox">
      <label>
        <input
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
        {label}
      </label>
    </div>
    );
  }
}

export default Checkbox;
