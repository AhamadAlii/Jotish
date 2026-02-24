import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import styles from "./PhotoResult.module.css";

function PhotoResult() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  const retake = () => {
    setImage(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>

      <div className={styles.card}>
        <button
          className={styles.backButton}
          onClick={() => navigate(-1)}
        >
          ← Back
        </button>

        <h2 className={styles.title}>Capture Photo</h2>

        {!image ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className={styles.webcam}
            />

            <button
              className={styles.button}
              onClick={capture}
            >
              Take Photo
            </button>
          </>
        ) : (
          <>
            <img
              src={image}
              alt="Captured"
              className={styles.preview}
            />

            <div className={styles.buttonGroup}>
              <button
                className={styles.button}
                onClick={retake}
              >
                Retake
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default PhotoResult;