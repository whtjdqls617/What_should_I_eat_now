package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.domain.PickFood;
import seoul42.openproject.selectfood.dto.PickFoodDto;
import seoul42.openproject.selectfood.domain.Question;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.ListResult;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;
import seoul42.openproject.selectfood.service.RecommendService;

import java.util.ArrayList;
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
    }

    @ApiOperation(value = "추천음식 데이터 요청 처리", notes = "질문 답변 데이터 받고 이에 따른 음식추천결과 전송")
    @GetMapping("/")
    public ListResult<PickFood> pickFood(@RequestParam(value = "answer1") String answer1,
                                         @RequestParam(value = "answer2") String answer2,
                                         @RequestParam(value = "answer3") String answer3,
                                         @RequestParam(value = "question1") String questions1,
                                         @RequestParam(value = "question2") String questions2,
                                         @RequestParam(value = "question3") String questions3) {
        //TODO : 내장 장고 서버에 api 요청하여 데이터 받기 (일단 임시 스트링데이터 넣음)
        //TODO : 요청한 member.id 가져오기
        Optional<Member> member = memberService.findId(1L);
//         member null 일 때 예외처리
        Question questions = new Question(questions1, answer1, questions2, answer2, questions3, answer3);
        PickFoodDto foodDto = recommendService.getPickFood(1L, questions);
        List<PickFood> foods = foodDto.getPickFood();
        return commonResponseService.getListResult(foods);

        // 장고 서버 동작 안될 때 테스트용
//        List<PickFood> pickFood = new ArrayList<>();
//        pickFood.add(new PickFood("소곱창구이", "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s"));
//        pickFood.add(new PickFood("삼겹살", "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s"));
//        pickFood.add(new PickFood("국화빵", "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s"));
//        pickFood.add(new PickFood("붕어빵", "https://www.youtube.com/watch?v=TAVE8IHAnHc&t=58s"));
//        return commonResponseService.getListResult(pickFood);
    }
}
