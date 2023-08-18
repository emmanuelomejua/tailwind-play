import './form.css'

const Form = () => {
  return (
    <main className='form'>
      <div className='progress'>
        <label htmlFor='id'>
          <p>34%</p>
        </label>
        <progress id='id' value={34} max={100}/>
      </div>
  
      <section className='form__input'>
        <div className='form__input-right'>
          <input type='file'/>
        </div>

        <div className='form__input-left'>
        <div className='form__cont'>
             <input type='text' placeholder=''/>
             <input type='text' placeholder=''/>

             <div>
              <input type='text' placeholder=''/>
              <input type='text' placeholder=''/>
             </div>

            </div>
        </div>
      </section>

    </main>
  )
}



export default Form

