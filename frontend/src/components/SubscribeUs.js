import React from 'react';

export default class SubscribeUs extends React.Component{
    render() {
        return(
            <body>
            <h2>Subscribe to our newsletters</h2>
            <form>
                Your Name:<br>
                <input type="text" name="subscriberName"/>
                </br>
                Email Address:<br>
                <input type="text" name="subscriberEmail"/>
                </br>
                <input type="submit" value="Submit"/>
            </form>
            </body>
        );
    }
}