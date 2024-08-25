import btnimg from "./btnimg.jpg"


export default function Pricing(){
    return(
        <div id="pricing" className="text-container">
       <p className="R-heading1">Simple pricing options</p>
       <p className="P-heading2">Not every project is the same, that's why we offer more flexible options. It is possible to get started without booking a call.</p>
       
        <div className="cards">
        {/* -----------Card 1------------ */}
       <div  class="subscription-card">
  <div class="header">
    <h2 class="heading">Design Weekly</h2>
    <span class="type-badge">PERFECT START</span>
  </div>
  <div class="price-container">
    <span class="price">$1299</span>
    <span class="per-week">/ week</span>
  </div>
  <ul class="features-list">
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Senior designer
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Unlimited requests
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Async communication
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Updates every other day
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Framer development included
    </li>
  </ul>
  <div className="pbtn-container">
  <button class="btn-book ps-btn1">
  <img style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
    <span>Book a call</span></button>
  </div>
  <p class="or">-or-</p>
  <p class="p-text">Get started now</p>
</div>
 
 {/* ---------------Card 2--------------- */}
 <div  class="subscription-card">
  <div class="header">
    <h2 class="heading">Design Monthly</h2>
    <span class="type-badge">MOST POPULAR</span>
  </div>
  <div class="price-container">
    <span class="price">$3999</span>
    <span class="per-week">/ month</span>
  </div>
  <ul class="features-list">
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Senior designer
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Unlimited requests
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Async communication
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Updates every other day
    </li>
    <li class="feature-item">
    <i class="fa-solid fa-circle-check p-icon"></i>
    Framer development included
    </li>
  </ul>
  <div className="pbtn-container">
  <button class="btn-book ps-btn1">
  <img style={{ width: 32, height: 32, borderRadius: 50, marginRight: 10, }} src={btnimg} alt="jpg" />
    <span>Book a call</span></button>
  </div>
  <p class="or">-or-</p>
  <p class="p-text">Get started now</p>
</div>
</div>
</div>
    )
}