package seoul42.openproject.selectfood.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.PickFood;
import seoul42.openproject.selectfood.domain.PickFoodDto;
import seoul42.openproject.selectfood.domain.Question;
import seoul42.openproject.selectfood.service.RecommendService;

@RestController
@CrossOrigin(origins = "*")
public class RecommendController {

    private final RecommendService recommendService;

    @Autowired
    public RecommendController(RecommendService recommendService) {
        this.recommendService = recommendService;
    }

    @PostMapping("/recommend-food/select")
    public String saveSelectedFood(@RequestBody PickFood pickFood) {

        return "ok";
        //저장 실패 시 return "fail";
    }

    // "/rest/pick-food"  get방식 뒤에 변수값 넣어서 전송
    //  http://localhost:8080/rest/pick-food?email=aa@aa.com&question1=%EB%8F%88%EA%B9%8C%EC%8A%A4%EB%8D%AE%EB%B0%A54&answer1=http://test.com/don&question2=%EB%8F%88%EA%B9%8C%EC%8A%A4%EB%8D%AE%EB%B0%A52&answer2=http://test.com/don&question3=aaaaaa&answer3
    //  한글 깨지는 듯
    // 받는 형식 : {"email":"aaa@gmail.com","name1":"음식이름1","imgurl1":"http://"}:

    @GetMapping("/recommend-food")
    public PickFood pickFood(@RequestBody Question questions) {
        //TODO : 내장 장고 서버에 api 요청하여 데이터 받기 (일단 임시 스트링데이터 넣음)
        //TODO : member.email 가져오기
        PickFoodDto foodDto = recommendService.getPickFood("aa@aa.com", questions);
        PickFood food = foodDto.getPickFood();
        System.out.println(food.getPickFoodName1());
        System.out.println(food.getImgUrl1());
        return food;
    }
}
