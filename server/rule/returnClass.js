class returnClass {
  constructor(props) {
    console.log(props);
    this.success = true;
    this.description = props;
    this.message = "";
    this.data = {};
  }

  successHandler(message, data = null) {
    this.message = message;
    if (data != null) this.data = data;
  }

  errorHandler(error, data = null) {
    // return {
    //   ...this,
    //   success: false,
    //   message: error.message || error
    // }
    this.success = false;
    this.message = error.message || error
    if (data != null) this.data = data;
  }
}

module.exports = returnClass;
