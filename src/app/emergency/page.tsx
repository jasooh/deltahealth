import React from 'react';

const EmergencyContactsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-8">
        <h1 className="text-center text-5xl font-bold text-primary mb-8">Emergency Contacts in Hamilton, Ontario</h1>

        {/* Emergency Services */}
        <div className="flex flex-col gap-8">
          {/* Hospitals */}
          <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 w-1/2 mx-auto">
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">Hospitals</h2>
            <ul className="space-y-4">
              <li>
                <strong>Hamilton General Hospital</strong>
                <p>Emergency Department: 905-521-2100 ext. 74900</p>
              </li>
              <li>
                <strong>St. Joseph's Healthcare Hamilton</strong>
                <p>Emergency Department, Charlton Campus: 905-522-1155 ext. 33500</p>
              </li>
              <li>
                <strong>Juravinski Hospital</strong>
                <p>Emergency Department: 905-522-1155 ext. 33500</p>
              </li>
            </ul>
          </div>

          {/* Paramedic Services */}
          <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 w-1/2 mx-auto">
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">Paramedic Services</h2>
            <ul className="space-y-4">
              <li>
                <strong>Hamilton Paramedic Service</strong>
                <p>Emergency Medical Services: 911</p>
                <p>Non-Emergency Inquiries: 905-546-2424</p>
              </li>
            </ul>
          </div>

          {/* First Responders */}
          <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 w-1/2 mx-auto">
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">First Responders</h2>
            <ul className="space-y-4">
              <li>
                <strong>Hamilton Police Service</strong>
                <p>Emergency: 911</p>
                <p>Non-Emergency: 905-546-4925</p>
              </li>
              <li>
                <strong>Hamilton Fire Department</strong>
                <p>Emergency: 911</p>
                <p>Non-Emergency: 905-546-2424</p>
              </li>
            </ul>
          </div>

          {/* Mental Health Services */}
          <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 w-1/2 mx-auto">
            <h2 className="text-2xl font-semibold text-primary text-center mb-4">Mental Health Services</h2>
            <ul className="space-y-4">
              <li>
                <strong>Mobile Crisis Rapid Response Team (MCRRT)</strong>
                <p>Available 7 days a week from 8:00 am to 4:00 am</p>
                <p>Contact: 905-972-8338</p>
                <p>Website: <a href="https://coasthamilton.ca/?page_id=85" className="text-link">COAST Hamilton</a></p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactsPage;