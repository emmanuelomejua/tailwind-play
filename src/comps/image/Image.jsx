import './image.css'
import Img from '../../constants/player.jpg'

const Image = () => {
  return (
    <section className="image">
        <section className="image_cont">
          <img src={Img} alt="" className="image_cont-img" />

            <div className="">
                
            </div>
        </section>

    </section>
  )
}

export default Image
