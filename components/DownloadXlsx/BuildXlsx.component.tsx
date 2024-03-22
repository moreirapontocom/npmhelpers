import xlsx from "node-xlsx";

// This function is used to build a generic xlsx file from the data
// received from the API. The data is an array of objects.
// The object should be a single level object

const buildXlsx = (payload: any): Promise<Buffer> => {
  let headerRow: string[] = [];

  function getSheets(data: any) {
    const sheets = [] as any;
    const newSheet = [] as any;

    headerRow = [...headerRow, ...Object.keys(payload[0])];
    newSheet.push(headerRow);

    payload.forEach((row: any) => {
      const newRow = [] as any;
      headerRow.forEach((header: string) => {
        newRow.push(row[header]);
      });
      newSheet.push(newRow);
    });

    sheets.push({ name: "", data: newSheet, options: {} })
    return sheets;
  }

  try {
    return new Promise<Buffer>((resolve, _) => {
      const buffer = xlsx.build(getSheets(payload));
      resolve(buffer);
    });
  } catch (error) {
    throw new Error("Error building xlsx file");
  }
};

export default buildXlsx;