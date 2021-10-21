package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.dto.MemberEditDto;
import seoul42.openproject.selectfood.dto.common.CommonResult;
import seoul42.openproject.selectfood.dto.common.SingleResult;
import seoul42.openproject.selectfood.service.CommonResponseService;
import seoul42.openproject.selectfood.service.MemberService;

import java.util.Optional;

@Api(tags = "member")
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/user")
public class MemberController {

    private final MemberService memberService;
    private final CommonResponseService commonResponseService;

    @ApiOperation(value = "회원 가입", notes = "사용자의 선호 음식 리스트 내역과 회원정보까지 저장")
    @PostMapping("/signup")
    public CommonResult signUpMember(@RequestBody Member member) {
        memberService.signUp(member);
        return commonResponseService.getSuccessResult();
    }

//    나중에 사용할 수도 있음
//    @GetMapping("/user/signup/check-nickname/{nickName}")
//    public String checkNickName(@RequestParam String nickName) {
//        Optional<Member> member = memberService.validateDuplicateNickName(nickName);
//        if (member.isPresent()) {
//            return "fail";
//        }
//        return "ok";
//    }

    // /signup/available-email  이 어울릴 듯?
    @ApiOperation(value = "중복 이메일 체크", notes = "회원 가입 중 이메일 중복 체크")
    @GetMapping("/signup/check-email")
    public CommonResult checkEmail(@RequestParam String email) {
        Optional<Member> member = memberService.validateDuplicateEmail(email);
        if (member.isPresent()) {
            return commonResponseService.getFailResult();
        }
        return commonResponseService.getSuccessResult();
    }

//    @ApiOperation(value = "회원 정보 수정", notes = "회원 정보 수정")
//    @PutMapping("/user/edit")
//    public String editUserInfo(@RequestBody Member member) {
//        memberService.
//        return "ok";
//    }

    // 유저 이메일만 받거나 토큰 받으면 될 것 같은데...
    // swagger 에서 테스트 안되니 불편하구만
    @ApiOperation(value = "좋아하는 음식 리스트 클라이언트로 보내기", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
    @GetMapping("/edit/food/like")
    public SingleResult<String> getLikeFood(@RequestParam String email) throws Exception {
        Optional<Member> memberForLike = memberService.findEmail(email);
//        return memberForLike.get().getLikeFoodList();
        return commonResponseService.getSingleResult(memberForLike.orElseThrow(Exception::new).getDislikeFoodList());
    }

    @ApiOperation(value = "좋아하는 음식 리스트 변경", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
    @PutMapping("/edit/food/like")
    public CommonResult editLikeFood(@RequestBody MemberEditDto memberEditDto) {
        Long memberId = memberService.updateLikeFood(memberEditDto);
        if (memberId > 0)
            return commonResponseService.getSuccessResult();
        return commonResponseService.getFailResult();
    }

    @ApiOperation(value = "싫어하는 음식 리스트 클라이언트로 보내기", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
    @GetMapping("/edit/food/dislike")
    public SingleResult<String> getDislikeFood(@RequestParam String email) throws Exception {
        Optional<Member> memberForDislike = memberService.findEmail(email);
//        return memberForDislike.get().getDislikeFoodList();
        return commonResponseService.getSingleResult(memberForDislike.orElseThrow(Exception::new).getDislikeFoodList());
    }

    @ApiOperation(value = "싫어하는 음식 리스트 변경", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
    @PutMapping("/edit/food/dislike")
    public CommonResult editDislikeFood(@RequestBody MemberEditDto memberEditDto) {
        Long memberId = memberService.updateDislikeFood(memberEditDto);
        if (memberId > 0)
            return commonResponseService.getSuccessResult();
        return commonResponseService.getFailResult();
    }

    @ApiOperation(value = "로그인", notes = "임시적인 로그인")
    @GetMapping("/signin")
    public String login(@RequestBody Member member) {
        Optional<Member> dbMember = memberService.findEmail(member.getEmail());
        if (dbMember.isPresent()) {
            if (member.getPassword().equals(dbMember.get().getPassword())) {
                return "ok";
            }
        }
        return "fail";
    }
}
