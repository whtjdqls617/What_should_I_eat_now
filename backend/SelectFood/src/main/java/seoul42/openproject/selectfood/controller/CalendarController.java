package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.dto.calendar.CalendarEditDto;
import seoul42.openproject.selectfood.dto.calendar.CalendarMonthDto;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;

@Api(tags = "Calendar")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/calendar")
public class CalendarController {

    private final MemberService memberService;
    private final CommonResponseService commonResponseService;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping(value = "/food")
    public CommonResult getFoodInCalendar() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        CalendarMonthDto calendarMonthDto = new CalendarMonthDto();
        calendarMonthDto.setMonthFoodData(memberService.getSelectedFoods(email));
        return commonResponseService.getSingleResult(calendarMonthDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @PutMapping(value = "/food")
    public CommonResult updateFoodInCalendar(@RequestBody CalendarEditDto calendarEditDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        memberService.saveSelectedFoods(email, calendarEditDto.getSelectedFood().getAddFoodList(),
                calendarEditDto.getDate());
        memberService.deleteSelectedFood(email, calendarEditDto.getSelectedFood().getDeleteFoodList(),
                calendarEditDto.getDate());
        return commonResponseService.getSuccessResult();
    }
}
