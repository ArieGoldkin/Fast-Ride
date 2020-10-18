import React, { useEffect } from "react";
import { connect } from "react-redux";

import * as FastRiderActions from "./actions/FastRiderActions";

import FastRiderList from "./FastRiderList";

const FastRider = ({ getData, items, loading, token }) => {
  
  useEffect(() => {
    loading && getData(token);
  }, [getData, loading, token]);

  return (
    <>
      <FastRiderList items={items} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.fastRiderData.loading,
    items: state.fastRiderData.items,
    token: state.userSelectItem.userToken,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (token) =>
      dispatch(FastRiderActions.getFastRiderDataRequest(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastRider);
