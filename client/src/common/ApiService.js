import React from "react";
import axios from "axios";

function ApiService(WrappedComponent) {
  return class NewComponet extends React.PureComponent {
    async makePostRequest(path, data) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:4000" + path, data)
          .then((res) => resolve(res))
          .catch((err) => reject(err));
      });
    }
    render() {
      return <WrappedComponent makePostRequest={this.makePostRequest} />;
    }
  };
}

export default ApiService;
