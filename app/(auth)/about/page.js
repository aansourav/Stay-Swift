import Link from "next/link";

const AboutUsPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">About Us</h1>
            <p className="text-xl text-gray-800 mb-6">
                Welcome to our website! We are passionate about delivering
                exceptional services and ensuring our customers have the best
                experience possible.
            </p>
            <section className="mb-6">
                <h2 className="text-3xl text-gray-800 font-semibold">
                    Our Mission
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                    Our mission is to continuously innovate and improve our
                    services to meet and exceed customer expectations.
                </p>
            </section>
            <section className="mb-6">
                <h2 className="text-3xl text-gray-800 font-semibold">
                    Our Team
                </h2>
                <p className="text-lg text-gray-700 mt-2">
                    We are a group of dedicated professionals committed to your
                    satisfaction. Our team works tirelessly to provide top-notch
                    support and services.
                </p>
            </section>
            <div className="mt-4">
                <Link
                    href="/contact"
                    className="btn-primary hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg text-lg"
                >
                    Contact Us
                </Link>
            </div>
        </div>
    );
};

export default AboutUsPage;
