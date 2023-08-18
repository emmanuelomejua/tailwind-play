import './table.css'

const Table = () => {
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
                <td>Pas</td>
                <td>Def</td>
                <td>Phy</td>
            </section>
        </tr>
      </thead>

      <tbody>
      <tr className='tbody'>
            <section>
                <td>Player 1</td>
            </section>

            <section className='thead__key-child1'>
                <td>23</td>
                <td>75</td>
                <td>45</td>
                <td>30</td>
                <td>90</td>
            </section>
        </tr>
      <tr className='tbody'>
            <section>
                <td>Player 1</td>
            </section>

            <section className='thead__key-child1'>
                <td>23</td>
                <td>75</td>
                <td>45</td>
                <td>30</td>
                <td>90</td>
            </section>
        </tr>
      <tr className='tbody'>
            <section>
                <td>Player 1</td>
            </section>

            <section className='thead__key-child1'>
                <td>23</td>
                <td>75</td>
                <td>45</td>
                <td>30</td>
                <td>90</td>
            </section>
        </tr>
      <tr className='tbody'>
            <section>
                <td>Player 1</td>
            </section>

            <section className='thead__key-child1'>
                <td>23</td>
                <td>75</td>
                <td>45</td>
                <td>30</td>
                <td>90</td>
            </section>
        </tr>
      <tr className='tbody'>
            <section>
                <td>Player 1</td>
            </section>

            <section className='thead__key-child1'>
                <td>23</td>
                <td>75</td>
                <td>45</td>
                <td>30</td>
                <td>90</td>
            </section>
        </tr>

      </tbody>
    </table>
  )
}

export default Table
