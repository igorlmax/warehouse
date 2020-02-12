import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../layout/Prelaoder";
import { connect } from "react-redux";
import {getLogs} from "../../actions/logActions";

// destructure logs and loading property from log store
const Logs = ({ log: { logs, loading }, getLogs }) => {

  /* were defined for a local state*/
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs(); // getLogs comes from Redux Action, it should be also destructured into the func. argument
  }, []);

  /* was used for a local state*/
  // const getLogs = async () => {
  //   setLoading(true);
  //   const res = await fetch("/logs");
  //   const data = await res.json();
  //
  //   setLogs(data);
  //   setLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <div>
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map(log => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

// define what we want to get from the state
const mapStateToProps = state => ({
  log: state.log // bring the whole state and destructure in the func. argument
});

export default connect(mapStateToProps, {getLogs})(Logs);

