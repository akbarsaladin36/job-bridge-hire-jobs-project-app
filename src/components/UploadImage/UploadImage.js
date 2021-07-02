import { useState } from "react";
import { Container, Image, Row } from "react-bootstrap";
import styles from "./UploadImage.module.css";
import iconImg from "../../assets/img/icon-img.png";
import iconSize from "../../assets/img/icon-size.png";
import iconUpload from "../../assets/img/icon-upload.png";
import { connect } from "react-redux";

function UploadImage(props) {
  const [imageName, setNameImage] = useState(
    props.worker.portofolioId ? props.worker.portofolioId.image_portofolio : ""
  );

  const handleImage = async () => {
    try {
      const [fileHandle] = await window.showOpenFilePicker();
      const file = await fileHandle.getFile();
      props.image(file);
      setNameImage(file.name);
    } catch (e) {
      console.log("Cancelled, no file selected");
    }
  };
  return (
    <Container fluid>
      <Row className={styles.boxUpload}>
        <div onClick={() => handleImage()} className={styles.boxSendFile}>
          <Image src={iconUpload} />
          <p className={styles.text}>
            Drag & Drop untuk Upload Gambar Aplikasi Mobile
          </p>
          <em className={styles.text2}>
            Atau cari untuk mengupload file dari direktorimu.
          </em>
          <ul>{imageName}</ul>
          <Row className={styles.rowIcon}>
            <Row className={styles.content}>
              <Image src={iconImg} className={styles.icon} />
              <p className={styles.textIcon}>
                High-Res Image <br />
                PNG, JPG or GIF
              </p>
            </Row>
            <Row className={styles.content}>
              <Image src={iconSize} className={styles.icon} />
              <p className={styles.textIcon}>
                Size <br />
                1080x1920 or 600x800
              </p>
            </Row>
          </Row>
        </div>
      </Row>
    </Container>
  );
}
const mapStateToProps = (state) => ({
  auth: state.auth,
  worker: state.worker,
});

export default connect(mapStateToProps)(UploadImage);
