package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.advice.exception.CUserNotFoundException;
import seoul42.openproject.selectfood.domain.*;
import seoul42.openproject.selectfood.dto.common.ListResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
import seoul42.openproject.selectfood.dto.member.MemberEditDto;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;

@Api(tags = "member")
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/user")
public class MemberController {

    private final MemberService memberService;
    private final CommonResponseService commonResponseService;

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @GetMapping(value = "/info")
    public SingleResult<MemberEditDto> findUser() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        Member member = memberService.findEmail(email).orElseThrow(CUserNotFoundException::new);
        MemberEditDto memberEditDto = new MemberEditDto();
        memberEditDto.setEmail(member.getEmail());
        memberEditDto.setNickName(member.getNickName());
        return commonResponseService.getSingleResult(memberEditDto);
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "선택했던 음식 리스트 조회", notes = "달력 중 선택했던 음식 리스트 조회")
    @GetMapping("/info/food/selected")
    public ListResult<String> getSelectedFood() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return commonResponseService.getListResult(memberService.getSelectedFoods(email));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "좋아하는 음식 리스트 조회", notes = "회원 정보 수정 중 좋아하는 음식 리스트 조회")
    @GetMapping("/info/food/like")
    public ListResult<String> getLikeFood() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return commonResponseService.getListResult(memberService.getLikeFoods(email));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "싫어하는 음식 리스트 조회", notes = "회원 정보 수정 중 싫어하는 음식 리스트 조회")
    @GetMapping("/info/food/dislike")
    public ListResult<String> getDislikeFood() {
        String email = SecurityContextHolder.getContext().getAuthentication().getName();
        return commonResponseService.getListResult(memberService.getDisLikeFoods(email));
    }

//    @ApiOperation(value = "좋아하는 음식 리스트 변경", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
//    @PutMapping("/edit/food/like")
//    public CommonResult editLikeFood(@RequestBody MemberEditDto memberEditDto) {
//        Long memberId = memberService.updateLikeFood(memberEditDto);
//        if (memberId > 0)
//            return commonResponseService.getSuccessResult();
//        return commonResponseService.getFailResult();
//    }

//    @ApiOperation(value = "싫어하는 음식 리스트 변경", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
//    @PutMapping("/edit/food/dislike")
//    public CommonResult editDislikeFood(@RequestBody MemberEditDto memberEditDto) {
//        Long memberId = memberService.updateDislikeFood(memberEditDto);
//        if (memberId > 0)
//            return commonResponseService.getSuccessResult();
//        return commonResponseService.getFailResult();
//    }
}
