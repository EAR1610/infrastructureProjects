
package com.tony.BkInfraProjec;

import org.springframework.data.repository.Repository;
import java.util.List;
/**
 *
 * @author lgarc
 */
public interface PersonaRepositorio extends Repository<Persona, Integer>{
    List<Persona>findAll();
    Persona findOne(int id);
    Persona save(Persona p);
    void delete(Persona p);
}
