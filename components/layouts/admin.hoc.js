import React, { Component } from 'react'
import AdminHeader from './admin.header'
import AdminSidebar from './admin.sidebar';
import AdminFooter from './admin.footer';
import AdminContent from './admin.content';

export class AdminHoc extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
                <AdminSidebar/>
                <AdminContent>
                    {this.props.children}
                </AdminContent>
                <AdminFooter/>
            </div>
        )
    }
}

export default AdminHoc
