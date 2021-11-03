package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.repository.DislikeFoodRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DislikeFoodService {

    private final DislikeFoodRepository dislikeFoodRepositor;

    @Transactional
    void deleteDislikeFood(Long memberId, Long foodId) {
        dislikeFoodRepositor.deleteByMemberIdAndFoodId(memberId, foodId);
    }
}
