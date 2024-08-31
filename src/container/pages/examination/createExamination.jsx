import React, { useState } from 'react'
import { singleselect } from '../../forms/formelements/formselect/formselectdata'
import Select from 'react-select';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';


const CreateExamination = () => {
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
    <h4 className='pt-4 borderBottom'>Examination</h4>
    <div className="breadcrumbs-wrapper mb-4 pt-2">
        <div className='staff-createflex-container'>
            <div className='flex flex-row items-center'>

                

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
                        <li className="text-sm">
                            <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/examination/examinationList`}>
                                Exam
                                <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </li>

                        <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                            Create Exam
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    {/* Student form create Start */}
    <div className='exam-form-create'>
        <div className='box'>
            <div className='p-4'>
                <div className='examleave-details mb-4'>
                    <h4 className=''>Create Exam</h4>
                    <h6 className='pt-4'>Exam Details</h6>
                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                        <label className="ti-form-select rounded-sm !p-0 mb-2">Exam Type*</label>
                        <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                    </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Exam Name*:</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                    </div>
                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">From Date*</label>
                            <div className="input-group !flex-nowrap">
                                <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>

                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">To Date*</label>
                            <div className="input-group !flex-nowrap">
                                <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                <DatePicker placeholderText="Choose date" className="ti-form-input  focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>

                    </div>
                    {/* End of the grid */}

                    <div className='grid grid-cols-12 sm:gap-6 pt-4'>
                    
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Total Student</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Passed Student</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <label className="ti-form-select rounded-sm !p-0 mb-2">Failed Student</label>
                            <input type="text" className="form-control" id="input-text" placeholder="" />
                            </div>
                    </div>


                </div>

                <div className='exam-create-btn pt-4'>
                    <div className='flex justify-end'>
                        <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Save</button>
                        <div className='backButton'>
                    <Link to={`${import.meta.env.BASE_URL}pages/examination/examinationList`}>

                        <button type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Back</button>
                    </Link>
                </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Student form create end */}
    </div>
</div>
  )
}

export default CreateExamination