import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import Separator from "../Separator/Separator.component";

const CsvReader = (payload: any) => {
  const {
    rawData,
    couterLabel,
  } = payload;

  const [data, setData] = useState([]);

  useEffect(() => {
    if (rawData) {
      Papa.parse(rawData, {
        header: true,
        skipEmptyLines: true,
        complete: (result: any) => {
          setData(result.data);
        },
        error: (error: any) => {
          console.error("Error reading data:", error);
        },
      });
    }
  }, [rawData]);

  return <div>
    {rawData && data.length > 0 && <>
      <small className="text-muted">{data.length} {couterLabel}</small>

      <Separator size={7} />

      <table className="table">
        <thead>
          <tr>
            <th className="text-muted">
              <small>
                #
              </small>
            </th>
            {data.length > 0 && Object.keys(data[0]).map((key: any, index: number) => {
              return <React.Fragment key={`header-${key}`}>
                <th>{key}</th>
              </React.Fragment>
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <small className="text-muted">{index+1}</small>
              </td>
              {Object.values(row).map((value: any, i: number) => {
                return <React.Fragment key={`value-${i}`}>
                  <td key={`value-${i}`}>{value}</td>
                </React.Fragment>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>}
  </div>
};

export default CsvReader;