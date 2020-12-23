import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Bar, Pie, polarArea } from 'react-chartjs-2'


export default class ViewFaculty extends Component {
    render() { 
 
        return (  
            <div>
                <div  id="page-wrapper" >
                    <div className="row">
                    <hr></hr><h1 style={{marginLeft:"150px" }}>Members Meeting Report</h1><hr>
                    </hr>
                    <div>
      <Bar
        data={{
          labels: ['Kamran', 'Musab', 'Rohan', 'Yasir Faheem', 'Ihtasham Nazir', 'Aswad Abbas'],
          datasets: [
            {
              label: 'Meetings Joined by Members',
              data: [6, 9, 7, 5 , 11, 4],
              backgroundColor: 
                'orange'
                // 'rgba(54, 162, 235, 0.2)',
                // 'rgba(255, 206, 86, 0.2)',
                // 'rgba(75, 192, 192, 0.2)',
                // 'rgba(153, 102, 255, 0.2)',
                // 'rgba(255, 159, 64, 0.2)',
              ,
              borderColor: 
                'red'
                // 'rgba(54, 162, 235, 1)',
                // 'rgba(255, 206, 86, 1)',
                // 'rgba(75, 192, 192, 1)',
                // 'rgba(153, 102, 255, 1)',
                // 'rgba(255, 159, 64, 1)',
              ,
              borderWidth: 1,
            },
            // {
            //   label: 'Tasks Approved',
            //   data: [4, 5, 1, 2, 1, 1],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
            // {
            //   label: 'Tasks Rejected',
            //   data: [1, 2, 2, 3, 7, 6],
            //   backgroundColor: 'Green',
            //   borderColor: 'red',
            // },
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
