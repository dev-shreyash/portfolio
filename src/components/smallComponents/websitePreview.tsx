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
        loading="lazy" /* CRITICAL: Stops the page from lagging! */
        scrolling="no" /* Optional: Hides ugly scrollbars inside the preview */
      />
    </div>
  );
};

export default WebsitePreview;