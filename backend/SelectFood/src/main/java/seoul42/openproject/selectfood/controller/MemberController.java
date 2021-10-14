package seoul42.openproject.selectfood.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.Member;
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

    @ApiOperation(value = "회원 정보 수정", notes = "회원 정보 수정")
    @PutMapping("/user/edit")
    public String editUserInfo(@RequestBody Member member) {
        return "NULL";
    }

//    @ApiOperation(value = "좋아하는 음식 리스트 변경", notes = "회원 정보 수정 중 좋아하는 음식 리스트 변경")
//    @PutMapping("/user/edit/food/like")
//    public String editFavoriteFood(@RequestBody ) {
//
//    }
//
//    @ApiOperation(value = "싫어하는 음식 리스트 변경", notes = "회원 정보 수정 중 싫어하는 음식 리스트 변경")
//    @PutMapping("/user/edit/food/delike")
//    public String editFavoriteFood() {
//
//    }

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
