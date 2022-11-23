
package com.tony.BkInfraProjec;

/**
 *
 * @author lgarc
 */

import java.util.List;     
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
@CrossOrigin(origins="http://localhost:4200", maxAge=360)
@RestController
@RequestMapping({"/personas"})
public class Controlador {
    @Autowired
    PersonaService service;
    @GetMapping
    public List<Persona>listar(){
        return service.listar();
    }
    
}
