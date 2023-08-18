'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { GET } from '../api/Authorize/route';

const Page = () => {

    const router = useRouter();
    const handleSignin = async () => {
        router.push('/api/Authorize');
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 via-gray-900 to-black">

            {/* Login Box */}
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-5 text-blue-500">Genesis Engineering</h1>
                <p className="mb-6 text-gray-600 font-bold">Dropbox Integration using OAuth2</p>

                {/* Login with Dropbox Button */}
                <button onClick={handleSignin} className="flex items-center justify-center  bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 focus:outline-none ml-10">
                    <span className="mr-2">

                        <img src="/dropbox.png" alt="Dropbox Icon" className="w-5 h-5" />
                    </span>
                    Sign in with Dropbox
                </button>

                {/* Or separator */}
                <div className="flex items-center justify-between mt-6">
                    <hr className="w-full" />
                    <span className="text-gray-600 mx-2">or</span>
                    <hr className="w-full" />
                </div>

                {/* Login with Google Button */}
                <Link href="/auth/google">
                    <button className="flex items-center justify-center mt-6 bg-gray-300 text-black px-4 py-2 rounded-full hover:bg-gray-400 focus:outline-none ml-10">
                        <span className=" mr-5">
                            {/* This is a placeholder, replace with Google's logo or an appropriate icon */}
                            <img src="/google.png" alt="Google Icon" className="w-5 h-5" />
                        </span>
                        Sign in with Google
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Page
