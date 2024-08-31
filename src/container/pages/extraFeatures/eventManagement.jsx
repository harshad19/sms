import React from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';

const EventManagement = () => {
  return (
    <div>
    <h4 className='pt-4 borderBottom'>Events </h4>
    <div className="events-flex-container pb-4 pt-2">
        <div className='flex justify-between'>
            
            <div className="breadcrumbs !border-0 ">
                        <ol className="flex items-center whitespace-nowrap min-w-0">
                            <li className="text-sm">
                                <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
                                    Dashboard
                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </Link>
                            </li>

                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                            Events
                            </li>
                        </ol>
                    </div>
           
        </div>


    </div>

    <div className='create-stud-table'>
        <div className='box p-4'>
            <h4>Event Details</h4>
            <div className='event-magement'>
                <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        {/* <input type="search" className="form-control" id="input-search" placeholder="Search" /> */}
                        <div className="flex rounded-sm search-box">
                                            <input type="search" placeholder='Search' id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="ti-form-input rounded-none rounded-s-sm focus:z-10" />
                                            <button aria-label="button" type="button" className="inline-flex search-icon flex-shrink-0 justify-center items-center rounded-e-sm border border-transparent font-semibold bg-warning text-white hover:bg-warning focus:z-10 focus:outline-none focus:ring-0 focus:ring-warning transition-all text-sm">
                                                <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                                </svg>
                                            </button>
                                        </div>
                    </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                    </div>

                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                    </div>

                </div>
            </div>
            {/* Top section end */}
            {/* Table section start */}
            <div className="student-table-details pt-4">
                <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                    <div className="table-responsive">
                        <table className="table whitespace-nowrap table-sm min-w-full">
                            <thead><tr className="border-b border-defaultborder">
                                <th scope="col" className="text-start">#</th>
                                <th scope="col" className="text-start">Event Title</th>
                                <th scope="col" className="text-start">Event Date</th>
                                <th scope="col" className="text-start">Duration</th>
                                <th scope="col" className="text-start">Location</th>
                                <th scope="col" className="text-start">Organizer</th>
                                <th scope="col" className="text-start">Audience</th>
                                <th scope="col" className="text-start">Event Type</th>
                                <th scope="col" className="text-start">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-defaultborder">
                                    <td>1</td>
                                    <td>	Science Exhibition</td>
                                    <td>2024-01-01</td>
                                    <td>01 Jan 2024, 12:00 am - 31 Dec 2025, 12:00 am	</td>
                                    <td>Nagpur	</td>
                                    <td>John Doe</td>
                                    <td>Students</td>
                                    <td>Academic	</td>
                                  
                                    <td>
                                        button
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Table section end */}
        </div>
    </div>

</div>
  )
}

export default EventManagement