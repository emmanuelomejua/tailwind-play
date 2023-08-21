import './image.css'
import avater from '../../constants/haaland.jpg'
import { useEffect, useState } from 'react'

const Image = ({ players, id }) => {
  const [player, setPlayer] = useState({
    first_name: "",
    last_name: "",
    Pacing: 0,
    Shooting: 0,
    Dribbling: 0,
    Passing: 0,
    Defending: 0,
    Physicality: 0,
  })

  useEffect(() => {
    
    if(players.data){
      const playerData = players?.data.find(player => player.id === id);
      if(playerData) setPlayer(playerData);
    }
    }, [players.data, id])

  return (
    <>
    <section className="image">
        
          <img src={avater} alt="" className="image_cont-img" />

    </section>
            <div className='name'>
              <p className='right1'>{player.first_name}  {player.last_name}</p>

              <div className='left1'>
               <span>50</span>
                <div ></div>
              </div>
            </div>

            <section className="box">
              <section className="box__cont">
                <div className='right'>
                  <p>{player.Pacing}</p>
                  <p>{player.Shooting}</p>
                  <p>{player.Dribbling}</p>
                </div>

                <div className='right'>
                <p>{player.Passing}</p>
                <p>{player.Defending}</p>
                <p>{player.Physicality}</p>
                </div>

              </section>

                <button className='btn'>Expand</button>
            </section>
    </>
  )
}

export default Image
