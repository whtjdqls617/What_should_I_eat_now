package seoul42.openproject.selectfood.controller;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import seoul42.openproject.selectfood.domain.Member;
import seoul42.openproject.selectfood.service.MemberService;

import java.util.Optional;

@RestController
@AllArgsConstructor
public class MemberController {

    private final MemberService memberService;

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

    @GetMapping("/user/signup/check-email/{email}")
    public String checkEmail(@RequestParam String email) {
        Optional<Member> member = memberService.validateDuplicateEmail(email);
        if (member.isPresent()) {
            return "fail";
        }
        return "ok";
    }

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
