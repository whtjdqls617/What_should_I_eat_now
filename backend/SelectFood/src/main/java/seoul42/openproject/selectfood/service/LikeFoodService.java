package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.repository.LikeFoodRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikeFoodService {

    private final LikeFoodRepository foodRepository;

    @Transactional
    void deleteLikeFood(Long memberId, Long foodId) {
        foodRepository.deleteByMemberIdAndFoodId(memberId, foodId);
    }
}
