let Editor = require("./editor");

let Editors = React.createClass({
  render() {
    return (
      <div>
        <Editor lang="html" />
        <Editor lang="css" />
        <Editor lang="js" />
      </div>
		);
  }
});

module.exports = Editors;
