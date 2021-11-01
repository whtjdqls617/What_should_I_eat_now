package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.advice.exception.CUserNotFoundException;
import seoul42.openproject.selectfood.dto.PickFood;
import seoul42.openproject.selectfood.dto.PickFoodDto;
import seoul42.openproject.selectfood.dto.Question;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.ListResult;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;
import seoul42.openproject.selectfood.service.RecommendService;

import java.util.List;

@Api(tags = "Recommend")
@RestController
@AllArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping("/recommend-food")
public class RecommendController {

    private final RecommendService recommendService;
    private final MemberService memberService;
    private final CommonResponseService commonResponseService;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "사용자 선택한 음식 저장", notes = "최종 선택 음식을 유저 먹은 음식 리스트에 저장")
    @PostMapping("/select")
    public CommonResult saveSelectedFood(@RequestBody String foodName) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        memberService.saveSelectedFood(email, foodName);
        return commonResponseService.getSuccessResult();
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "추천음식 데이터 요청 처리", notes = "질문 답변 데이터 받고 이에 따른 음식추천결과 전송")
    @GetMapping("/")
    public ListResult<PickFood> pickFood(@RequestParam(value = "answer1") String answer1,
                                         @RequestParam(value = "answer2") String answer2,
                                         @RequestParam(value = "answer3") String answer3,
                                         @RequestParam(value = "question1") String questions1,
                                         @RequestParam(value = "question2") String questions2,
                                         @RequestParam(value = "question3") String questions3) {

        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Long id = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new).getId();
        Question questions = new Question(questions1, answer1, questions2, answer2, questions3, answer3);
        PickFoodDto foodDto = recommendService.getPickFood(id, questions);
        List<PickFood> foods = foodDto.getPickFood();
        return commonResponseService.getListResult(foods);
    }
}
