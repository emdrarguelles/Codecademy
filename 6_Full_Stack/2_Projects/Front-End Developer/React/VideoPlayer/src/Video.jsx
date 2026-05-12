function Video({src}) {
    return (
      <div>
        <video src={src} controls autoPlay muted/>
      </div>
    );
};
export default Video;