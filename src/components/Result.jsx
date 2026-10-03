const Result = ({ score }) => {
    if (score >= 70) {
        return <h2>Excellent!</h2>;
    }
    if (score >= 50) {
        return <h2>Good!</h2>;
    }
    return <h2>Needs Improvement.</h2>;
};
export default Result