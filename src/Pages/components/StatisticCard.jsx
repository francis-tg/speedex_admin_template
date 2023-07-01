import React from 'react'

function StatisticCard({title,description,icon}) {
  return (
      <div className='col-sm-12 col-xl-3 mb-3'>
          <div className='card p-3 statistic-card' >
              <div className='d-flex justify-content-between align-items-center'>
              <div>
                      <h6>{ title}</h6>
                      <h3>{description }</h3>
              </div>
                  <div className='icon-box'>
                      {icon}
                  </div>
                  </div>
          </div>
    </div>
  )
}

export default StatisticCard