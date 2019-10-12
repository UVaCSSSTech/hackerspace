import React from 'react';

export default class SubscribeUs extends React.Component{
    render() {
        return(
            <body>
            <form>
                <fieldset>
                    <legend>Subscribe to our newsletters</legend>
                    <p>
                    <label>Your Name</label>
                    <input type = "text"
                           name = "subscriberName" />
                    </p>
                    <p>
                    <label>Email Address</label>
                    <input type = "text"
                           name = "subscriberEmail" />
                    </p>
                </fieldset>
            </form>
            </body>
        );
    }
}