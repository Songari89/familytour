import React from "react";
import styels from "./NoticeDetail.module.css";
import { useQuery } from "@tanstack/react-query";

export default function NoticeDetail() {
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
  const flight = notice?.flight;
  const parking = notice?.parking;
  const accommodation = notice?.accommodation;
  const ticket = notice?.ticket;
  const vjw = notice?.vjw;
  
  return (
    <div className={styels.container}>
    </div>
  );
}
