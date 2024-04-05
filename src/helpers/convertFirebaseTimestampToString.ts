import dayjs from "dayjs";

const convertFirebaseTimestampToString = (firebaseTimestamp: { _seconds: number, _nanoseconds: number } | any, format: string = "YYYY-MM-DD HH:mm:ss"): string => {
  if (!firebaseTimestamp || !firebaseTimestamp._seconds) {
    return "";
  }

  const fireBaseTime = new Date(firebaseTimestamp._seconds * 1000 + firebaseTimestamp._nanoseconds / 1000000);
  return dayjs(fireBaseTime).format(format);
}

export default convertFirebaseTimestampToString;
