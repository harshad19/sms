import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

const HealthMedical = (props) => {
    console.log(props,"setStudMedical")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('https://66c9968d59f4350f064ce86d.mockapi.io/students', props.values)
        //     .then(res => {
        //         console.log(res)
        //         navigate(`${import.meta.env.BASE_URL}pages/student/studentDetails`)
        //     })
        //     .catch(err => console.log(err))
    }
    return (
        <div className='student-medical-wrapper'>
            <div className='student-medical-innerwrap'>
                <h4>Student Medical Details</h4>
                <div className='individual-med-row pt-4'>
                    <h6>A. Defects at Birth</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>

                <div className='individual-med-row pt-4'>
                    <h6>B. Deficiency</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>

                <div className='individual-med-row pt-4'>
                    <h6>C. Diseases</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>
                <div className='individual-med-row pt-4'>
                    <h6>D. Development Delays for  6-9 years only</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>
                <div className='individual-med-row pt-4'>
                    <h6>E. Adolescent Specific Questionnarie (10-18years)</h6>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                    <div className='medical-answer-row pt-2'>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>

                    </div>
                </div>


                <div className='student-create-btn'>
                    <div className='flex justify-end'>
                        <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"  onClick={handleSubmit} >Save</button>
                        <div className='backButton'>
                                <button onClick={()=>props.setStudMedical(false)} type="button" className="ti-btn ti-btn-info-full ml-15 !rounded-full ti-btn-wave">Reset</button>
                        </div>

                    </div>
                </div>
                {/* End of the button */}
            </div>
            {/* // End of the student medical innerwrapper */}
        </div>
        // End of the student medical wrapper
    )
}

export default HealthMedical