import React from "react";
import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import infoIcon from "../Images/info.svg";
import "./Table.scss";

const Table = ({ data }) => {
  return (
    <div className="table-wrapper">
      <section className="container">
        <table>
          <thead>
            <tr>
              <th>
                <p className="rank-number-head">
                  <div>
                    <p className="body-rank">Rank</p>
                  </div>
                  <div className="sort-icon">
                    <FontAwesomeIcon className="fa-sort" icon={faAngleUp} />
                    <FontAwesomeIcon className="fa-sort" icon={faAngleDown} />
                  </div>
                </p>
              </th>
              <th>Name</th>
              <th>
                <p className="rank-number">
                  <div className="sort-icon">
                    <FontAwesomeIcon className="fa-sort" icon={faAngleUp} />
                    <FontAwesomeIcon className="fa-sort" icon={faAngleDown} />
                  </div>
                  <div>
                    <p className="body-rank"> Operating Margin</p>
                  </div>
                </p>
              </th>
              <th>
                <p className="rank-number">
                  <div className="sort-icon">
                    <FontAwesomeIcon className="fa-sort" icon={faAngleUp} />
                    <FontAwesomeIcon className="fa-sort" icon={faAngleDown} />
                  </div>
                  <div>
                    <p className="body-rank">Price</p>
                  </div>
                </p>
              </th>
              <th>
                <p className="rank-number">
                  <div className="sort-icon">
                    <FontAwesomeIcon className="fa-sort" icon={faAngleUp} />
                    <FontAwesomeIcon className="fa-sort" icon={faAngleDown} />
                  </div>
                  <div>
                    <p className="body-rank">Today</p>
                  </div>
                </p>
              </th>
              <th>
                <p className="rank-number">
                  <div className="sort-icon">
                    <FontAwesomeIcon className="fa-sort" icon={faAngleUp} />
                    <FontAwesomeIcon className="fa-sort" icon={faAngleDown} />
                  </div>
                  <div>
                    <p className="body-rank">Country</p>
                  </div>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(
              ({
                rank,
                image,
                upperName,
                lowerName,
                percentage,
                dollar,
                percentageGreen,
                country,
              }) => (
                <tr className="body-tr">
                  <td className="rank">{rank}</td>
                  <td>
                    <div class="table-body-image-wrapper">
                      <div>
                        <img
                          class="table-body-image"
                          src={image}
                          alt=""
                          loading="lazy"
                        />
                      </div>
                      <div className="name-text">
                        <p class="table-body-image-text-upper">{upperName}</p>
                        <p class="table-body-image-text-lower">{lowerName}</p>
                      </div>
                    </div>
                  </td>
                  <td className="Operating-percentage-wrapper">
                    <p className="percentage">{percentage}</p>
                    <img className="infoIcon" src={infoIcon} loading="lazy" />
                  </td>
                  <td>
                    <p className="dollar">{dollar}</p>
                  </td>
                  <td>
                    <p className="percentage-green">
                      <FontAwesomeIcon className="fa" icon={faArrowUp} />
                      {percentageGreen}
                    </p>
                  </td>
                  <td>{country}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Table;
