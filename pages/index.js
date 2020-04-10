import React from 'react'
import AdminHoc from '../components/layouts/admin.hoc';

const Home = () => (
  <div>
    <AdminHoc>
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Title</h3>
          <div className="card-tools">
            <button type="button" className="btn btn-tool" data-card-widget="collapse" data-toggle="tooltip" title="Collapse">
              <i className="fas fa-minus" /></button>
            <button type="button" className="btn btn-tool" data-card-widget="remove" data-toggle="tooltip" title="Remove">
              <i className="fas fa-times" /></button>
          </div>
        </div>
        <div className="card-body">
          Start creating your amazing application!
  </div>
        {/* /.card-body */}
        <div className="card-footer">
          Footer
  </div>
        {/* /.card-footer*/}
      </div>

    </AdminHoc>
  </div>
)

export default Home
