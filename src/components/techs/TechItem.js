import React from "react";
import { connect } from "react-redux";
import { deleteStaff } from "../../actions/staffActions";
import M from "materialize-css/dist/js/materialize.min";

const TechItem = ({ tech, deleteStaff }) => {

  const onDelete = () => {
    deleteStaff(tech.id);
    M.toast({ html: "Staff deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName}
        <a
          href="#!"
          className="secondary-content"
          onClick={onDelete}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteStaff })(TechItem);
