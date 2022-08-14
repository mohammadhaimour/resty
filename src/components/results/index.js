import React from 'react';
import './result.css';
function Results(props) {
    return (
        <>
            <section>
                <div>Result</div>
                <pre>{props.method === 'GET' ? JSON.stringify(props.data, undefined, '\t')
                    : props.method === 'POST' ? props.body : props.method === "PUT" ? props.body : props.method === "DELETE" ? 'DEletet' : <p className='loader'  >please select a method and URL</p>
                }

                </pre>
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