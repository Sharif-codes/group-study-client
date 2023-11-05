const Home = () => {
    return (
        <div className="space-y-10">

       
        <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(https://freerangestock.com/sample/148004/a-happy-group-of-young-people-studying-for-exams.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Welcomr to our Study group website.</p>
                    <button className="btn btn-secondary">Explore more</button>
                </div>
            </div>
        </div>
        <section>
        <h2 className="text-4xl text-pink-700 font-bold pb-10">Most Frequent Questions</h2>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" checked="checked" />
            <div className="collapse-title text-xl font-medium">
                What you sell?
            </div>
            <div className="collapse-content">
                <p>We sell Electronic and Technological products of best brands around the world</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                Home Delivery Available?
            </div>
            <div className="collapse-content">
                <p>Yes, We ensure you!</p>
            </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                What is the service charge for home delivery?
            </div>
            <div className="collapse-content">
                <p>2$ per KG</p>
            </div>
        </div>
    </section>
    </div>
    );
};

export default Home;