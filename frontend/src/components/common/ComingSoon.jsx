import OtherHeader from "../ExtraComponent/OtherHeader";

const ComingSoon = ({ title }) => {
    return (
        <>
            <OtherHeader heading='Syllabus Page' firstLink='Home' secondLink='Syllabus' />
            <div className="container text-center py-5">
                <h2 className="fw-bold mb-3">{title}</h2>
                <h4 className="text-warning">Coming Soon</h4>
                <p className="text-muted mt-3">
                    Syllabus will be available very soon.
                </p>
            </div>
        </>
    );
};

export default ComingSoon;
