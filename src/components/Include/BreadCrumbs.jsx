import React from 'react'

import { Link } from 'react-router-dom';

function BreadCrumbs({ breadcrumbs }) {
  return (
    <div className="breadcrumbs my-[12px]">
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && <span className="separator">&gt;</span>}
          {breadcrumb.link ? (
            <Link to={breadcrumb.link}>{breadcrumb.label}</Link>
          ) : (
            <span>{breadcrumb.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default BreadCrumbs;
