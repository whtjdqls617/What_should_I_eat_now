package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.repository.SelectedFoodRepository;

import java.time.LocalDate;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class CalendarService {

    private final SelectedFoodRepository foodRepository;

    @Transactional
    void deleteSelectedFood(Long memberId, Long foodId, LocalDate date) {
        foodRepository.deleteByMemberIdAndFoodIdAndSelectDate(memberId, foodId, date);
    }
}
