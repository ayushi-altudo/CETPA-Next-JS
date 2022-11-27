import React from "react";
import styles from "../styles/Footer.module.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-primary pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-white fw-bold">
              Copyright© ABC School. All rights reserved.{" "}
            </p>
          </div>
          <div className="col-md-6">
            <div className="text-white fw-bold d-flex justify-content-end">
              <p className="pe-4">Connect with us:</p>
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className={styles.socialIcon}
                icon={faInstagram}
              />
              <FontAwesomeIcon className={styles.socialIcon} icon={faTwitter} />
              <FontAwesomeIcon className={styles.socialIcon} icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
