import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SubjectTable = ({sendSubDataToParent}) => {
    const [data, setData] = useState(true)
    const handleClick = () =>{
        sendSubDataToParent(data);
    }
    return (
        <div>
            <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                <div className="table-responsive">
                    <table className="table whitespace-nowrap table-sm min-w-full">
                        <thead><tr className="border-b border-defaultborder">
                            <th scope="col" className="text-start">Sl No.</th>
                            <th scope="col" className="text-start">Subject Name</th>
                            <th scope="col" className="text-start">Subject Code</th>
                            <th scope="col" className="text-start">Type</th>
                            <th scope="col" className="text-start">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-defaultborder">
                                <td>1</td>
                                <td>Englis</td>
                                <td>
                                    ENg
                                </td>
                                <td>
                                    Theory</td>
                                <td>
                                    <div className="hstack flex gap-3 
 text-[.9375rem]">
                                        <div className="ti-dropdown hs-dropdown">
                                            <button type="button"
                                                className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                            </button>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                <li onClick={handleClick}><Link className="ti-dropdown-item" to="#">Edit</Link></li>
                                                <li><Link className="ti-dropdown-item" to="#">Delete</Link></li>
 
                                            </ul>
                                        </div>
                                        {/* <button type="button" className="ti-btn ti-btn-outline-danger !rounded-full ti-btn-wave">Disable</button>
                                                                                    <button type="button" className="ti-btn ti-btn-outline-secondary !rounded-full ti-btn-wave">Edit</button> */}
                                    </div>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default SubjectTable
