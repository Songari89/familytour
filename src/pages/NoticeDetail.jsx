import React, { useContext } from "react";
import styels from "./NoticeDetail.module.css";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading.jsx";
import Error from "../components/Error";
import {Link} from 'react-router-dom';
import Ticket from "../components/Ticket.jsx";

export default function NoticeDetail({ id }) {
  const {
    isLodaing,
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

  if (isLodaing) {
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
    <div className={styels.container}>
      <ul>
        <li className={styels.list}>
          <p className={styels.title}>1. 비행 정보</p>
          <p>•{flight.day1}</p>
          <p>
            {flight.route1} {"\u00A0"}
            {flight.time1}
          </p>
          <p>•{flight.day2}</p>
          <p>
            {flight.route2} {"\u00A0"}
            {flight.time2}
          </p>
        </li>
        <li className={styels.list}>
          <p className={styels.title}>2. 티켓 정보</p>
          <Ticket ticket={ticket} id={id} />
        </li>
        <li className={styels.list}>
          <p className={styels.title}>3. 주차장 정보</p>
          <p>
            •{parking.line1_1} {"\u00A0"}
            <Link
              to={parking.bookurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              🖥인천공항 주차 예약 사이트
            </Link>
            {"\u00A0"}
            {parking.line1_2}
          </p>

          <p>•{parking.line2}</p>
          <p>•비용 : {parking.cost}</p>
          <p>
            •주소 : {parking.address} {"\u00A0"}
            <Link
              to={parking.naverurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍지도 보기(네이버)
            </Link>
            {"\u00A0"}
            <Link
              to={parking.tmapurl}
              target="_blank"
              rel="noopener noreferrer"
            >
              📍지도 보기(티맵)
            </Link>
          </p>
        </li>
        <li className={styels.list}>
          <p className={styels.title}>4. VJW 정보</p>
          <p>•{vjw.line1}</p>
          <p>
            •{vjw.line2} {"\u00A0"}
            <Link
              to={vjw.url}
              target="_blank"
              rel="noopener noreferrer"
            >
               🔐발급하러 가기
            </Link>
          </p>
        </li>
        <li className={styels.list}>
          <p className={styels.title}>5. 숙소 정보</p>
        </li>
      </ul>
    </div>
  );
}
