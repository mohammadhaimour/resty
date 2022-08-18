
import React from 'react';
import './result.css';
function Results(props) {
    return (
        <>
            <section>
                <div>Result</div>
                <pre>{props.method === 'GET' ? JSON.stringify(props.data, undefined, '\t')
                    : props.method === 'POST' ? props.body : props.method === "PUT" ? props.body : props.method === "DELETE" ? 'Deleted' : <p className='loader'  >please select a method and URL</p>
                }

                </pre>
            </section>
        </>
    );
}
export default Results;


















