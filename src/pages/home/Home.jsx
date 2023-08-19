import Form from '../../comps/form/Form'
import Table from '../../comps/table/Table'
import Image from '../../comps/image/Image'
import Ability from '../../comps/ability/Ability'
import './home.css'

const Home = () => {
  return (
    <main className='home'>
     <Image/>
     <Form/>
     <Table/>
     <Ability />
    </main>
  )
}

export default Home
