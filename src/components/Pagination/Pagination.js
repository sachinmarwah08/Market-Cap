import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Pagination.scss";

const Pagination = () => {
  return (
    <div className="pagination-wrapper">
      <div className="pagination-buttons-wrapper">
        <button className="pagination-btn-group">
          <div className="previous-btn">
            <FontAwesomeIcon icon={faArrowLeft} />
            Previous
          </div>
        </button>
        <button className="pagination-btn-group">1</button>
        <button className="pagination-btn-group">2</button>
        <button className="pagination-btn-group">3</button>
        <button className="pagination-btn-group">...</button>
        <button className="pagination-btn-group">8</button>
        <button className="pagination-btn-group">9</button>
        <button className="pagination-btn-group">10</button>
        <button className="pagination-btn-group">
          <div className="next-btn">
            Next
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
