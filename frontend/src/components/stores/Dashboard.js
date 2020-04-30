import React, { Fragment } from 'react';
import Form from './Form';
import Stores from './Stores';

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Stores />
        </Fragment>
    )
}
