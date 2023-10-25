import Image from "next/image";

const PokeBannerImg = ({ pokeImg, pokeColor }) => {
  // console.log(pokeImg);
  return (
    <div className="pod-image" style={{
      position: "relative",
    }}>
      {
        pokeImg && (
          <Image src={ pokeImg } width={ 300 } height={ 300 } alt="banner image"  style={{
            position: "relative",
            zIndex: "2"
          }}/>
        )
      }
      <div className="circle" style={
        {
          background: `${pokeColor}`,
          opacity: 0.5,
          borderRadius: "50%",
          width: "300",
          height: "300",
          position: 'absolute',
          top: "150px",
          left: "0px",
          marginLeft: "auto",
          marginRight: "auto",
          width: "250px",
          height: "250px",
          zIndex: "1"
        }
      }></div>
    </div>
  );
}

export default PokeBannerImg;