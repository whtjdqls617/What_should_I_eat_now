package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.LikeFood;

public interface LikeFoodRepository extends JpaRepository<LikeFood, Long> {

    void deleteByMemberIdAndFoodId(Long memberId, Long foodId);
}
