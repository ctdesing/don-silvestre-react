import MainButton from './MainButton'
import './SideButtonInput.css'

const SideButtonInput = () => {
  return (
    <div className="wrapper">
      <input type="text" className="input" />
      <MainButton className="btn" mode="outline" label="Subscribe"/>
    </div>
  )
}

export default SideButtonInput