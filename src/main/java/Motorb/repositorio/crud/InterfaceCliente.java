/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Motorb.repositorio.crud;

import Motorb.modelo.Cliente;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Helman
 */
public interface InterfaceCliente extends CrudRepository<Cliente,Integer>  {
    
}
