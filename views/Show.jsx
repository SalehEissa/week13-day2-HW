const React = require('react');

class Show extends React.Component {
    render() {
        const log = this.props.logs[0];

        return (
            <div>
                <h1>Show Page</h1>
                <h2>Title: {log.title}</h2>
                <h2>Entry: {log.entry}</h2>
                <h2>Ship is broken: {log.shipIsBroken.toString()}</h2>
                <a href="/logs">Go back to main</a>
            </div>
        );
    }
}

module.exports = Show;
