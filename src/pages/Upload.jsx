import React, { useState } from "react";
import styles from "./Upload.module.css";
import Title from "../components/Title";
import basic from '../staticimage/basic.png';
import totoro from '../staticimage/totoro.png';
import pooh from '../staticimage/pooh.png';
import totoro_sample from '../staticimage/totoro.jpg'
import pooh_sample from "../staticimage/pooh.jpg";
import { addNewPhoto, uploadPhoto } from "../apis/firebase";
import { v4 as uuidv4} from 'uuid'
import {useQueryClient, useMutation} from '@tanstack/react-query'
import {useNavigate} from 'react-router-dom'


const filmImage ={
  basic, totoro, pooh
}

export default function Upload() {
  const [photo, setPhoto] = useState({});
  const [file, setFile] = useState();
  const [film, setFilm] = useState();
  const [uploading, setUploading] =useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const addPhoto = useMutation({mutationFn:({photo, id, imageurl}) => addNewPhoto({photo, id, imageurl}), onSuccess: () => queryClient.invalidateQueries(['photos'])})

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4()
    setUploading(true);
    uploadPhoto({file, id}).then( imageurl => { 
      addPhoto.mutate({ photo, id, imageurl }, {
        onSuccess: () => {
          setPhoto({})
          setFile(null)
        }
      });
    }).finally(() => {
      setUploading(false);
    
      navigate('/photo');
    })
  }
  const handleChange = (e) => {
    const {name, value, files} = e.target;
    if(name === 'file') {
      setFile(files && files[0])
      return;
    }
    if(name === 'film') {
      setFilm(value)
      return;
    }
    setPhoto({...photo, [name]: value})
  }
  
  return (
    <section className="section">
      <Title title="사진등록" />
      <div className={styles.contentscontainer}>
        <div className={styles.imagecontainer}>
          <div className={styles.image}>
          <img className={styles.film} src={filmImage[film]} alt={film}/>
</div>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            name="file"
            required
            onChange={handleChange}
          />
          <div className={styles.radiocontainer}>
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
          <input
            className={styles.text}
            type="text"
            placeholder="언제?"
            name="when"
            value={photo.when ?? ""}
            required
            onChange={handleChange}
          />
          <input
            className={styles.text}
            type="text"
            placeholder="어디에서?"
            name="where"
            value={photo.where ?? ""}
            required
            onChange={handleChange}
          />
          <input
            className={styles.text}
            type="text"
            placeholder="무엇을?"
            name="what"
            value={photo.what ?? ""}
            onChange={handleChange}
          />
          <button className={styles.submitbtn}>사진 등록</button>
        </form>
      </div>
    </section>
  );
}
