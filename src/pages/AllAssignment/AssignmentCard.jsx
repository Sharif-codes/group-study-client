

const AssignmentCard = ({assignments}) => {
    const {title,description,mark,difficulty,due,thumbnail,createdBy}= assignments
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="h-64"><img className="h-72 w-full" src={thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                   
                    <p>{mark}</p>
                    <p>{due}</p>
                    <div className="flex gap-5">
                        <button className="btn btn-accent">View </button>
                        <button className="btn btn-secondary">Update</button>
                    </div>
                </div>
            </div>
    );
};

export default AssignmentCard;