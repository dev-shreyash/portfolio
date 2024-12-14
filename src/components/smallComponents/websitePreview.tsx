import React from "react";
import styles from "./WebsitePreview.module.scss";

interface WebsitePreviewProps {
  url: string;
}

const WebsitePreview: React.FC<WebsitePreviewProps> = ({ url }) => {
  return (
    <div className={styles.previewContainer}>
      <iframe 
        src={url} 
        title="Website Preview" 
        className={styles.iframe}
        frameBorder="0"
      />
    </div>
  );
};

export default WebsitePreview;
