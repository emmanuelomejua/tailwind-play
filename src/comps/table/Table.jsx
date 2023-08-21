
import './table.css'

const Table = ({players}) => {




  return (
    <table>
      <thead>
        <tr className='thead'>
            <section className='thead__key'>
                <td>Players</td>
            </section>

            <section className='thead__key-child'>
                <td>Pac</td>
                <td>Sho</td>
                <td>Dri</td>
                <td>Pas</td>
                <td>Def</td>
                <td>Phy</td>
            </section>
        </tr>
      </thead>

      <tbody>

        
 
        {
            players?.data?.slice(0, 5).map((player) => (

      <tr className='tbody' key={players.data._id}>

            <section>
                <td id='t'>{player.first_name}  {player.last_name}</td>
            </section>

            <section className='thead__key-child1'>
                <td>{player.Pacing}</td>
                <td>{player.Shooting}</td>
                <td>{player.Dribbling}</td>
                <td>{player.Passing}</td>
                <td>{player.Defending}</td>
                <td>{player.Physicality}</td>
            </section>
        </tr>
            ))
        }



      </tbody>
    </table>
  )
}

export default Table
