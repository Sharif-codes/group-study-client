

const SubmittedAssignmentRows = ({assignment}) => {
    const {_id,title, assignmentMark, examineeName } = assignment
    return (
        <tr className="bg-base-200">
            <th>{title}</th>
            <td>{assignmentMark}</td>
            <td>{examineeName}</td>
            <td><button className="btn btn-accent"> Give Mark</button></td>
        </tr>
    );
};

export default SubmittedAssignmentRows;