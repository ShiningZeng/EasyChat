var React = require('react');
var ReactDOM = require("react-dom");
var List = require("./list.js");
var Layout = React.createClass ({
    render:function(){
        return (
            <div>
                this is Layout
                <List/>
            </div>
        )
    }
})

ReactDOM.render(<Layout/>,document.body);