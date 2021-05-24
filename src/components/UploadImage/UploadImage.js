import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { useDropzone } from "react-dropzone";
import styles from "./UploadImage.module.css";
import iconImg from "../../assets/img/icon-img.png";
import iconSize from "../../assets/img/icon-size.png";
import iconUpload from "../../assets/img/icon-upload.png";

function UploadImage(props) {
  console.log(props);
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: "image/jpeg, image/png, image/gif",
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  console.log("img porto", acceptedFileItems);

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <Container fluid>
      <Row
        {...getRootProps({ className: "dropzone" })}
        className={styles.boxUpload}
      >
        <input {...getInputProps()} />
        <Image src={iconUpload} />
        <p className={styles.text}>
          Drag & Drop untuk Upload Gambar Aplikasi Mobile
        </p>
        <em className={styles.text2}>
          Atau cari untuk mengupload file dari direktorimu.
        </em>
        <ul>{acceptedFileItems}</ul>
        <ul>{fileRejectionItems}</ul>
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
      </Row>
    </Container>
  );
}
export default UploadImage;
