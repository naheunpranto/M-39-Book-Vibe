
import { Link } from 'react-router';
 

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
            <div className="text-center">
                
                <h1 className="text-9xl font-extrabold text-[#23BE0A] opacity-20">404</h1>
                
                <div className="-mt-20">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Oops! Page Not Found
                    </h2>
                    <p className="text-lg font-semibold text-gray-600 mb-8 max-w-md mx-auto">
                        The page you are looking for doesn't exist or has been moved. Please check the URL or go back to the homepage.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/" 
                            className="btn bg-[#23BE0A] hover:bg-[#1e9b08] text-white border-none px-8 font-semibold"
                        >
                            Back to Home
                        </Link>
                        
                        <button 
                            onClick={() => window.history.back()} 
                            className="btn btn-outline border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:border-[#23BE0A] px-8"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </div>

             
            <div className="mt-16 grid grid-cols-3 gap-8 opacity-50">
                <div className="w-2 h-2 rounded-full bg-[#23BE0A]"></div>
                <div className="w-2 h-2 rounded-full bg-[#59C6D2]"></div>
                <div className="w-2 h-2 rounded-full bg-[#23BE0A]"></div>
            </div>
        </div>
    );
};

export default ErrorPage;