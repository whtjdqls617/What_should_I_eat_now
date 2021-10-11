package seoul42.openproject.selectfood.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.domain.PickFoodDto;
import seoul42.openproject.selectfood.domain.Question;

@RequiredArgsConstructor
@Service
public class RecommendService {

    private final RecommendApiClient recommendApiClient;

    @Transactional(readOnly = true)
    public PickFoodDto getPickFood(Long id, Question question) {
        return recommendApiClient.requestPickFood(id, question);
    }
}
