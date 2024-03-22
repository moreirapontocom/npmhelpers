const Separator = (props: any) => {
    const { size } = props;
    return <div style={{ width: '100%', height: `${size || 1 }px` }}></div>;
}

export default Separator;