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

        memberService.singUp(member);
        return "ok";
    }

    @GetMapping("/login")
    public String login(@RequestBody Member member) {
        Optional<Member> dbMember = memberService.findEmail(member.getEmail());
        if (member.getPassword().equals(dbMember.get().getPassword())) {
            return "ok";
        }
        return "fail";
    }
}
