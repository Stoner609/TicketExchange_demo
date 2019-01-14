class returnClass {
  constructor(props) {
    this.success = true;
    this.message = "";
    this.description = "";
  }

  successHandler() {

  }

  errorHandler(error) {
    return {
      ...this,
      success: false,
      message: error.message || error
    }
  }
}

module.exports = returnClass;
