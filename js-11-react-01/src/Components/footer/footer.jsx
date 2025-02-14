


export const Footer = ({ yaer, cohorte: ch }) => {

    const coloresVivos = {
        color: "green",
        backgroundColor: "yellow",
        fontSize: "30px",
        fontFamily: "Arial",
      };
    const coloresNeutros = {
        color: "balck",
        backgroundColor: "white",
        fontSize: "18px",
        fontFamily: "Times New Roman",
      };





    //        { year, cohorte }
    return (
        <div>
            <p className="textFooter">Footer de mi aplicación</p>
            <p style= {{ color:"yellow", fontFamily: "Arial"}} >Año {yaer}, Cohorte {ch}</p>
            <p style = { inLove ? coloresVivos : coloresNeutros  }  >Feliz 14 de febrero, también el 15, 16 y todos días</p>
        </div>
    );
}; 
return footerJsx; 