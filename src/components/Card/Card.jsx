import './Card.scss'

export default function Card({ image, title, description, bedroom, people, price, rating, superhost }) {
  return (
    <div className='Card'>
      {
        superhost === true ?
          <div className='Card-superhost'>
            <h2>Superhost</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.3072 7.21989C10.9493 5.61921 11.2704 4.81886 11.7919 4.70794C11.9291 4.67877 12.0708 4.67877 12.208 4.70794C12.7295 4.81886 13.0506 5.61921 13.6927 7.21989C14.0578 8.13017 14.2404 8.58531 14.582 8.89488C14.6778 8.98171 14.7818 9.05904 14.8926 9.12579C15.2874 9.36377 15.7803 9.40791 16.7661 9.4962C18.4348 9.64565 19.2692 9.72037 19.524 10.1961C19.5768 10.2946 19.6127 10.4013 19.6302 10.5117C19.7146 11.0447 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5428 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5274C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64608 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5274L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5428 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0447 4.36975 10.5117C4.38724 10.4013 4.42312 10.2946 4.47589 10.1961C4.73069 9.72037 5.56507 9.64565 7.23384 9.4962C8.21962 9.40791 8.71251 9.36377 9.10735 9.12579C9.2181 9.05904 9.32211 8.98171 9.41793 8.89488C9.75954 8.58531 9.94211 8.13017 10.3072 7.21989Z" fill="#F6C768" stroke="#F6C768" strokeWidth="2" />
            </svg>
          </div>
          : null
      }
      <img src={image} alt='img' />
      <div className='Card-text'>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className='Card-icons'>
        <div className='Card-icons-content-bedroom'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 14.0585C5 13.0494 5 12.5448 5.22166 12.1141C5.44333 11.6833 5.8539 11.3901 6.67505 10.8035L10.8375 7.83034C11.3989 7.42938 11.6795 7.2289 12 7.2289C12.3205 7.2289 12.6011 7.42938 13.1625 7.83034L17.325 10.8035C18.1461 11.3901 18.5567 11.6833 18.7783 12.1141C19 12.5448 19 13.0494 19 14.0585V19C19 19.9428 19 20.4142 18.7071 20.7071C18.4142 21 17.9428 21 17 21H7C6.05719 21 5.58579 21 5.29289 20.7071C5 20.4142 5 19.9428 5 19V14.0585Z" fill="#7E869E" fillOpacity="0.25" />
            <path d="M3 12.3866C3 12.6535 3 12.7869 3.0841 12.8281C3.16819 12.8692 3.27352 12.7873 3.48418 12.6234L10.7721 6.95502C11.362 6.49625 11.6569 6.26686 12 6.26686C12.3431 6.26686 12.638 6.49625 13.2279 6.95502L20.5158 12.6234C20.7265 12.7873 20.8318 12.8692 20.9159 12.8281C21 12.7869 21 12.6535 21 12.3866V11.9782C21 11.4978 21 11.2576 20.8983 11.0497C20.7966 10.8418 20.607 10.6944 20.2279 10.3995L13.2279 4.95502C12.638 4.49625 12.3431 4.26686 12 4.26686C11.6569 4.26686 11.362 4.49625 10.7721 4.95502L3.77212 10.3995C3.39295 10.6944 3.20337 10.8418 3.10168 11.0497C3 11.2576 3 11.4978 3 11.9782V12.3866Z" fill="#4A5567" />
            <path d="M12.5 15H11.5C10.3954 15 9.5 15.8954 9.5 17V20.85C9.5 20.9328 9.56716 21 9.65 21H14.35C14.4328 21 14.5 20.9328 14.5 20.85V17C14.5 15.8954 13.6046 15 12.5 15Z" fill="#4A5567" />
            <rect x="16" y="5" width="2" height="4" rx="0.5" fill="#4A5567" />
          </svg>
          <p>{bedroom} bedroom</p>
        </div>

        <div className='Card-icons-content-people'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" fill="#4A5567" />
            <path d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z" fill="#7E869E" fillOpacity="0.25" />
          </svg>

          <p>{people} guests</p>
        </div>

      </div>
      <hr className='Card-line'></hr>
      <div className='Card-container'>

        <div className='Card-container-contentpr'>
          <p className='Card-container-contentpr-price'>${price}</p>
          <p>/night</p>
        </div>
        <div className='Card-container-rating'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3072 7.21989C10.9493 5.61921 11.2704 4.81886 11.7919 4.70794C11.9291 4.67877 12.0708 4.67877 12.208 4.70794C12.7295 4.81886 13.0506 5.61921 13.6927 7.21989C14.0578 8.13017 14.2404 8.58531 14.582 8.89488C14.6778 8.98171 14.7818 9.05904 14.8926 9.12579C15.2874 9.36377 15.7803 9.40791 16.7661 9.4962C18.4348 9.64565 19.2692 9.72037 19.524 10.1961C19.5768 10.2946 19.6127 10.4013 19.6302 10.5117C19.7146 11.0447 19.1012 11.6028 17.8744 12.7189L17.5338 13.0289C16.9602 13.5507 16.6735 13.8116 16.5076 14.1372C16.4081 14.3325 16.3414 14.5428 16.3101 14.7598C16.258 15.1215 16.342 15.5 16.5099 16.257L16.5699 16.5274C16.8711 17.885 17.0217 18.5637 16.8337 18.8974C16.6649 19.1971 16.3538 19.3889 16.0102 19.4053C15.6277 19.4236 15.0887 18.9844 14.0107 18.106C13.3005 17.5273 12.9454 17.2379 12.5512 17.1249C12.191 17.0216 11.8089 17.0216 11.4487 17.1249C11.0545 17.2379 10.6994 17.5273 9.98917 18.106C8.91119 18.9844 8.37221 19.4236 7.98968 19.4053C7.64608 19.3889 7.33504 19.1971 7.16617 18.8974C6.97818 18.5637 7.12878 17.885 7.42997 16.5274L7.48998 16.257C7.65794 15.5 7.74191 15.1215 7.6898 14.7598C7.65854 14.5428 7.59182 14.3325 7.49232 14.1372C7.32645 13.8116 7.03968 13.5507 6.46613 13.0289L6.12546 12.7189C4.89867 11.6028 4.28527 11.0447 4.36975 10.5117C4.38724 10.4013 4.42312 10.2946 4.47589 10.1961C4.73069 9.72037 5.56507 9.64565 7.23384 9.4962C8.21962 9.40791 8.71251 9.36377 9.10735 9.12579C9.2181 9.05904 9.32211 8.98171 9.41793 8.89488C9.75954 8.58531 9.94211 8.13017 10.3072 7.21989Z" fill="#F6C768" stroke="#F6C768" strokeWidth="2" />
          </svg>

          <p>{rating}</p>
        </div>

      </div>
    </div>
  )
}
