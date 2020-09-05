import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry mb-2">
            <div
                className="journal__entry-picture rounded"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.blogs.es/5efe2c/cap_001/450_1000.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">titulo</p>
                <p className="journal__entry-content">lasdnasdnnasdnnopasndonopadnoadnopnopnoapsdnop asdnadnop asdonaondo asdoad</p>
            </div>

            <div className="journal__entry-date-box">
                <span>Moday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
