package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.SelectedFood;

public interface SelectedFoodRepository extends JpaRepository<SelectedFood, Long> {
}
