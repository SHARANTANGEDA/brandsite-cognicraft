// MyCalendlyBanner.js

import React from 'react';
import './MyCalendlyBanner.css'; // Import the CSS file for styles

export const MyCalendlyBanner = () => {
    return (
        <div className="calendly-banner-container">
            <div className="calendly-banner-content">
                <h2>Schedule a Meeting!</h2>
                <p>Want to discuss your projects or have queries? Book a time slot with us.</p>
                <a href="https://calendly.com/sai-sharan-t" target="_blank" rel="noopener noreferrer" className="calendly-link">
                    Click Here to Schedule
                </a>
            </div>
        </div>
    );
};
