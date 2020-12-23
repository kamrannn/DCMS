import React, { Component } from 'react'

import axios from 'axios'

import { Bar, Pie, polarArea } from 'react-chartjs-2'

export default class MembersTasksReport extends Component {

    constructor (props) {

        super(props)

        this.state = {

        committeeName: [],

        Total_Meetings_Made: [],

        }

    }

    async componentDidMount() {

        try {
            var res = await axios({
                method: 'get',
                url: `http://localhost:3306/viewCommitteeMeetingsReportAdmin`,
                params: {
                }
            })
            var result = res.data;
            if (result.success) {
                this.setState({committeeName: result.committeeName, Total_Meetings_Made:result.Total_Meetings_Made})
            }
            else if (result && result.success === false) {
                alert(result.err);
            }
            console.log(this.state.committeeName, this.state.Total_Meetings_Made)
        }
        catch (e) {
            console.log(e);
        }
    }

render() { 
 
  return (  
      <div>
          <div  id="page-wrapper" >
              <div className="row">
              <hr></hr><h1 style={{marginLeft:"150px" }}>Committee Members Tasks Report</h1><hr>
              </hr>
              <div>
<Bar
  data={{
    labels: ['Kamran', 'Musab', 'Rohan', 'Yasir Faheem', 'Ihtasham Nazir', 'Aswad Abbas'],
    datasets: [
      {
        label: 'Total Tasks',
        data: [12, 19, 13, 15, 12, 13],
        backgroundColor: 
          'rgba(255, 99, 132, 0.2)'
          // 'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          // 'rgba(75, 192, 192, 0.2)',
          // 'rgba(153, 102, 255, 0.2)',
          // 'rgba(255, 159, 64, 0.2)',
        ,
        borderColor: 
          'rgba(255, 99, 132, 1)'
          // 'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          // 'rgba(75, 192, 192, 1)',
          // 'rgba(153, 102, 255, 1)',
          // 'rgba(255, 159, 64, 1)',
        ,
        borderWidth: 1,
      },
      {
        label: 'Tasks Approved',
        data: [4, 5, 1, 2, 1, 1],
        backgroundColor: 'orange',
        borderColor: 'red',
      },
      {
        label: 'Tasks Rejected',
        data: [1, 2, 2, 3, 7, 6],
        backgroundColor: 'Green',
        borderColor: 'red',
      },
    ],
    
  }}
  height={400}
  width={600}
  options={{
  maintainAspectRatio: false,
  scales: {
      yAxes: [
      {
          ticks: {
          beginAtZero: true,
          },
      },
      ],
  },
  legend: {
      labels: {
      fontSize: 25,
      },
  },
  }}
/>
</div>
              </div>
          </div>
          <br/><br/><br/><br/><br/>
      </div>
  );
}
}

