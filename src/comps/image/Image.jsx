import './image.css'
import avater from '../../constants/haaland.jpg'

const Image = () => {
  return (
    <>
    <section className="image">
        
          <img src={avater} alt="" className="image_cont-img" />

    </section>
            <div className='name'>
              <p className='right1'>Nduka Ikechi</p>

              <div className='left1'>
               <span>50</span>
                <div ></div>
              </div>
            </div>

            <section className="box">
              <section className="box__cont">
                <div className='right'>
                  <p className="">40 PAC</p>
                  <p className="">40 PAC</p>
                  <p className="">40 PAC</p>
                </div>

                <div className='right'>
                  <p className="">40 PAC</p>
                  <p className="">40 PAC</p>
                  <p className="">40 PAC</p>
                </div>

              </section>

                <button className='btn'>Expand</button>
            </section>
    </>
  )
}

export default Image
