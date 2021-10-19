package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import io.swagger.v3.oas.annotations.Parameter;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.domain.PickFood;
import seoul42.openproject.selectfood.dto.PickFoodDto;
import seoul42.openproject.selectfood.domain.Question;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;
import seoul42.openproject.selectfood.service.RecommendService;

import java.util.List;
import java.util.Optional;

@Api(tags = "Recommend")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/recommend-food")
public class RecommendController {

    private final RecommendService recommendService;
    private final MemberService memberService;
    private final CommonResponseService commonResponseService;

//    @Autowired
//    public RecommendController(RecommendService recommendService) {
//        this.recommendService = recommendService;
//    }

    @ApiOperation(value = "사용자 선택한 음식 저장", notes = "최종 선택 음식을 유저 먹은 음식 리스트에 저장")
    @PostMapping("/select")
    public CommonResult saveSelectedFood(@RequestParam String email, @RequestParam String foodName) throws Exception {
        Optional<Member> member = memberService.findEmail(email);
        if (member.isPresent())
        {
            member.orElseThrow(Exception::new).setPickedFoodList(
                    member.get().getPickedFoodList() + ", "
                    + foodName
            );
            return commonResponseService.getSuccessResult();
        }
        return commonResponseService.getFailResult();
        //저장 실패 시 return "fail";
    }

    // "/rest/pick-food"  get방식 뒤에 변수값 넣어서 전송
    //  http://localhost:8080/rest/pick-food?email=aa@aa.com&question1=%EB%8F%88%EA%B9%8C%EC%8A%A4%EB%8D%AE%EB%B0%A54&answer1=http://test.com/don&question2=%EB%8F%88%EA%B9%8C%EC%8A%A4%EB%8D%AE%EB%B0%A52&answer2=http://test.com/don&question3=aaaaaa&answer3
    //  한글 깨지는 듯
    // 받는 형식 : {"email":"aaa@gmail.com","name1":"음식이름1","imgurl1":"http://"}:
    @ApiOperation(value = "추천음식 데이터 요청 처리", notes = "질문 답변 데이터 받고 이에 따른 음식추천결과 전송")
    @GetMapping("/")
    public SingleResult<PickFoodDto> pickFood(@RequestParam(value = "answer1") String answer1,
                                              @RequestParam(value = "answer2") String answer2,
                                              @RequestParam(value = "answer3") String answer3,
                                              @RequestParam(value = "question1") String questions1,
                                              @RequestParam(value = "question2") String questions2,
                                              @RequestParam(value = "question3") String questions3) {
        //TODO : 내장 장고 서버에 api 요청하여 데이터 받기 (일단 임시 스트링데이터 넣음)
        //TODO : 요청한 member.id 가져오기
//        Optional<Member> member = memberService.findId(1L);
        // member null 일 때 예외처리
//        PickFoodDto foodDto = recommendService.getPickFood(1L, questions);
//        PickFood food = foodDto.getPickFood();
//        return food;경

        // 장고 서버 동작 안될 때 테스트용
        PickFood pickFood = new PickFood(
                    "소곱창구이",
                    "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s",
                    "삼겹살",
                    "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s",
                    "국화빵",
                    "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s",
                    "붕어빵",
                    "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s");
        PickFoodDto pickFoodDto = new PickFoodDto("aa@bb.com", pickFood);
        return commonResponseService.getSingleResult(pickFoodDto);
    }
}
