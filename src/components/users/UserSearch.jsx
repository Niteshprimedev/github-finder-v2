import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';

function UserSearch() {
    const [text, setText] = useState('');
    const { users, searchUsers, clearUsers } = useContext(GithubContext);
    const { setAlert } = useContext(AlertContext);


    const handleChange = (e) => {
        const userInput = e.target.value;
        setText(userInput);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (text === '') {
            setAlert('Please enter something', 'error');
        }
        else {
            searchUsers(text);
        }
        setText('');
    }

    const handleClear = () => {
        clearUsers();
    }

    return (
        <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
            <div>
                <form action="" className='form-control' onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" className="w-full pr-40 bg-gray-200 input input-lg text-black" onChange={handleChange} placeholder='Search' value={text} />
                        <button type='submit' className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg">
                            Go
                        </button>
                    </div>
                </form>
            </div>
            {users.length > 0 &&
                <div>

                    <button className="btn btn-ghost btn-lg" onClick={handleClear}>Clear</button>
                </div>
            }
        </div>
    )
}

export default UserSearch
