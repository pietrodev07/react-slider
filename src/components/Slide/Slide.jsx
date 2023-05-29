import starsCreator from '../../utils/starsCreator'
import './Slide.css'

const Slide = ({ author, review, mark, slideClass }) => {

  return (

    <div className={`slide ${slideClass}`}>

      <h2 className="author">{author}</h2>

      <p className="review">{review}</p>

      <div className="mark-container">{starsCreator(mark)}</div>

    </div>

  )

}

export default Slide