import React from 'react'

const AdmissionStudentBasicDetails = () => {
  return (
    <div className="pt-4">
    <h6  className="pb-4">Student Basic Details </h6>
     <div className="admission-listing-table">
     <div className='p-5 border rounded-sm dark:border-white/10 border-gray-200'>
                           <div className="table-responsive">
                               <table className="table whitespace-nowrap table-sm min-w-full">
                                   <thead><tr className="border-b border-defaultborder">
                                       <th scope="col" className="text-start">#Reg No.</th>
                                       <th scope="col" className="text-start">Full Name</th>
                                       <th scope="col" className="text-start">DOB</th>
                                       <th scope="col" className="text-start">Father/Guardian Name</th>
                                       <th scope="col" className="text-start">Mother Name</th>
                                       <th scope="col" className="text-start">Address</th>
                                   </tr>
                                   </thead>
                                   <tbody>
                                       <tr className="border-b border-defaultborder">
                                           <td></td>
                                           <td></td>
                                           <td>2024-01-01</td>
                                           <td>John Doe Sr.</td>
                                           <td>Jane Doe</td>
                                           <td> 123, Main Street, City, State, Country</td>
                                       </tr>

                                   </tbody>
                               </table>
                           </div>
                       </div>
       </div>
   </div>
  )
}

export default AdmissionStudentBasicDetails
