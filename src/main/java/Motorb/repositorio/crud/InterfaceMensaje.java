/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Motorb.repositorio.crud;

import Motorb.modelo.Mensaje;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Helman
 */
public interface InterfaceMensaje extends CrudRepository<Mensaje,Integer>{
    
}
