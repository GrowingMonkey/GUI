import React from 'react';

export default function WithHistory(ComponentClass) {
  return class WithHistoryComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    handleGoBack = () => {
      this.props.history.goBack();
    }
    render() {
      return (
        <div>
          <ComponentClass {...this.props} handleGoBack={this.handleGoBack} />
        </div>
      );
    }
  };
}
