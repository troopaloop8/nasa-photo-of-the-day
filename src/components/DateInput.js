import React from "react";


const DateInput = props => (
    <form onSubmit={props.changeDate}>
        Enter a date (YYYY-MM-DD):
        <input />
        <input type="submit" />
    </form>
);

class App extends Component {
    state = {
        date: "",
        photo: ""
    };

    changeDate = e => {
        e.preventDefault();
        let dateFromInput = e.target[0].value;
        this.setState({ date: dateFromInput });
    };

    render() {
        return (
            <DateInput changeDate={this.changeDate} />
        )
    }

};


export default DateInput;