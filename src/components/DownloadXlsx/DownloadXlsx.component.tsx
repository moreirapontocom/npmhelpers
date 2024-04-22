import buildXlsx from "./BuildXlsx.component";

interface DownloadXlsxProps {
  payload: any;
  filename: string;
  btnLabel?: string;
  btnClass?: string;
}

const DownloadXlsx = ({ payload, filename, btnLabel, btnClass }: DownloadXlsxProps): any => {
  const startDownload = async () => {
    await buildXlsx(payload).then((buffer: Buffer) => {
      const blob = new Blob([buffer], {type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${filename}.xlsx`;
      a.click();
      window.URL.revokeObjectURL(url);
    }).catch((error: Error) => {
      console.error(error);
    });
  };

  return <button className={btnClass} onClick={startDownload}>{btnLabel && "Download File"}</button>
};

export default DownloadXlsx;