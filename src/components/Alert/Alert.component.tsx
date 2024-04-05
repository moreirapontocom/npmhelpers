import { useEffect, useState } from "react";

import "./Alert.component.scss";

function Alert(props: any) {
    const [, setAlert] = useState({type: '', message: ''});

    useEffect(() => {
        setAlert(props.alert);
        setTimeout(() => {
            setAlert({type: '', message: ''});
            props.alert.type = '';
        }, 5000);
    }, [props.alert, props.alert.type, props.alert.message]);

    return <>
        {props.alert.type && props.alert.type !== "" && <>
            <div className={`custom-alert alert alert-dismissible shadow-sm fade show alert-float alert-${props.alert.type}`} role="alert">
                <strong><span dangerouslySetInnerHTML={{__html: props.alert.message}}></span></strong>
                <button type="button" className="btn-close" onClick={() => {
                    setAlert({type: '', message: ''});
                    props.alert.type = '';
                }}></button>
            </div>
        </>}
    </>
}

export default Alert;