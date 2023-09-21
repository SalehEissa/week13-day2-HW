const React = require("react");

class Index extends React.Component {
    render() {
        const { logs } = this.props;
        return (
            <div>
                <h1>Index Page</h1>
                <a href="/logs/new">Create a new log</a>
                <br />
                <br />
                <ul>
                    {logs.map((log, i) => (
                        <li key={log._id}>
                            <a href={`/logs/${log._id}`}>{log.title}</a>
                            <a href={`/logs/${log._id}/edit`}>Edit this entry</a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="DELETE" />
                            </form>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

module.exports = Index;
