import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min";
import { connect } from "react-redux";
import { addStaff } from "../../actions/staffActions";

const AddTechModal = ({ addStaff }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
    } else {
      const newStaff = {
        firstName,
        lastName,
        position
      };

      addStaff(newStaff);
      M.toast({ html: `New Staff added` });

      setFirstName("");
      setLastName("");
      setPosition("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              Last Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="position"
              value={position}
              onChange={e => setPosition(e.target.value)}
            />
            <label htmlFor="position" className="active">
              Position
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect red btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default connect(null, { addStaff })(AddTechModal);
