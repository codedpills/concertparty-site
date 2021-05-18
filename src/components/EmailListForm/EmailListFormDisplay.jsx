import React from 'react';

import './emailListForm.scss'

import EmailListForm from './EmailListForm'

const EmailListFormDisplay = () => {
    return (
        <div className="email-list-form-display">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <EmailListForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EmailListFormDisplay;
