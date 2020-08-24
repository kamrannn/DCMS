import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class UploadScope extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <div id="page-wrapper" style={{}}>
                    <div className="row">
                        <div className="col-lg-12">
                            <h3>Import Scope Document</h3>
                            <p>Allowed formats: .xls and .xlsx(max file size = 4mb)</p>
                            <a href="/File/Get?mapPath=~%2FContent%2FSampleExcel&filename=SampleAlumni.xlsx">Download Sample Sheet</a>
                            <br />
                            <br />
                            <form action="/Student" encType="multipart/form-data" method="post">    <input type="file" name="file" className="btn btn-default" /><br />
                                <input type="submit" defaultValue="Submit" className="btn btn-primary" id="button" />
                            </form><br />
                            {/* <div>
                                <Link to="/Student">Back to List</Link>
                            </div> */}

                        </div>
                        {/* /.col-lg-12 */}
                    </div>
                    {/* /.row */}
                </div>
                <hr />
            </div>
        );
    }
}
 
export default UploadScope;