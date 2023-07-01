import React from 'react'

function Tables({rows=[],columns=[]}) {
  return (
      <div className="table-responsive">
        <table className="table table-primary">
            <thead>
                <tr>
                      {rows.map((row, i) => (
                          <th scope="col" key={i}>{row }</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td scope="row">R1C1</td>
                    <td>R1C2</td>
                    <td>R1C3</td>
                </tr>
                
            </tbody>
        </table>
      </div>
      
  )
}

export default Tables