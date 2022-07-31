class Canciones{
    constructor(){
        this.numcanciones=0;
    }
    Obtenercanciones(c){
        this.numcanciones=this.numcanciones+c;
    }
    Regresarcanciones(){
        return this.numcanciones;
    }
    Quitarcanciones(){
        this.numcanciones=this.numcanciones-1;
    }
    Cambiarcacion(c){
        switch(c){
            case 1:
                return "SONGS/c1.mp3";
                break;
            case 2:
                return "SONGS/c2.mp3";
                break;
            case 3:
                return "SONGS/c3.mp3";
                break;
            case 4:
                return "SONGS/c4.mp3";
                break;
            case 5:
                return "SONGS/c5.mp3";
                break;
            case 6:
                return "SONGS/c6.mp3";
                break;
            case 7:
                return "SONGS/c7.mp3";
                break;
            case 8:
                return "SONGS/c8.mp3";
                break;
            case 9:
                return "SONGS/c9.mp3";
                break;
            case 10:
                return "SONGS/c10.mp3";
                break;
            case 11:
                return "SONGS/c11.mp3";
                break;
            case 12:
                return "SONGS/c12.mp3";
                break;
            case 13:
                return "SONGS/c13.mp3";
                break;
            case 14:
                return "SONGS/c14.mp3";
                break;
            case 15:
                return "SONGS/c15.mp3";
                break;
        }
    }
}