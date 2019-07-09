class returnClass {
  constructor(props) {
    this.success = true;
    this.description = props;
    this.message = "";
    // this.data = {};
  }

  successHandler(message, data = null) {
    this.message = message;
    if (data != null) this.data = data;
  }

  errorHandler(error, data = null) {
    this.success = false;
    this.message = error.message || error
    if (data != null) this.data = data;
  }
}

module.exports = returnClass;
