package seoul42.openproject.selectfood.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seoul42.openproject.selectfood.domain.Food;
import seoul42.openproject.selectfood.repository.FoodRepository;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

// service 에서는 비지니스 로직에 가까운 용어 선택
// 서비스는 주로 비지니스 로직 처리
@Service
@Transactional
public class FoodService {

    private final FoodRepository foodRepository;

    public FoodService(FoodRepository foodRepository) {
        this.foodRepository = foodRepository;
    }

    public AtomicLong join(Food food) {
        // cmd + opt + v 로 자동변수 선언 가능
        // ctrl + t  refactory 여러 기능 호출
        // optional 에서 orElseGet() 이 많이 쓰임(있으면 리턴 없으면 뒤에 메소드 실행)
        validateDuplicateMember(food);
        foodRepository.save(food);
        return food.getId();
    }

    private void validateDuplicateMember(Food food) {
        foodRepository.findByName(food.getName())
                // isPresent() 와 혼동 주의
                .ifPresent(m -> {
                    throw new IllegalStateException("이미 존재하는 음식입니다.");
                });
    }

    public List<Food> findMembers() {
        return foodRepository.findAll();
    }

    public Optional<Food> findOne(Long memberId) {
        return foodRepository.findById(memberId);
    }
}
