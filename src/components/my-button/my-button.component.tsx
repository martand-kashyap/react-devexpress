import React, { FunctionComponent, Fragment } from 'react'

import Button from 'devextreme-react/button';

const MyButton: FunctionComponent<{buttonLabel: string}> = ({ buttonLabel }) => (
    <Fragment>
        <Button text = { buttonLabel } />
    </Fragment>
);

export default MyButton;