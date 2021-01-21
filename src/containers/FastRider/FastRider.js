import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getFastRiderDataRequest } from "../../store/actions";
import {
  GetToken,
  selectRiderDataLoading,
  selectData,
} from "../../store/selectors";

import FastRiderList from "../../components/FastRider/FastRiderList";

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
    loading: selectRiderDataLoading(state),
    items: selectData(state),
    token: GetToken(state),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getData: (token) => dispatch(getFastRiderDataRequest(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FastRider);
