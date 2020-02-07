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


// function getDate() {
//     let date = new Date();
//     let today = new Date(date.getTime() + date.getTimezoneOffset() * 100000);

//     console.log(today)
//     let dd = today.getDate();
//     let mm = today.getMonth() + 1;
//     let yyyy = today.getFullYear();
//     if (dd < 10 ) {
//         dd = `0` + dd;
//     }
//     if (mm < 10 ) {
//         mm = `0` + mm;
//     }
//     today = yyyy + `-` + mm + `-` + dd;
//     return today
// }

// let today = getDate();