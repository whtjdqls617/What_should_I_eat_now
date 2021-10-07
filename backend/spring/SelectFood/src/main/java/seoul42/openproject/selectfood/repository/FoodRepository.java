package seoul42.openproject.selectfood.repository;

import seoul42.openproject.selectfood.domain.Food;

import java.util.List;
import java.util.Optional;

public interface FoodRepository {
    Food save(Food member);
    Optional<Food> findById(Long id);
    Optional<Food> findByName(String name);
    List<Food> findAll();
}
