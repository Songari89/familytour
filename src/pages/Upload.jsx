import React, { useRef, useState } from "react";
import styles from "./Upload.module.css";
import Title from "../components/Title";
import totoro_sample from "../staticimage/totoro.jpg";
import pooh_sample from "../staticimage/pooh.jpg";
import { uploadPhoto } from "../apis/firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import PhotoItem from "../components/PhotoItem";
// import DomToImage from "dom-to-image";
import html2canvas from "html2canvas";
import { dataURLtoBlob } from "../apis/convert";
import usePhoto from "../hooks/usePhoto";

export default function Upload() {
  const [photo, setPhoto] = useState({});
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const captureRef = useRef();
  const {addPhoto} = usePhoto();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setUploading(true);
    captureRef.current.style.display = "block";
    html2canvas(captureRef.current)
      .then((canvas) => {
        const dataUrl = canvas.toDataURL();
        const blob = dataURLtoBlob(dataUrl);
        uploadPhoto({ type: blob, id, mode: "photos" }).then((imageUrl) => {
          addPhoto.mutate(
            { photo, id, imageUrl },
            {
              onSuccess: () => {
                setPhoto({});
                setFile(null);
              },
            }
          );
        });
      })
      .finally(() => {
        captureRef.current.style.display = "none";
        setUploading(false);
        navigate("/photo");
      });

  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setPhoto({ ...photo, [name]: value });
  };

  return (
    <>
      <section className="section">
        <Title title="사진등록" />
        <div className={styles.contentscontainer}>
          {(file || photo.film) && (
            <div className={styles.imagecontainer}>
              <PhotoItem photo={photo} file={file} mode="sample" />
            </div>
          )}

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.file}
              type="file"
              accept="image/*"
              id="file"
              name="file"
              required
              onChange={handleChange}
            />
            <label htmlFor="file" className={styles.filelabel}>
              업로드
            </label>
            <div className={styles.optioncontainer}>
              <p>필름 선택 :</p>
              <input
                type="radio"
                id="basic"
                name="film"
                value="basic"
                onChange={handleChange}
              />
              <label htmlFor="basic">
                <div className={styles.basic_sample}></div>
              </label>
              <input
                type="radio"
                id="totoro"
                name="film"
                value="totoro"
                onChange={handleChange}
              />
              <label htmlFor="totoro">
                <img
                  className={styles.sample}
                  src={totoro_sample}
                  alt="totoro"
                />
              </label>
              <input
                type="radio"
                id="pooh"
                name="film"
                value="pooh"
                onChange={handleChange}
              />
              <label htmlFor="pooh">
                <img className={styles.sample} src={pooh_sample} alt="pooh" />
              </label>
            </div>
            <div className={styles.optioncontainer}>
              <label htmlFor="when">날짜 선택 :</label>
              <select
                className={styles.select}
                name="when"
                id="when"
                onChange={handleChange}
                required
                defaultValue="defaultValue"
              >
                <option disabled value="defaultValue">
                  {" "}
                  ---날짜 선택---{" "}
                </option>
                <option value="10May">2024/05/10</option>
                <option value="11May">2024/05/11</option>
                <option value="12May">2024/05/12</option>
              </select>
            </div>
            <input
              className={styles.text}
              type="text"
              placeholder="어디에서?"
              name="where"
              value={photo.where ?? ""}
              required
              onChange={handleChange}
            />
            <textarea
              className={`${styles.text} ${styles.textarea}`}
              type="text"
              placeholder="무엇을?(글자수 40자까지, 2줄 이상 입력 불가)"
              name="what"
              value={photo.what ?? ""}
              onChange={handleChange}
              maxLength="40"
              onKeyDown={(event) => {
                const text = event.target.value;
                if (text.split("\n").length >= 2 && event.key === "Enter") {
                  event.preventDefault();
                }
              }}
            ></textarea>
            <button className={styles.submitbtn}>
              {uploading ? "등록 중..." : " 사진 등록"}
            </button>
          </form>
        </div>{" "}
        <div ref={captureRef} style={{ display: "none" }}>
          <PhotoItem photo={photo} file={file} mode="selected" />
        </div>
      </section>
    </>
  );
}
