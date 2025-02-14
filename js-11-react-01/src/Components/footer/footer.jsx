


export const Footer = ({ yaer, cohorte: ch , inLove, frase}) => {


    const coloresVivos = {
        color: "green",
        backgroundColor: "yellow",
        fontSize: "30px",
        fontFamily: "Arial",
      };
    const coloresNeutros = {
        color: "black",
        backgroundColor: "white",
        fontSize: "18px",
        fontFamily: "Times New Roman",
      };

    const colorAmor = {
        color: "red",
        backgroundColor: "white",
        fontSize: "18px",
        fontFamily: "Impact",
    }





    //        { year, cohorte }
    return (
        <div>
            <p className="textFooter">Footer de mi aplicación</p>

            <p style= {{ color:"yellow", fontFamily: "Arial"}} >Año {yaer}, Cohorte {ch}</p>

            <p style = { inLove ? coloresVivos : coloresNeutros  }  >Feliz 14 de febrero, también el 15, 16 y todos días</p>
            
            <p style = { frase ? colorAmor : coloresVivos }> ¿Sabías que la dinamita necesita cacahuetes para su elaboracion...? Y tu eres un cacahuate...para mi corazon </p>


        </div>
    );
}; 
