import img1 from '../image.svg';

function Card(){ 
    return (
        <div class = "card">
        <div class = "desc">
          <h2>Strength bar</h2>
          <p>Introducing strenght bar to help you know your week subjects.</p>
        </div>
        <div class = "barsImages">
          <img src={img1}/>
          </div>
        <div class = "button">
          <button>Finish</button>
        </div>
      </div>
    )
}

export { Card }