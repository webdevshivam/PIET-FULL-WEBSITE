import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from './ui/breadcrumb';

const Alumni = () => {
  return (
    <div>
      <Header />

      {/* ✅ Breadcrumb */}
      <div className="px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Alumni</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Page Content */}
      <div className="p-4">
        <h1 className="text-xl font-semibold">Welcome to Alumni Page</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Alumni;
