import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TrackPage = () => {
  useEffect(() => {
    // Load 17track script
    const script = document.createElement('script');
    script.src = '//www.17track.net/externalcall.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize tracking widget when script loads
    script.onload = () => {
      const YQV5 = window.YQV5;
      if (YQV5) {
        YQV5.init({
          container: 'tracking-container',
          height: '600px'
        });
      }
    };

    return () => {
      // Cleanup script on component unmount
      const scripts = document.getElementsByTagName('script');
      for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.includes('17track')) {
          scripts[i].remove();
          break;
        }
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Track Your Order</h1>
            <p className="text-gray-600 mb-8">
              Enter your tracking number below to track your package in real-time.
            </p>
            <div id="tracking-container"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackPage;