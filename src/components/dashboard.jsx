import React from 'react'
//# i want to split the home page into ration of 0.7 and 0.3 for the left and right side respectively  
import "./dasboard.css"
import Search from "./Search"
const dashboard = () => {
  return (
    <div className="container">
      <div className="right-pane">
      <div className="logo"><img src="	https://reflowtech.in/assets/img/reflowlogo.png" alt="" width="170" height="50"/></div>
      <div className="middle">
        <div className='dashboard'>Dashboard</div>
        <div className='artists'>Artists</div>
        <div className='sales'>Sales</div>
      </div>
      <div className="bottom">
        <div className='settings'>Settings</div>
        <div className='logout'>Logout</div>
      </div>
      </div>
    <div className="left-pane">
      <div>
<input className="search" type="text" placeholder="Search" aria-label="Search"/></div>
    <div className='randomtext'>In the last 30 days</div>
    <div className="cards" >
    <div className="card" >
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    </div>
</div>
<div className="card2" >
  <div className="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    </div>
  </div>
</div>
<div className='data'><Search/></div>

  
  </div>
  </div>
  )
}

export default dashboard