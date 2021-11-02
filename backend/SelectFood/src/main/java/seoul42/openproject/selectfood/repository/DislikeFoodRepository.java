package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.DislikeFood;

public interface DislikeFoodRepository extends JpaRepository<DislikeFood, Long> {
}
