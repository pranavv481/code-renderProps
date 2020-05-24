import React, { Component } from 'react'

export class ClickHoverTwo extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <h2 onMouseOver={incrementCount}>Hover {count} Times</h2>
        )
    }
}

export default ClickHoverTwo
