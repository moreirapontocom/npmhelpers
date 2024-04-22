import { OverlayTrigger, Tooltip } from "react-bootstrap";

function TextWithTooltip(props: any): any {
    const { id, tooltip, children } = props;
    return (
      <OverlayTrigger
          overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
          placement="top">
            <span>{children}</span>
      </OverlayTrigger>
    );
}

export default TextWithTooltip;