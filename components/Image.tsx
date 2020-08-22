export const Image = ({ src }) => (
  <div
    className="image-container"
    style={{
      position: "relative",
      width: "960px",
      height: "500px",
      margin: "0 auto"
    }}
  >
    <img className="blur-image" src={require(`images/${src}?lqip`)} />
    <img src={require(`images/${src}`)} />
    <style jsx>{`
            .blur-image img {
              blur(25px);
              width: 960px;
              height: 500px;
            }
            img {
              position: absolute;
              width: 960px;
              height: 500px;
              top: 0;
              left: 0;
            }
        `}</style>
  </div>
);
