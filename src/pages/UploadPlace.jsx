import React, { useState } from "react";
import styles from "./UploadPlace.module.css";
import { addList, uploadPhoto } from "../apis/firebase";
import { v4 as uuidv4} from 'uuid'
import Title from "../components/Title";


export default function UploadPlace() {
  const [list, setList] = useState({});
  const [file, setFile] = useState(null);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    uploadPhoto({id, type: file, mode:"lists"}).then( imageUrl => {
      addList({list, id, imageUrl}).then(() => {
        setFile(null)
        setList({})
      })
    })
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFile(files && files[0]);
      return;
    }
    setList({ ...list, [name]: value });
  };

  return (
    <>
      <section className="section">
        <Title title="Upload" />
        <div className={styles.contentscontainer}>
          {file && (
            <div className={styles.imagecontainer}>
              <img
                className={styles.uploadimage}
                src={URL.createObjectURL(file)}
                alt="관광지사진"
              />
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
              Upload
            </label>
            <div className={styles.optioncontainer}>
              <p>Category :</p>
              <input
                type="radio"
                id="defaultvalue"
                name="category"
                value=" "
                disabled
              />
              <input
                type="radio"
                id="place"
                name="category"
                value="place"
                required
                onChange={handleChange}
              />
              <label htmlFor="place">sight</label>
              <input
                type="radio"
                id="food"
                name="category"
                value="food"
                required
                onChange={handleChange}
              />
              <label htmlFor="food">food</label>
            </div>
            <input
              className={styles.text}
              type="text"
              placeholder="title"
              name="title"
              value={list.title ?? ""}
              required
              onChange={handleChange}
            />
            <input
              className={styles.text}
              type="text"
              placeholder="address"
              name="address"
              value={list.address ?? ""}
              required
              onChange={handleChange}
            />
            <input
              className={styles.text}
              type="text"
              placeholder="addressurl"
              name="addressurl"
              value={list.addressurl ?? ""}
              onChange={handleChange}
            />
            <input
              className={styles.text}
              type="text"
              placeholder="time"
              name="time"
              value={list.time ?? ""}
              required
              onChange={handleChange}
            />
            <input
              className={styles.text}
              type="text"
              placeholder="pay"
              name="pay"
              value={list.pay ?? ""}
              required
              onChange={handleChange}
            />
            <textarea
              className={`${styles.text} ${styles.textarea}`}
              type="text"
              placeholder="description"
              name="description"
              value={list.description ?? ""}
              onChange={handleChange}
              // maxLength="40"
              // onKeyDown={(event) => {
              //   const text = event.target.value;
              //   if (text.split("\n").length >= 2 && event.key === "Enter") {
              //     event.preventDefault();
              //   }
              // }}
            ></textarea>
            <button className={styles.submitbtn}>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
}
