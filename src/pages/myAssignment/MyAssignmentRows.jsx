

const MyAssignmentRows = ({assignment}) => {
    const {pdf, note, examineeEmail,examineeName,status,title,obtainedMark,feedback,assignmentMark}= assignment
    return (
        <tr className="bg-base-200">
            <th>{title}</th>
            <td>{status}</td>
            <td>{assignmentMark}</td>
            <td>{obtainedMark? obtainedMark:'pending'}</td>
            <td>{feedback?feedback:'pending'}</td>
        </tr>
    );
};

export default MyAssignmentRows;