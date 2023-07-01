import React from 'react'
import StatisticCard from './components/StatisticCard'
import { FaUsers } from 'react-icons/fa6'
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
    BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar} from "react-chartjs-2";

ChartJS.register( CategoryScale,
  LinearScale,
  BarElement,
  Title,
    Tooltip,
  PointElement,
  Legend);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
function Dashbord() {
    const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [5000,6000,7000,84000,65481,4878],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data:  [4500,6000,9000,4000,65481,4878],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
    };
    const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};
  return (
      <div className="mt-2">
          <h3>Tableau de bord</h3>
          <div className="row">
              <StatisticCard title={"Utilisateurs"} description={2000} icon={<FaUsers size={30} />} />
              <StatisticCard title={"Articles"} description={2000} icon={<FaShoppingCart size={30} />} />
              <StatisticCard title={"Commandes"} description={2000} icon={<FaShoppingBag size={30} />} />
              <StatisticCard title={"Clients"} description={2000} icon={<FaUsers size={30}/>}/>
          </div>
          <div className='row'>
              <div className='col-sm-12 col-xl-5'>
                   <Bar data={data} options={options}/>
            </div>
          </div>
      </div>
  )
}

export default Dashbord