package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.dto.recommend.PickFoodDto;
import seoul42.openproject.selectfood.dto.Question;

@RequiredArgsConstructor
@Service
@Transactional(readOnly = true)
public class RecommendService {

    private final RecommendApiClient recommendApiClient;

    @Transactional
    public PickFoodDto getPickFood(Long id, Question question) {
        return recommendApiClient.requestPickFood(id, question);
    }
}
