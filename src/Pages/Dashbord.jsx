import React from 'react'
import StatisticCard from './components/StatisticCard'
import { FaUsers } from 'react-icons/fa6'
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa'


function Dashbord() {
  return (
      <div className="mt-2">
          <h3>Tableau de bord</h3>
          <div className="row">
              <StatisticCard title={"Utilisateurs"} description={2000} icon={<FaUsers size={30} />} />
              <StatisticCard title={"Articles"} description={2000} icon={<FaShoppingCart size={30} />} />
              <StatisticCard title={"Commandes"} description={2000} icon={<FaShoppingBag size={30} />} />
              <StatisticCard title={"Clients"} description={2000} icon={<FaUsers size={30}/>}/>
          </div>
      </div>
  )
}

export default Dashbord