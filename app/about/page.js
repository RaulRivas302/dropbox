
const page = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-900 via-gray-900 to-black flex flex-col justify-center items-center text-white">

            {/* Header */}
            <div className="mb-12">
                <h1 className="text-5xl font-extrabold text-blue-400">Dropbox Integraion</h1>
                <p className="mt-2 text-lg text-gray-300">Excellence in Software Engineering</p>
            </div>

            {/* Services */}
            <div className="mb-10 p-8 bg-opacity-10 bg-gray-100 shadow-lg rounded-lg w-3/4">
                <h2 className="text-3xl font-semibold mb-5 text-blue-300">Services Offered:</h2>
                <ul className="list-disc pl-5">
                    <li className="mb-2 text-lg text-gray-300">Software Development</li>
                    <li className="mb-2 text-lg text-gray-300">AWS Cloud Solutions</li>
                    <li className="mb-2 text-lg text-gray-300">Web Development</li>
                    <li className="text-lg text-gray-300">Mobile App Development</li>
                </ul>
            </div>

            {/* Location */}
            <div className="mb-10 p-8 bg-opacity-10 bg-gray-100 shadow-lg rounded-lg w-3/4">
                <h2 className="text-3xl font-semibold mb-5 text-blue-300">Location:</h2>
                <p className="text-lg text-gray-300">Bahria Town, Phase 7</p>
            </div>

            {/* Footer */}
            <div className="mt-12">
                <p className="text-gray-400">© 2023 Vultra Coorporation. All rights reserved.</p>
            </div>
        </div>
    );
}

export default page
