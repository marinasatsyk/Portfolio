const Error = ({ codeError }) => {
    return (
        <>
            <div className="error">
                Oooouuuuupps! On dirait que la page que vous cherchez n'éxiste
                pas...
            </div>
            <div>{codeError}</div>
        </>
    );
};
export default Error;
