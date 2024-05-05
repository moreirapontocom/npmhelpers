import Separator from "../Separator/Separator.component";

import "./ColumnsMatcher.component.scss";

interface ColumnsMatcherProps {
  columnsFrom: string[]
  columnsTo: string[]
  fromDescription?: string
  toDescription?: string
  onMatchColumns?: (columns: { from: string, to: string }[]) => void
}

const ColumnsMatcher = ({ columnsFrom, columnsTo, fromDescription, toDescription, onMatchColumns }: ColumnsMatcherProps) => {
  const _matchColumns = () => {
    const columns: { from: string, to: string }[] = [];
    const selects: NodeListOf<HTMLSelectElement> = document.querySelectorAll('.ColumnsMatcher select');
    selects.forEach((select: HTMLSelectElement) => {
      const from = select.parentElement?.parentElement?.querySelector('.col-5')?.textContent?.trim();
      const to = select.value;
      if (from && to) {
        columns.push({ from, to });
      }
    });

    if (onMatchColumns) {
      onMatchColumns(columns);
    }
  };

  return <>
    <div className="ColumnsMatcher">
      {columnsFrom.length !== columnsTo.length && <>
        <div className="alert alert-warning">
          <strong>
            <i className="fas fa-exclamation-triangle me-2"></i> Warning
          </strong><br />
          Columns found in CSV are not matching with target columns.<br />
          <small className="text-muted">
            CSV Columns: {columnsFrom.length} &middot; Target Columns: {columnsTo.length}
          </small>
        </div>

        <Separator size={20} />
      </>}

      <div className="row">
        <div className="col-5">
          <h4>Columns From</h4>
          {fromDescription && <small className="text-muted">{fromDescription}</small>}
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h4>Columns To</h4>
          {toDescription && <small className="text-muted">{toDescription}</small>}
        </div>
      </div>

      <Separator size={20} />

      {columnsFrom.map((column: string, indexColumn: number) => <>
        <div className="row matcher align-items-center" key={`ColumnsMatcher-${column}-${indexColumn}`}>
          <div className="col-5 columnBorder">{column}</div>
          <div className="col-2 text-center"><i className="fas fa-arrow-right"></i></div>
          <div className="col-5 columnBorder">

            <select className="form-select">
              <option value="">Select a column</option>
              {columnsTo.map((columnTo: string, indexColumnTo: number) => {
                return <option
                  selected={column === columnTo}
                  key={`ColumnsMatcher-${column}-${indexColumn}-${columnTo}-${indexColumnTo}`}>
                  {columnTo}
                </option>
              })}
            </select>

          </div>
        </div>
      </>)}

      <Separator size={20} />

      <button
        onClick={() => _matchColumns()}
        type="button"
        className="btn btn-outline-primary">
          <i className="fas fa-check me-2"></i>
          Finish Matching
      </button>

    </div>
  </>
};

export default ColumnsMatcher;