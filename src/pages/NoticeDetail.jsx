import React from "react";
import styles from "./NoticeDetail.module.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error";
import {Link} from 'react-router-dom';
import Ticket from "../components/Ticket.jsx";

export default function NoticeDetail({ id }) {
  const {
    isLoading,
    error,
    data: notice,
  } = useQuery({
    queryKey: ["notice"],
    queryFn: async () => {
      return fetch("/data/notice.json")
        .then((res) => res.json())
        .then((data) => data.notice);
    },
  });

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const flight = notice?.flight || "";
  const parking = notice?.parking || "";
  const accommodation = notice?.accommodation || "";
  const ticket = notice?.ticket || "";
  const vjw = notice?.vjw || "";

  return (
    <>
      <ul>
        <li className={styles.list}>
          <span className={styles.title}>1. 비행 정보</span>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}
            {flight.day1}
          </p>
          <p>
            {"\u00A0"}
            {"\u00A0"}
            {flight.route1}{" "}
          </p>
          <p>
            {"\u00A0"}
            {"\u00A0"}

            {flight.time1}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}
            {"\u00A0"}
            {flight.day2}
          </p>
          <p>
            {"\u00A0"}
            {"\u00A0"}
            {flight.route2}
          </p>
          <p>
            {"\u00A0"}
            {"\u00A0"}
            {flight.time2}
          </p>
        </li>
        <li className={styles.list}>
          <span className={styles.title}>2. 티켓 정보</span>
          <Ticket ticket={ticket} id={id} />
        </li>
        <li className={styles.list}>
          <span className={styles.title}>3. 주차장 정보</span>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}
            {parking.line1_1} {"\u00A0"}
            <Link
              className={styles.link}
              to={parking.bookurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 인천공항 주차 예약 사이트
            </Link>
            {"\u00A0"}
            {parking.line1_2}
          </p>

          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}
            {parking.line2}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}비용 : {parking.cost}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}주소 : {parking.address} {"\u00A0"}
            <Link
              className={styles.link}
              to={parking.naverurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 지도 보기(네이버)
            </Link>
            {"\u00A0"}
            {"\u00A0"}
            <Link
              className={styles.link}
              to={parking.tmapurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 지도 보기(티맵)
            </Link>
          </p>
        </li>
        <li className={styles.list}>
          <span className={styles.title}>4. VJW 정보</span>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}
            {vjw.line1}
          </p>
          <p>
            {"\u00A0"} {vjw.line1_1}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}
            {vjw.line2} {"\u00A0"}
            <Link
              className={styles.link}
              to={vjw.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 발급하러 가기
            </Link>
          </p>
        </li>
        <li className={styles.list}>
          <span className={styles.title}>5. 숙소 정보</span>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}숙박 기간 : {accommodation.time}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}숙소 정보 : {"\u00A0"}
            <Link
              className={styles.link}
              to={accommodation.hotel}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 구경 가기
            </Link>
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}체크인 : {accommodation.checkin}{" "}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}체크아웃 : {accommodation.checkout}{" "}
          </p>
          <p>
            <span className={styles.dot}>•</span>
            {"\u00A0"}속소 주소 : {accommodation.address} {"\u00A0"}
            <Link
              className={styles.link}
              to={accommodation.addressurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              ☞ 지도 보기(구글맵)
            </Link>
          </p>
        </li>
      </ul>
    </>
  );
}
