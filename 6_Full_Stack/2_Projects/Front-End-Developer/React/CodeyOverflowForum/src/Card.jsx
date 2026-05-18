import Header from './Header';
import Body from './Body';

function Card({commentObject}) {
  return (
    <>
      <Header 
      profileImg={commentObject.profileImg} 
      username={commentObject.username}
      />
      <Body comment={commentObject.comment}/>
    </>
  )
}

export default Card;