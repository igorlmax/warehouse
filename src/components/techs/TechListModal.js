import React, { useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import { getStaff } from "../../actions/staffActions";

const TechListModal = ({ staff: { staff }, getStaff }) => {
  useEffect(() => {
    getStaff();
  }, []);

  // const getTechs = async () => {
  //   setLoading(true);
  //
  //   const res = await fetch("/techs");
  //   const data = await res.json();
  //
  //   setTechs(data);
  //   setLoading(false);
  // };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="model-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {staff !== null &&
            staff.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  staff: state.staff // this comes from combineReducers
});

export default connect(mapStateToProps, { getStaff })(TechListModal);
