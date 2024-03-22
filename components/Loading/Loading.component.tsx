export const Loading = (props: any) => {
    if (props.loading && props.parent === 'inline') {
        const color: string = props.color ? props.color : "text-primary";
        return <>
            <div className={`spinner-border spinner-border-sm me-2 ${color}`} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </>;
    } else {
        return props.loading && <>
            <div style={{ clear: 'both', width: '100%', textAlign: 'center' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>;
    }
}

export default Loading;