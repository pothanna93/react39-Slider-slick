import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails

  return (
    <div className="planet-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-image" />
      <h1 className="planet-name">{name}</h1>
      <p className="description">{description}</p>
    </div>
  )
}
export default PlanetItem
