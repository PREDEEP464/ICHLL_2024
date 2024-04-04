import React from 'react';
import './Table.css';

const Table = () => {
  const scheduleData = [
    { event: 'Paper Submissions Open On', date: '20 September 2023' },
    { event: 'Last Date for Submission', date: '12 January 2024', status: 'Closed' },
    { event: 'Notification of Late Acceptance', date: '05 February 2024', status: 'Closed' },
    { event: 'Late Registration Deadline', date: '20 February 2024', status: 'Closed' },
    { event: 'Conference Dates', date: '14-15 March 2024' }
  ];

  return (
    <div className="row z-1 relative flex justify-center bg-blue-900 p-5 h-96 w-full items-center rounded-md">
      <div className='col-lg-6'>
        <h4 className=' bg-warning text-white text-center p-1 mb-0 heading font-bold'>Important Dates</h4>
        <table className='main mb-3 w-auto size-72'>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr className='tabl' key={index}>
                <td className='f-c text-white font-bold'>{item.event}</td>
                <td className='s-c text-yellow-400 font-bold'>{item.date}</td>
                <td className='t-c text-yellow-400 font-bold'>{item.status || 'Open'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='photos col-lg-6 mr-2 font-sans'>
        <div className='row gap-6 flex justify-center '>
          <div className='hover:cursor-pointer text-center w-auto p-5 bg-primary rounded-lg col-lg-2 col-md-4 col-sm-12'>
            <img className="bg-red-500 p-5 rounded-lg size-40 hover:scale-125" src="https://icaccs.sece.ac.in/images/all-icon/ctg-1.png" alt="" />
            <p className='font-bold text-white overflow-clip mt-3 pt-3'>Submission</p>
          </div>
          <div className='hover:cursor-pointer text-center w-auto p-5 bg-success rounded-lg col-lg-2 col-md-4 col-sm-12'>
            <img className="bg-blue-500 p-5 rounded-lg size-40 hover:scale-125  " src="https://icaccs.sece.ac.in/images/all-icon/ctg-2.png" alt="" />
            <p className='font-bold text-white text-clip mt-3 pt-3'>Review System</p>
          </div>
          <div className='hover:cursor-pointer text-center w-auto p-5 bg-danger rounded-lg col-lg-2 col-md-4 col-sm-12'>
            <img className="bg-green-700 p-5 rounded-lg size-40 hover:scale-125" src="https://icaccs.sece.ac.in/images/all-icon/ctg-3.png" alt="" />
            <p className='font-bold text-white overflow-clip mt-3 pt-3'>Camera Ready</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
