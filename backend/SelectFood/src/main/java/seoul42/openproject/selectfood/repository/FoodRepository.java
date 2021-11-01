package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.Food;

import java.util.Optional;

public interface FoodRepository extends JpaRepository<Food, Long> {

    Optional<Food> findByName(String name);
}
