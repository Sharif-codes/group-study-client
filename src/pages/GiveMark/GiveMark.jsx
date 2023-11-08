import axios from "axios";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import PdfPreview from "./PdfPreview";
import { Document, Page } from 'react-pdf';
import { useState } from "react";

const GiveMark = () => {
    const navigate = useNavigate()
    const currentAssignment = useLoaderData()
    const { _id, title, assignmentMark, examineeName, status, obtainedMark, note, pdf } = currentAssignment
    const handleGiveMark = e => {
        e.preventDefault()
        const form = e.target
        const mark = form.mark.value
        const feedback = form.feedback.value
        const data = { mark, feedback, status: "completed" }
        console.log(data)
        axios.patch(`https://group-study-server-rho.vercel.app/give-mark/${_id}`, data)
            .then(res => {
                console.log(res.data)
                toast.success('Marks submitted savedsuccesfully')
                navigate("/")
            })
            .catch(err => console.log(err))
    }
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const goToPrevPage = () => {
        setPageNumber((prevPageNumber) => prevPageNumber - 1);
    };

    const goToNextPage = () => {
        setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
    console.log(pdf ? pdf : '')
    return (
        <div>

            <h2 className="text-2xl font-bold text-secondary text-center">Title: {title}</h2>
            <div className="bg-slate-200 rounded-md max-w-screen-md mx-auto">
                <div className="my-2">
                    <p className="text-center font-semibold text-lg ">Answer Script:</p>
                    <div>
                        {/* <nav>
                            <button onClick={goToPrevPage}>Prev</button>
                            <button onClick={goToNextPage}>Next</button>
                        </nav>

                        <div style={{ width: 600 }}>
                            <Document file="https://www.africau.edu/images/default/sample.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} width={600} />
                            </Document>
                        </div>

                        <p>
                            Page {pageNumber} of {numPages}
                        </p> */}
                        <iframe
                            title="PDF Viewer"
                            src={pdf}
                            width="100%"
                            height="500px"
                        >
                            Your browser does not support PDFs.
                        </iframe>
                    </div>
                </div>
                <div className="my-2">
                    <p className="text-center font-semibold text-lg">Examinee Note:</p>
                    <p className="flex justify-center">{note}</p>
                </div>
                <div className="flex justify-center ">
                    <form action="" className="space-y-2 border-2 border-secondary-focus bg-pink-100 p-5 m-5 rounded-lg " onSubmit={handleGiveMark}>
                        <p className="text-lg">Assign Mark</p>
                        <input type="text" name="mark" className="input input-bordered" placeholder="Mark" />
                        <p className="text-lg">Feedback</p>
                        <input type="text" name="feedback" id="" className="input input-bordered" placeholder="Feedback" />
                        <br />
                        <input className="btn btn-secondary mx-auto text-white" type="submit" value="Submit Mark" />
                    </form>

                </div>

            </div>
        </div>
    );
};

export default GiveMark;