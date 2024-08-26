const Ramo = ({ramo_}) => {

    const diff = new Date(ramo_.testDate) - new Date();

    // convertir la diferencia en días, horas, minutos y segundos
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return(
            <div className={new Date(ramo_.testDate) - new Date() <= 6.048e+8 ? 'ramo_rojo': 'ramo_'}>

                <div className="parte_izq">
                    <div> [{ramo_.subjectId}] </div>
                    <div> {ramo_.subjectName} </div>
                </div>

                <div className="parte_der">
                    {days} días - {hours <= 9 ? '0'+String(hours) : hours}:{minutes <= 9 ? '0'+String(minutes) : minutes}:{seconds <= 9 ? '0'+String(seconds) : seconds}
                </div>

            </div>
        );
};

export default Ramo;