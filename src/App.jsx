import { useState, useEffect} from 'react'

const FlagForm = (props) => (
  <form onSubmit={props.flagInfo}>
    <h2>Varastetun lipun tiedot:</h2>
    <div>
      Varastavan joukkueen koko: <input 
        value={props.stealerSize}
        onChange={props.handleStealerChange}/><br/>
      Varastavan joukkueen eloonjäämisprosentti välillä 0-1: <input
        value={props.alivePercentage}
        onChange={props.handleAlivePercentage}/><br/>
      Lipun omistavan joukkueen koko: <input
        value={props.flagTeam}
        onChange={props.handleFlagTeam}/><br/>
    </div>
    <div>
      <button type='submit'>Laske</button>
    </div>

  </form>
)

const App = () => {
  const [flagValue, setFlagValue] = useState('')
  const [stealerSize, setStealerSize] = useState('')
  const [alivePercentage, setAlivePercentage] = useState('')
  const [flagTeam, setFlagTeam] = useState('')
  
  const flagInfo = (event) => {
    event.preventDefault()
    const value = ((1/Math.cbrt(Number(stealerSize))) * (0.5 * ((9*Number(flagTeam))/(Number(flagTeam)+20)))) * (0.85 + (0.15 * Number(alivePercentage)))
    setFlagValue(value)
  }

  const handleStealerChange = (event) => {
    setStealerSize(event.target.value)
  }

  const handleAlivePercentage = (event) => {
    setAlivePercentage(event.target.value)
  }

  const handleFlagTeam = (event) => {
    setFlagTeam(event.target.value)
  }

  return (
    <div>
    <FlagForm flagInfo={flagInfo} stealerSize={stealerSize} handleStealerChange={handleStealerChange} alivePercentage={alivePercentage}
      handleAlivePercentage={handleAlivePercentage} flagTeam={flagTeam} handleFlagTeam={handleFlagTeam}/>
    Lipun arvo: {flagValue}
  </div>
  )

}
export default App
