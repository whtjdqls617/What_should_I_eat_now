package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.dto.MemberEditDto;
import seoul42.openproject.selectfood.service.MemberService;

import java.util.Optional;

@Api(tags = "member")
@RestController
@AllArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @ApiOperation(value = "회원 가입", notes = "사용자의 선호 음식 리스트 내역과 회원정보까지 저장")
    @PostMapping("/user/signup")
    public String signUpMember(@RequestBody Member member) {

        memberService.signUp(member);
        return "ok";
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
    @ApiOperation(value = "중복 이메일 체크", notes = "회원 가입 중 이메일 중복 체크")
    @GetMapping("/user/signup/check-email")
    public String checkEmail(@RequestParam String email) {
        Optional<Member> member = memberService.validateDuplicateEmail(email);
        if (member.isPresent()) {
            return "fail";
        }
        return "ok";
    }

//    @ApiOperation(value = "회원 정보 수정", notes = "회원 정보 수정")
//    @PutMapping("/user/edit")
//    public String editUserInfo(@RequestBody Member member) {
//        memberService.
//        return "ok";
//    }

    @ApiOperation(value = "좋아하는 음식 리스트 클라이언트로 보내기", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
    @GetMapping("/user/edit/food/like")
    public String getLikeFood(@RequestBody Member member) {
        Optional<Member> memberForLike = memberService.findEmail(member.getEmail());
        return memberForLike.get().getLikeFoodList();
    }

    @ApiOperation(value = "좋아하는 음식 리스트 변경", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
    @PutMapping("/user/edit/food/like")
    public String editLikeFood(@RequestBody MemberEditDto memberEditDto) {
        Long memberId = memberService.updateLikeFood(memberEditDto);
        if (memberId > 0)
            return "ok";
        return "fail";
    }

    @ApiOperation(value = "싫어하는 음식 리스트 클라이언트로 보내기", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
    @GetMapping("/user/edit/food/dislike")
    public String getDislikeFood(@RequestBody Member member) {
        Optional<Member> memberForDislike = memberService.findEmail(member.getEmail());
        return memberForDislike.get().getDislikeFoodList();
    }

    @ApiOperation(value = "싫어하는 음식 리스트 변경", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
    @PutMapping("/user/edit/food/dislike")
    public String editDislikeFood(@RequestBody MemberEditDto memberEditDto) {
        Long memberId = memberService.updateDislikeFood(memberEditDto);
        if (memberId > 0)
            return "ok";
        return "fail";
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
