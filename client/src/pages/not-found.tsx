
import React from 'react';
import { Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <AccessibilityFeatures />
      <Header />
      
      {/* 404 Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Large 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-primary/20 leading-none">
              404
            </h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              The page you're looking for doesn't exist or has been moved. 
              Don't worry, it happens to the best of us!
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/">
              <a className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group">
                <i className="fas fa-home mr-2 group-hover:animate-bounce"></i>
                Go Back Home
              </a>
            </Link>
            <Link href="/contact">
              <a className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-300 group">
                <i className="fas fa-envelope mr-2 group-hover:animate-pulse"></i>
                Contact Support
              </a>
            </Link>
          </div>
          
          {/* Helpful Links */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Maybe you were looking for:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/about">
                <a className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <i className="fas fa-university text-primary mr-3 group-hover:scale-110 transition-transform"></i>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">About PIET</div>
                    <div className="text-sm text-gray-600">Learn about us</div>
                  </div>
                </a>
              </Link>
              
              <Link href="/academics">
                <a className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <i className="fas fa-book-open text-primary mr-3 group-hover:scale-110 transition-transform"></i>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Academics</div>
                    <div className="text-sm text-gray-600">Our programs</div>
                  </div>
                </a>
              </Link>
              
              <Link href="/admissions">
                <a className="flex items-center p-4 rounded-lg border border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group">
                  <i className="fas fa-user-graduate text-primary mr-3 group-hover:scale-110 transition-transform"></i>
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">Admissions</div>
                    <div className="text-sm text-gray-600">Join us</div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          
          {/* Fun Illustration */}
          <div className="mt-12 opacity-50">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"></div>
              <div className="relative text-6xl">
                🔍🏫📚
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
