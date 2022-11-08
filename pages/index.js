import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

function HomePage() {
    const titulo = {
        //backgroundColor: "red"
    };

  
    return (
        <> 
            <CSSReset />
            <div style={titulo} >
                <Menu />
                <Header />
                <Timeline playlists={config.playlists} />
            </div>
        </>
    )
    
  }
  
  export default HomePage

 // function Menu(){
   // return(
     //   <div> 
       //     Menu
        //</div>
    //)
  //}

  const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
        margin-top: 50px;
    }
  `;

    const StyledBanner = styled.div`
    background: url(${config.banner}) center;
    background-size: cover;
    min-height: 230px;
    height: 25vw;
    `;

  function Header(){
    return(
        <StyledHeader> 
            <StyledBanner />
            {/*<img src="banner" />*/}

            <section className="user-info"> 
            <img src={`https://github.com/${config.github}.png`} />
            <div>
                <h2> {config.name}</h2>
                <p> {config.job} </p>
            </div>
           
            </section>
        </StyledHeader>
    )
  }

  function Timeline(propriedades){
    /*console.log("Dentro do componente", propriedades.playlists);*/
    const playlistNames = Object.keys(propriedades.playlists);
    return(
        <StyledTimeline> 
            {playlistNames.map(function(playlistName){
                const videos = propriedades.playlists[playlistName];
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                        {videos.map((video) => {
                            return(
                                <a href={video.url}>
                                    <img src= {video.thumb}></img>
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            )
                        })}
                        </div>
                    </section>

                )
            })}
        </StyledTimeline>
    )
  }