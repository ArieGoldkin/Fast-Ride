import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import InfoList from "./infoComponent/InfoList";
import FastRider from "./jungleComponents";
import Form from "./FormInput/Form";
import ErrorModal from "./helpers/ErrorModal";

const Main = ({ success, error }) => {
  const [errorMessage, setErrorMessage] = useState();
  const [showError, setShowError] = useState(false);

  const clearError = () => {
    setErrorMessage(null);
    setShowError(false);
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
      setErrorMessage(error.error);
    }
  }, [error]);

  if (success) {
    return <Redirect to="/success" />;
  }

  return (
    <div className="app_wrapper">
      <main>
        <ErrorModal
          error={errorMessage}
          show={showError}
          onClear={clearError}
        />
        <h1>The Jungle&trade; FastRider Service</h1>
        <InfoList />
        <Form />
        <FastRider />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    success: state.fastRideDataResult.success,
    error: state.fastRideDataResult.error,
  };
};

export default connect(mapStateToProps)(Main);
