import DownloadIcon from "../../assets/images/download-icon.png";
import Resume from "../../assets/documents/Udhaya-Kumar-Resume.pdf";

export const DownloadResume = () => {
  return (
    <a className="download-btn" href={Resume} download="Udhaya-Kumar-Resume.pdf" aria-label="Download Udhaya Kumar resume">
      <img src={DownloadIcon} alt="" aria-hidden="true" />
      Download Resume
    </a>
  );
};
