import React from 'react'

export class ErrorHandler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError:false};
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true});
    }

    render() {
        const {hasError, children} = this.props;
        if (hasError) {
            return <div>Ой! Вы что-то нажали и все пропало!</div>
        }
        return children
    }
}