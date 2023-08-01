// 
import { useState } from 'react';
// need these to alter the data in our database
import { useMutation, useQuery } from '@apollo/client';

// 
import { ADD_TIMESTAMP } from '../../utils/mutations';
import { QUERY_TIMESTAMPS } from '../../utils/queries';

// this function handles the updating of the TimestampForm page
// it returns the entire sheet for the page the user is on
const TimestampForm = () => {
    const [paragraphState, setParagraphState] = useState({
        time: '',
    });

    // front-end logic to create a new Timestamp model
    const [addTimestamp, { error }] = useMutation(ADD_TIMESTAMP, {
        // on user input, refresh the page with relevant values from our database
        refetchQueries: [
            // these two lines of code need to match what is inside of our client-side queries.js
            QUERY_TIMESTAMPS,
            'getTimestamps'
        ]
    });

    // handles the button event listener via react-style
    const handleButtonClick = async () => {
        try {
            const timestamp = Date.now().toString();

            console.log(`${typeof timestamp} ${timestamp}`);
            // setting the paragraph state to the passed timestamp when the button was clicked
            setParagraphState({ time: timestamp });
            console.log(`STATE: ${paragraphState.time}`);

            // doing a POST route to create a timestamp via GraphQL
            const { data } = await addTimestamp({
                variables: {...paragraphState }
            });

            // resets paragraphState to its initialized values
            setParagraphState({
                time: ''
            });
        } catch (err){
            console.error(err);
        }
    };

    // what our page is going to look like using the data we portal in
    return (
        <>
            <h1>Testing</h1>
            
            <button className="btn" type="button" onClick={() => handleButtonClick()}>Add Timestamp</button>

            <p>Test Text</p>
        </>
        );
}

export default TimestampForm;