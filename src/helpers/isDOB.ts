import dayjs from "dayjs";

const isDOB = (value: any) => {
  if (!value || value.length !== 10) {
    return false;
  }

  const date = dayjs(value);
  if (!date.isValid()) {
    return false;
  }

  return date.isBefore(dayjs()) && date.isAfter(dayjs().subtract(150, 'year'));
}

export default isDOB;
