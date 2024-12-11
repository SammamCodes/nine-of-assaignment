const Footer = () => {
    return (
        <footer className="bg-gray-100 w-full">
            {/* Top Section: Newsletter */}
            <div className="bg-green-200 py-10">
                <div className="w-full px-4 flex flex-col lg:flex-row items-center justify-between">
                    <div className="text-center lg:text-left mb-6 lg:mb-0">
                        <h2 className="text-2xl font-semibold text-green-900">
                            Subscribe To Our Newsletter
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
                            Sign up today. Writing copy is time-consuming and
                            difficult. Headline's artificial intelligence can
                            take your thoughts.
                        </p>
                    </div>
                    <div className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter email address"
                            className="py-3 px-4 rounded-l-lg border border-green-400 focus:outline-none"
                        />
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-orange-600">
                            Get Listed
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Section: Links */}
            <div className="bg-green-700 py-10 text-white">
                <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-bold">paleovalley</h3>
                        <p className="mt-2 text-sm text-gray-300">
                            No need to worry, we’ll help you make sense of it
                            all.
                        </p>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="py-2 px-4 w-full rounded-lg text-black focus:outline-none"
                            />
                        </form>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">About</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="#" className="hover:underline">
                                    What We Offer
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Leadership
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="#" className="hover:underline">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Management
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Workflow
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Finance
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Resources
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Personal</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a href="#" className="hover:underline">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Accounts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Payments
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Social</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>
                                <a
                                    href="https://www.facebook.com/suhaimee.infinity.2024"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/realDonaldTrump"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/kanganaranaut/"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/"
                                    className="hover:underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-green-800 py-4 text-center text-sm text-gray-400">
                © Copyright 2021 by paleovalley. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
