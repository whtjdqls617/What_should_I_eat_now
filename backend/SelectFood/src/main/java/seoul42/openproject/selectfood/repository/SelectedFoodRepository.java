package seoul42.openproject.selectfood.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seoul42.openproject.selectfood.domain.SelectedFood;

import java.time.LocalDate;

public interface SelectedFoodRepository extends JpaRepository<SelectedFood, Long> {

    void deleteByMemberIdAndFoodIdAndSelectDate(Long memberId, Long foodId, LocalDate selectDate);
}
