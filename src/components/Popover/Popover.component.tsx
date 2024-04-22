import { PopoverBody, PopoverHeader } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

import 'bootstrap/dist/css/bootstrap.css';

function CustomPopover(props: any) {
    const { header, body, children } = props;
    return <>
        <OverlayTrigger placement="top" trigger={["hover", "focus"]}
            overlay={(
                <Popover>
                    {header && <>
                        <PopoverHeader>
                            <strong>{header}</strong>
                        </PopoverHeader>
                    </>}
                    <PopoverBody>
                        <div dangerouslySetInnerHTML={{ __html: body }}></div>
                    </PopoverBody>
                </Popover>
            )}>
                <span style={{ display: "inline-block" }}>{children}</span>
        </OverlayTrigger>
    </>;
}

export default CustomPopover;