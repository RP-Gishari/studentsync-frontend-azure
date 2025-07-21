const Gallery = () => {
  return (
    <section>
      <div>
        <h4 className="gallery">Gallery</h4>
        <h2 className="title">The GYM college student lifestyle</h2>
        <br />
        <br />
        <div className="paragraph">
          <div className="the-ps">
            <p className="p1">All</p>
          </div>
          <div className="the-ps">
            <p className="p2">Foundations period </p>
          </div>
          <div className="the-ps">
            <p className="p3">Sports culture </p>
          </div>
          <div className="the-ps">
            <p className="p4">Project phase</p>
          </div>
        </div>
        <div className="images">
          <img src="src/assets/53999309113_53ea72a56b_c 1.png" />
          <img className="img2-gallery" src="src/assets/54303981390_21e07cebaa_b 1 (1).png" />
          <img className="img3-gallery" src="src/assets/53792662013_eaa5bce8ff_w 1.png" />
        </div>
        <div className="moreDiv">
          <div className="the-ps">
            <p className="more">More pictures </p>
          </div>
          <img className="icon" src="src/assets/chevron-down.png"/>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
