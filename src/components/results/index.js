import React from 'react';
function Results(props) {
    return (
        <>
            <section>
                <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
            </section>
        </>
    );
}
export default Results;



// import React from 'react';

// class Results extends React.Component {
//     render() {
//         return (
//             <section>
//                 <h4>uuu</h4>
//                 <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//             </section>
//         );
//     }
// }

// export default Results;