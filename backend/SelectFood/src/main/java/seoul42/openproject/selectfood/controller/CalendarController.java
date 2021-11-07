package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.dto.calendar.CalendarEditDto;
import seoul42.openproject.selectfood.dto.calendar.CalendarMonthDto;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.service.CalendarService;
import seoul42.openproject.selectfood.service.CommonResponseService;

@Api(tags = "Calendar")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
@RequestMapping(value = "/calendar")
public class CalendarController {

    private final CalendarService calendarService;
    private final CommonResponseService commonResponseService;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "달력 화면 중 먹었던 음식 리스트 조회",
            notes = "프론트엔드에서 필요한 한 달치 음식 리스트들을 조회, 보내는 날짜는 년월일(ex 2021-11-01)로 일은 1일로 고정")
    @GetMapping(value = "/food")
    public CommonResult getFoodInCalendar(@RequestParam(value = "month") String date) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        CalendarMonthDto calendarMonthDto = new CalendarMonthDto();
        calendarMonthDto.setMonthFoodData(calendarService.getSelectedFoodInMonth(email, date));
        return commonResponseService.getSingleResult(calendarMonthDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "달력 화면 중 먹었던 음식 리스트 변경", notes = "지정한 하루 동안 먹었던 음식 리스트 변경")
    @PutMapping(value = "/food")
    public CommonResult updateFoodInCalendar(@RequestBody CalendarEditDto calendarEditDto) {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        calendarService.saveSelectedFoods(email, calendarEditDto.getSelectedFood().getAddFoodList(),
                calendarEditDto.getDate());
        calendarService.deleteSelectedFood(email, calendarEditDto.getSelectedFood().getDeleteFoodList(),
                calendarEditDto.getDate());
        return commonResponseService.getSuccessResult();
    }
}
