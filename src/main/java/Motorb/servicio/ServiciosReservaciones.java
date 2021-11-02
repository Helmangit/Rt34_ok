/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Motorb.servicio;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Motorb.repositorioo.RepositorioReservaciones;
import Motorb.modelo.Reservaciones;
import Motorb.reporte.ContadorClientes;
import Motorb.reporte.StatusReservas;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

/**
 * Class ServiciosReservaciones
 * Me permite construir los metodos para consumir los crud de la interface
 * entonces defino los metodos para consultar -> get, modificar -> update, 
 * adicionar -> save y borrar -> deleteReservation para la clase Reservaciones
 * @author Helman
 */
@Service
public class ServiciosReservaciones {
    
        
     @Autowired
    private RepositorioReservaciones metodosCrud;

     /**
     * metodo para consultar la lista de reservaciones
     * @return 
     */
     
    public List<Reservaciones> getAll(){
        return metodosCrud.getAll();
    }

    /**
     * Metodo para consultar una reservacion especifica
     * retorna el valor para una reservacion
     * @return 
     */
    public Optional<Reservaciones> getReservation(int reservationId) {
        return metodosCrud.getReservation(reservationId);
    }

    /**
     * metodo para  adicionar una reservacion
     * @return 
     */
    public Reservaciones save(Reservaciones reservation){
        if(reservation.getIdReservation()==null){
            return metodosCrud.save(reservation);
        }else{
            Optional<Reservaciones> e= metodosCrud.getReservation(reservation.getIdReservation());
            if(e.isEmpty()){
                return metodosCrud.save(reservation);
            }else{
                return reservation;
            }
        }
    }

    /**
     * metodo para modificar una reservacion
     * @param reservation
     * @return 
     */
    public Reservaciones update(Reservaciones reservation){
        if(reservation.getIdReservation()!=null){
            Optional<Reservaciones> e= metodosCrud.getReservation(reservation.getIdReservation());
            if(!e.isEmpty()){

                if(reservation.getStartDate()!=null){
                    e.get().setStartDate(reservation.getStartDate());
                }
                if(reservation.getDevolutionDate()!=null){
                    e.get().setDevolutionDate(reservation.getDevolutionDate());
                }
                if(reservation.getStatus()!=null){
                    e.get().setStatus(reservation.getStatus());
                }
                metodosCrud.save(e.get());
                return e.get();
            }else{
                return reservation;
            }
        }else{
            return reservation;
        }
    }
    
    /**
     * método para borrar una reservacion
     * @param reservationId
     * @return 
     */
    public boolean deleteReservation(int reservationId) {
        Boolean aBoolean = getReservation(reservationId).map(reservation -> {
            metodosCrud.delete(reservation);
            return true;
        }).orElse(false);
        return aBoolean;
    }

    public StatusReservas reporteStatusServicio (){
        List<Reservaciones>completed= metodosCrud.ReservacionStatusRepositorio("completed");
        List<Reservaciones>cancelled= metodosCrud.ReservacionStatusRepositorio("cancelled");
        
        return new StatusReservas(completed.size(), cancelled.size() );
    }
    
    public List<Reservaciones> reporteTiempoServicio (String datoA, String datoB){
        SimpleDateFormat parser = new SimpleDateFormat ("yyyy-MM-dd");
        
        Date datoUno = new Date();
        Date datoDos = new Date();
        
        try{
             datoUno = parser.parse(datoA);
             datoDos = parser.parse(datoB);
        }catch(ParseException evt){
            evt.printStackTrace();
        }if(datoUno.before(datoDos)){
            return metodosCrud.ReservacionTiempoRepositorio(datoUno, datoDos);
        }else{
            return new ArrayList<>();
        
        } 
    } 
     public List<ContadorClientes> reporteClientesServicio(){
            return metodosCrud.getClientesRepositorio();
        } 


}
