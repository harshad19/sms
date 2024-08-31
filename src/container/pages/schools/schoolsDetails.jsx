import { Fragment, useEffect, useState } from 'react';
import Pageheader from '../../../components/common/pageheader/pageheader';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Select from 'react-select';
import { singleselect } from '../../forms/formelements/formselect/formselectdata';
import CreateClass from './createClass';
import CreateSection from './createSection';
import SchoolDetailsTable from './schoolDetailsTable';
import RolesPermissionTable from './rolesPermissionTable';
import CreateRole from './createRole';
import TimeTableTabs from './timeTableTabs';
import SubjectTable from './subjectTable';
import SubjectCreateForm from './subjectCreateForm';
import { fetchSchoolById } from '../../../redux/reducers/schoolReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClassList } from '../../../redux/reducers/classReducer';


const SchoolsDetails = () => {
    const [updateClass, setUpdateClass] = useState(false);
    const [addSec, setAddSec] = useState(false);
    const [updateSchool, setUpdateSchool] = useState(true)


    const [dataFromChild, setDataFromChild] = useState("");
    const [dataFromChildSubject, setDataFromChildSubject] = useState("");

    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const schoolIndData = useSelector((state) => state.schoolData)
    const classIndData = useSelector((state) => state.classData)
    console.log(classIndData, 'classIndData')


    const handleDataFromChild = (data) => {
        setDataFromChild(data);
    }
    const handleSubDataFromChild = (subData) => {
        setDataFromChildSubject(subData);
    }

    //   console.log(dataFromChild, "dataFromChild", dataFromChildSubject)

    const updateForm = () => {
        setAddSec(false);
        setUpdateClass(true);
    }

    const addSection = () => {
        setAddSec(true)
    }

    useEffect((id) => {
        dispatch(fetchSchoolById(params.id))
    }, [])

    ///Class useEffect
    useEffect(() => {

        dispatch(fetchClassList())
    }, [])

    //navgaite and localstorage to edit
    //   const navigateToEdit = (id) =>{
    //     localStorage.setItem('updateSchool', JSON.stringify(updateSchool))
    //     navigate(`${import.meta.env.BASE_URL}pages/schools/editSchool/${params.id}`)
    // }


    return (
        <Fragment>


            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">

                            <h4 className='borderBottom pt-4'>Schools</h4>
                            <div className="school-flex-container pb-4 pt-2">
                                <div className='flex flex-row items-center'>
                                    {/* <div className='backButton'>
                                        <Link to={`${import.meta.env.BASE_URL}pages/schools/schoolsDetails`}>

                                            <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                                        </Link>
                                    </div> */}
                                    {/* <div className="breadcrumbs self-center">
                                        <h6>Dashboard -  Schools - Ashram School Details </h6>
                                    </div> */}
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
                                                <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}pages/schools/allSchools`}>
                                                    Schools
                                                    <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                                    </svg>
                                                </Link>
                                            </li>

                                            <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                                School Details
                                            </li>
                                        </ol>
                                    </div>

                                </div>


                            </div>

                            <div className='school-individual-details'>
                                <div className='box'>
                                    <div className='p-4'>
                                        <div className='flex justify-between school-detail-listing'>
                                            <h4>{schoolIndData.list.schoolName}</h4>
                                            <div className="school-edit-button">
                                                <Link to={`${import.meta.env.BASE_URL}pages/schools/editSchool/${params.id}`}>
                                                    <button type="button" className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave"  >Edit School</button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className='school-deatils-table pt-4'>
                                            <SchoolDetailsTable schoolIndData={schoolIndData} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="box">

                                <div id="sessions">
                                    {/*  */}
                                    <div className="box-body">
                                        <div className="border-b-2 border-gray-200 dark:border-white/10">
                                            <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                                {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary " to="#" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                                                    Details
                                                </Link> */}
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning active" to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                                    Classes
                                                </Link>
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning" to="#" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                                                    Roles & Permissions
                                                </Link>
                                                {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning" to="#" id="underline-item-4" data-hs-tab="#underline-4" aria-controls="underline-4">
                                                    Timetables
                                                </Link> */}
                                                <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning" to="#" id="underline-item-5" data-hs-tab="#underline-5" aria-controls="underline-5">
                                                    Subjects
                                                </Link>
                                            </nav>
                                        </div>

                                        <div className="mt-3">
                                            {/* <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">


                                            </div> */}
                                            <div id="underline-2" role="tabpanel" aria-labelledby="underline-item-2">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        {
                                                            classIndData.list.map((dt, index) => {
                                                                return <div className='classes-sec-wrap pb-4' key={index} id={dt.id} >
                                                                   
                                                                    <div className='classes-top-head flex justify-between'>
                                                                        <h4>{dt.className}</h4>
                                                                        <div className='classes-add-secbtn'>
                                                                            <button type="button" onClick={() => addSection()} className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave"> Add Section</button>
                                                                        </div>
                                                                    </div>

                                                                    <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                                                                        <div className="table-responsive">
                                                                            <table className="table whitespace-nowrap table-sm min-w-full">
                                                                                <thead><tr className="border-b border-defaultborder">
                                                                                    <th scope="col" className="text-start">#</th>
                                                                                    <th scope="col" className="text-start">Section</th>
                                                                                    {/* <th scope="col" className="text-start">Class Teacher</th> */}
                                                                                    <th scope="col" className="text-start">Description</th>
                                                                                    {/* <th scope="col" className="text-start">Status</th> */}
                                                                                    <th scope="col" className="text-start">Action</th>
                                                                                </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr className="border-b border-defaultborder" key={index} id={dt.id}>
                                                                                        <td>{index + 1}</td>
                                                                                        <td>{dt.className}</td>
                                                                                        <td>{dt.description}</td>
                                                                                        <td>
                                                                                            <div className="hstack flex gap-3 
text-[.9375rem]">
                                                                                                <div className="ti-dropdown hs-dropdown">
                                                                                                    <button type="button"
                                                                                                        className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none" aria-expanded="false">
                                                                                                        <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                                                                    </button>
                                                                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                                                                        <li onClick={() => updateForm()}><Link className="ti-dropdown-item" to="#">Edit</Link></li>
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
                                                            })


                                                        }
                                                        {/* End of the classes top sec wrap */}

                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">

                                                        {
                                                            addSec === true ? <CreateSection addSec={addSec} setAddSec={setAddSec} /> : <CreateClass updateClassChild={setUpdateClass} updateClass={updateClass} />
                                                        }


                                                        {/* <CreateSection/> */}
                                                    </div>
                                                </div>

                                            </div>
                                            <div id="underline-3" className="hidden" role="tabpanel" aria-labelledby="underline-item-3">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <RolesPermissionTable sendDataToParent={handleDataFromChild} />
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">

                                                        <CreateRole dataFromChild={dataFromChild} setDataFromChild={setDataFromChild} />
                                                        {/* <CreateSection/> */}
                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">
                                                <div className='box'>
                                                    <div className="box-body">
                                                        <h6>Select Criteria</h6>
                                                        <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 pt-4">
                                                            <Select className="!p-0 place-holder" classNamePrefix='react-select' options={singleselect} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='time-tables-wrap'>
                                                    <TimeTableTabs />
                                                </div>
                                            </div> */}
                                            <div id="underline-5" className="hidden" role="tabpanel" aria-labelledby="underline-item-5">
                                                <div className="grid grid-cols-12  gap-4">
                                                    <div className="col-span-12 xl:col-span-8">
                                                        <SubjectTable sendSubDataToParent={handleSubDataFromChild} />
                                                    </div>
                                                    <div className="col-span-12 xl:col-span-4">

                                                        <SubjectCreateForm dataFromChildSubject={dataFromChildSubject} setDataFromChildSubject={setDataFromChildSubject} />
                                                        {/* <CreateSection/> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </Fragment>
    );
}

export default SchoolsDetails;
