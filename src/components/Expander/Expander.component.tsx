import { useState } from 'react';
import Separator from '../Separator/Separator.component';

const Expander = (props: any) => {
  const {
    contentId,
    labelExpand,
    labelCollapse,
  } = props;
  const [expanded, setExpanded] = useState(null);

  return <>
    <Separator size={5} />

    <div className="text-start">
      <button
        onClick={() => setExpanded(expanded === contentId ? null : contentId)}
        type="button" className="btn btn-link btn-sm inline">
          {expanded === contentId && <><i className="fas fa-chevron-up me-2"></i> {labelCollapse || "Collapse"}</>}
          {expanded !== contentId && <><i className="fas fa-chevron-down me-2"></i> {labelExpand || "Expand"}</>}
      </button>
    </div>

    <div className={`${expanded === contentId ? "" : "d-none"}`}>
      <Separator size={10} />
      {props.children}
    </div>
  </>
};

export default Expander;