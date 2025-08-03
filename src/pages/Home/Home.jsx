import { Link, useLoaderData } from "react-router-dom";
import FeatureCard from "./FeatureCard";
import Contact from "./Contact";

const Home = () => {
    const feature = useLoaderData()
    return (
        <div className="space-y-10">
            <div className="hero min-h-[90vh] rounded-xl" style={{ backgroundImage: 'url(https://freerangestock.com/sample/148004/a-happy-group-of-young-people-studying-for-exams.jpg)'}}>
                <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-2xl font-bold">Welcome to our Study group website.</h1>
                        <p className="mb-5"></p>
                        <Link to="/my-assignments"><button className="btn btn-secondary text-sm">My Assignment</button></Link>
                    </div>

                </div>
            </div>
            <section className="my-10 w-full">
                <p className="text-2xl md:text-4xl flex justify-center text-pink-700 font-bold pb-10">Features</p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {
                        feature?.map(item => <FeatureCard key={item.id} feature={item}></FeatureCard>)
                    }
                </div>
            </section>

            <section className="w-full">
                <h2 className="text-2xl md:text-4xl w-full flex justify-center text-pink-700 font-bold pb-10">Most Frequent Questions</h2>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                        who we are?
                    </div>
                    <div className="collapse-content">
                        <p>We are your friends. Here we share our knowledge to enhance our potential!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How I can submit my assignment?
                    </div>
                    <div className="collapse-content">
                        <p>Follow the simple steps!</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Is there any suggestions published examnight?
                    </div>
                    <div className="collapse-content">
                        <p>Ofcourse! you will get</p>
                    </div>
                </div>
            </section>
            <section className="mx-auto space-y-5 text-center">
                <h2 className="text-3xl text-blue-700 font-bold pb-5">Give feedback</h2>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <Contact></Contact>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;