import React, {useState} from 'react'
// import ChevronDownIcon from '@mui/icons-material/ChevronDown'
import './ability.css'
import { data } from './data'

const Child = ({ extra, setAbilities, title }) => {
    const handleInput = (name, value) => {
        setAbilities(prevState => {
          return prevState.map(currState => {
            if (currState.title === title) {
              return {
                ...currState,
                extra: currState.extra.map(item =>
                  item.name === name ? { ...item, value: value } : item
                ),
              };
            }
    
            return currState;
          });
        });
      };

  return (
    <>
      {
        extra.map(({ name, value }) => (
            <div key={name} className="main">
                <div className="wrapper">
                    <p className="extra">{name}</p>
                    <p className="value">{value}</p>
                </div>
                <input
                    type="range"
                    name=""
                    id=""
                    value={value}
                    min="0"
                    max="100"
                    step="1"
                    onChange={e => handleInput(name, e.target.value)}
                    className="input"
                />
            </div>
        ))
      }
    </>
  );
};

const Ability = () => {
    const [abilities, setAbilities] = useState(data)

    return (
        <>
            {
                abilities.map(({title, extra}) => (
                        <div className='ability' key={title}>
                            <div className='titleWrapper'>
                                <p className='title'>{title}</p>
                                {/* <ChevronDownIcon  /> */}
                            </div>
                            <Child extra={extra} setAbilities={setAbilities} title={title} />
                        </div>
                    )
                )
            }
        </>
    )
}

export default Ability;