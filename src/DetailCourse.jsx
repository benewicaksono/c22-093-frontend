import axios from 'axios';
import React, { useEffect, useState } from 'react';

function DetailCourse() {
  const [data, setData] = useState([]);
  const [driveUrl, setDriveUrl] = useState('');
  useEffect(() => {
    // get key variabel from path in url
    const key = window.location.pathname.split('/')[2];
    axios.get(`https://c22-093-backend.vercel.app/api/material/${key}`)
      .then((res) => {
        setData(res.data.data);
        const getDriveUrl = res.data.data.driveUrl.match(/(?<=d\/).*(?=\/view)/g);
        setDriveUrl(getDriveUrl);
      });
  }, []);

  return (
    <div className="bg-primary px-6 py-12 min-h-screen">
      <h2 className="text-3xl text-slate-50">Detail Course</h2>
      <div className="flex gap-10 flex-col lg:flex-row">

        <div className="bg-secondary p-6 rounded-lg ">
          <table>
            <tbody>

              <tr>
                <td className="text-slate-50 text-xl pr-1">Name</td>
                <td className="text-slate-50">: </td>
                <td className="text-slate-50">{data.name}</td>
              </tr>
              <tr>
                <td className="text-slate-50 text-xl pr-1">Deskripsi</td>
                <td className="text-slate-50">: </td>
                <td className="text-slate-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="rounded-lg overflow-x-hidden mx-auto">
          {driveUrl && (
          <iframe className="h-[600px] w-[300px] md:w-[480px] mx-auto" title="PDF Materi" src={`https://drive.google.com/file/d/${driveUrl}/preview`} allow="autoplay" />
          )}
          {/* <iframe className="h-[600px] w-[480px] mx-auto" title="PDF Materi" src={`https://drive.google.com/file/d/${driveUrl}/preview`} allow="autoplay" /> */}
        </div>
      </div>

    </div>
  );
}

export default DetailCourse;
