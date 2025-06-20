import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { Link, useNavigate, useParams } from 'react-router-dom'

function NotFound({ urlParam }) {
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() => {
        if (params['*'] && params['*'].length !== 0) {
            navigate('/notfound');
        }
    }, []);


    return (
        <div className='hero'>
            <div className="text-center hero-content">
                <div className="max-w-lg">
                    <h1 className="text-8xl font-bold mb-8">
                        Oops!
                    </h1>
                    <p className='text-5xl mb-8'>404- Page not found</p>
                    <Link to='/' className="btn btn-primary btn-lg">
                        <FaHome className='mr-2'></FaHome>Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound
