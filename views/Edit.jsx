const React = require('react');

class Edit extends React.Component {
    render() {
        const { log } = this.props;
        return (
            <form action={`/logs/${log._id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={log.title} /> <br />
                Entry: <textarea name="entry" defaultValue={log.entry}></textarea> <br /> {/* Use textarea here */}
                Is ship broken? <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} /> <br />
                <input type='submit' value='Submit Changes' />
            </form>
        );
    }
}

module.exports = Edit;
