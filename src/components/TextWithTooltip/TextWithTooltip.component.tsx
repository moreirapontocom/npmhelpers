import { OverlayTrigger, Tooltip } from "react-bootstrap";

function TextWithTooltip(props: any): any {
    const { id, tooltip, placement, children } = props;
    return (
      <OverlayTrigger
          overlay={<Tooltip id={id}>{tooltip}</Tooltip>}
          placement={placement || "top"}>
            <span>{children}</span>
      </OverlayTrigger>
    );
}

export default TextWithTooltip;