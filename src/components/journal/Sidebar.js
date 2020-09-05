import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar bg-primary">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-3 text-white">
                    <i className="far fa-moon"/>
                    <span> HOLA</span>
                </h3>

                <button className="btn">
                    Logout
                </button>
            </div>  
            <div className="journal__new-entry text-white">
                <i className="far fa-calendar-plus fa-5x"/>
                <p className="mt-2">New entry</p>
            </div>

            <JournalEntries/>
        </aside>
    )
}
