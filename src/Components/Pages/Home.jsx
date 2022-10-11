import React from 'react';
import Products from "../Pages/Products"
function Home() {
  return (
    <div >
      <div style={{marginTop:"2%" ,width:"95%" ,margin:"auto"}}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/10062741/GettyImages_531205499.jpg"
       className="d-block w-100" alt="img1" height={"450px"}/>
    </div>
    <div className="carousel-item">
      <img src="https://i.pinimg.com/originals/65/76/9a/65769a5630e1b794a153636ffbcbb2a3.png"
       className="d-block w-100" alt="img2" height={"450px"}/>
    </div>
    <div className="carousel-item">
      <img src="https://1.bp.blogspot.com/-orRWTznwvsw/XnCX7kAFL-I/AAAAAAAAAXQ/3c5R64-QUKgBn5qwqYOlbt8h8koel7jygCLcBGAsYHQ/s1600/fashion1.png"
       className="d-block w-100" alt="img3" height={"450px"}/>
    </div>
    <div className="carousel-item">
      <img src="https://www.babtrendfashion.com/img/banner/3.png"
       className="d-block w-100" alt="img4" height={"450px"}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
 </div>
<div style={{margin:"2%"}}>
  <Products />
</div>

</div>

  );
}

export default Home;
