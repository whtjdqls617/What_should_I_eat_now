package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.Food;

import java.util.List;
import java.util.Optional;

public interface FoodRepository extends JpaRepository<Food, Long> {
//    Food save(Food member);
//    Optional<Food> findById(Long id);
    Optional<Food> findByName(String name);
//    List<Food> findAll();
}
