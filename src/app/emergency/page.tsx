"use client"

import React from 'react';

import { motion } from 'motion/react'

const spring_transition = {
  type: "spring",
  stiffness: 200, // Controls how tight the spring is
  damping: 30,    // Controls the resistance of the spring
  bounce: 0.5,    // Controls the amount of bounce (0 to 2 is common)
  duration: 0.6,  // Optional, spring usually ignores this unless combined
}

const EmergencyContactsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto md:p-8">
        <h1 className="w-full text-center text-2xl md:text-5xl font-bold text-primary mb-8">Emergency Contacts in
          Hamilton, Ontario</h1>
        <p className="text-center pb-5">Find your help here.</p>
        <motion.div initial={{y: "100%", opacity: 0, filter: "blur(10px)"}} animate={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)"
        }} transition={spring_transition}>
          {/* Emergency Services */}
          <div className="flex flex-col justify-center gap-8">
            {/* Hospitals */}
            <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 md:w-1/2 mx-auto">
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
            <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 md:w-1/2 mx-auto">
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
            <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 md:w-1/2 mx-auto">
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
            <div className="bg-card text-text p-6 rounded-lg shadow-lg border-2 border-gray-500 md:w-1/2 mx-auto">
              <h2 className="text-2xl font-semibold text-primary text-center mb-4">Mental Health Services</h2>
              <ul className="space-y-4">
                <li>
                  <strong>Mobile Crisis Rapid Response Team (MCRRT)</strong>
                  <p>Available 7 days a week from 8:00 am to 4:00 am</p>
                  <p>Contact: 905-972-8338</p>
                  <p>Website: <a href="https://coasthamilton.ca/?page_id=85" className="text-link">COAST Hamilton</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmergencyContactsPage;